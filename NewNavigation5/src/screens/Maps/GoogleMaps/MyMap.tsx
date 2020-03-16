import * as React from 'react';
import { View, Text, Alert, TextInput, TouchableOpacity, FlatList, Platform, ActivityIndicator } from 'react-native';
import MapView, { PROVIDER_GOOGLE, Marker, Polyline } from 'react-native-maps';
import axios from 'axios';
import Geolocation from '@react-native-community/geolocation';

// custom imports
import Styles from './Styles';
import ResultFlatList from './ResultFlatList';
import TransportFlatList from './TransportFlatList';
import { vw, vh, Color } from '../../../constants';
// import navigator from 'src/navigator';

const transportType = [{ title: 'car' }, { title: 'truck' }, { title: 'motorcycle' }, { title: 'pedestrian' },]
interface AppProps {
  navigation?: any,
  marker: Array<any>,
  updateMarkers: Function,
  recentSearch: Array<any>,
  updateSearch: Function
}
interface AppState {
  region: any,
  x: any,
  getCoordinates: any,
  queryS: string,
  queryD: string,
  resultS: Array<any>,
  resultD: Array<any>,
  searchCoordinates: any,
  searchMarker: Array<any>,
  toggleDirection: boolean,
  route: Array<any>,
  lastCoordinates: any,
  transport: any,
  showTransport: boolean,
  animate: boolean,
  currentVehicle: string,
  showNavigation: boolean,
  currentPosition: any
}
export default class AppComponent extends React.PureComponent<AppProps, AppState> {
  mapView: any;
  searchText: any;
  type: string | undefined;
  constructor(props: AppProps) {
    super(props);
    this.mapView = React.createRef()
    this.searchText = React.createRef()
    this.state = {
      region: {
        latitude: 0,
        longitude: 0,
        latitudeDelta: 0,
        longitudeDelta: 0,
      },
      x: null,
      getCoordinates: null,
      queryS: '',
      queryD: '',
      resultS: [],
      resultD: [],
      searchCoordinates: null,
      searchMarker: [],
      toggleDirection: false,
      route: [],
      lastCoordinates: null,
      transport: {},
      showTransport: false,
      animate: false,
      currentVehicle: 'car',
      showNavigation: false,
      currentPosition: null,
    }
  }

  componentDidMount() {
    console.warn('recent ',this.props.recentSearch);
    
    Geolocation.getCurrentPosition(info => {
      this.setState({
        currentPosition: {
          latitude: info.coords.latitude,
          longitude: info.coords.longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        },
      }, () => this.setState({
        region: this.state.currentPosition,
        queryS: 'Current Location',
        searchCoordinates: this.state.currentPosition
      }))
    });
  }

  hitSearchAPI = () => {
    let query = ''
    this.type === 'S' ? query = this.state.queryS : query = this.state.queryD
    if (query.length >= 2) {
      try {
        axios.get(`https://api.tomtom.com/search/2/search/+${query}+.json?key=sZ5pXo5YudONmsTxZU2ZpAhs2HWUCPjP&limit=7`)
          .then(response => {
            this.type === 'S' ?
              this.setState({ resultS: response.data.results }) : this.setState({ resultD: response.data.results })
          })
      } catch (error) {
        console.log(error)
      }
    } else {
      this.type === 'S' ?
        this.setState({ resultS: [] }) : this.setState({ resultD: [] })
    }
  }

  setSearchMarker = () => {
    let temp: any[] = this.state.searchMarker
    this.type === 'S' ? temp[0] = this.state.searchCoordinates : temp[1] = this.state.lastCoordinates
    this.setState({
      searchMarker: temp,
      region: this.type === 'S' ? this.state.searchCoordinates : this.state.lastCoordinates
    })
  }

  getMapRegion = (coordinates: any, place: string) => {
    this.props.updateSearch(coordinates, place)

    this.type === 'S' ?
      this.setState({ resultS: [], queryS: place, toggleDirection: true, showTransport: false }) :
      this.setState({ resultD: [], queryD: place, toggleDirection: true, showTransport: false })
    this.searchText.blur()
    setTimeout(() => {
      this.setSearchMarker()
    }, 2000);

    let r = {
      latitude: coordinates.lat,
      longitude: coordinates.lon,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    }

    this.type === 'S' ?
      this.setState({
        searchCoordinates: r
      }, () => this.mapView.animateToRegion(r, 2000))
      :
      this.setState({
        lastCoordinates: r
      }, () => this.mapView.animateToRegion(r, 2000))
  }

  itemSeparator = () => {
    return (
      <View style={Styles.separator} />
    )
  }

  getDirections = async () => {
    this.setState({ showTransport: false, animate: true, searchCoordinates: this.state.currentPosition }, async () => {
      await Promise.all(transportType.map(async (type) => {
        let result = await new Promise((resolve, reject) => {
          this.hitRouteAPI(type.title, (response: any) => {
            resolve(response)
          })
        })
        let temp = this.state.transport
        let newType = type.title.toString()
        Object.assign(temp, { [newType]: result })
        this.setState({
          transport: temp
        })
      }
      ))
      this.setState({ animate: false, showTransport: true }, () => this.getPaths('car'))
    })
  }

  hitRouteAPI = (type: string, callback: Function) => {
    try {
      axios.get(`https://api.tomtom.com/routing/1/calculateRoute/${this.state.searchCoordinates.latitude}%2C${this.state.searchCoordinates.longitude}%3A${this.state.lastCoordinates.latitude}%2C${this.state.lastCoordinates.longitude}/json?avoid=unpavedRoads&travelMode=${type}&key=sZ5pXo5YudONmsTxZU2ZpAhs2HWUCPjP`)
        .then((response: any) => {
          callback(response.data.routes)
        }).catch((error) => {
          console.warn(error)
        })
    } catch (error) {
      console.warn(error)
    }
  }

  getPaths = (title: string) => {

    this.setState({ currentVehicle: title })

    const sa = this.state.searchCoordinates.latitude
    const so = this.state.searchCoordinates.longitude
    const la = this.state.lastCoordinates.latitude
    const lo = this.state.lastCoordinates.longitude
    const zoom = 0.07

    let averageCoordinate = {
      latitude: (sa + la) / 2,
      longitude: (so + lo) / 2,
      latitudeDelta: sa > la ? (sa - la) + zoom : (la - sa) + zoom,
      longitudeDelta: so > lo ? (so - lo) + zoom : (lo - so) + zoom,
    }
    this.setState({
      region: averageCoordinate
    }, () => this.mapView.animateToRegion(averageCoordinate, 2000))

    const data: Array<any> = this.state.transport[title];
    data.forEach(itemData => {
      const legArr: Array<any> = itemData.legs;
      legArr.forEach(legData => {
        const legPoints = legData.points;
        this.setState({
          route: legPoints
        })
      });
    });
  }

  startNavigation = () => {
    this.setState({
      showTransport: false,
      showNavigation: true,
      currentPosition: {
        latitude: this.state.currentPosition.latitude,
        longitude: this.state.currentPosition.longitude,
        latitudeDelta: 0.001,
        longitudeDelta: 0.001,
      }
    }, () => this.mapView.animateToRegion(this.state.currentPosition, 1000))

    Geolocation.watchPosition((info) => {
      this.setState({
        currentPosition: {
          latitude: info.coords.latitude,
          longitude: info.coords.longitude,
          latitudeDelta: 0.001,
          longitudeDelta: 0.001,
        }
      })
    }, (error) => {
      console.warn(error);
    },
      { enableHighAccuracy: true, distanceFilter: 1 }
    )
  }

  stopNavigation = () => {
    this.setState({
      showTransport: true,
      showNavigation: false
    }, () => Geolocation.stopObserving())
  }

  renderItems = (rowData: any) => {
    const { item, index } = rowData
    console.warn('here');
    return (
      <ResultFlatList
        dataAddress={this.state.resultD === [] ? item.address : item.address.freeformAddress}
        dataPosition={item.position}
        getCoordinates={this.getMapRegion}
      />
    )
  }

  renderTransportItems = (rowData: any) => {
    const { item, index } = rowData
    return (
      <TransportFlatList
        data={item}
        currentVehicle={this.state.currentVehicle}
        time={this.state.transport[item.title]}
        getPath={this.getPaths}
      />
    )
  }

  componentWillUnmount() {
    this.setState({
      showTransport: true,
      showNavigation: false
    }, () => Geolocation.stopObserving())
  }

  public render() {
    return (
      <View style={Styles.container}>

        {/* Source search bar and Normal search Bar ---------------------- */}
        <View style={Styles.searchBarView}>
          <TextInput
            editable={false}
            onFocus={() => { this.type = 'S', this.setState({ resultD: [] }) }}
            ref={ref => this.searchText = ref}
            numberOfLines={1}
            autoCorrect={false}
            style={Styles.searchText}
            placeholder='Search source here'
            value={this.state.queryS}
            onChangeText={(text: string) => this.setState({ queryS: text }, () => setTimeout(() => { this.hitSearchAPI() }, 800))}
          />
          {this.state.queryS === '' ? null :
            <TouchableOpacity activeOpacity={0.8} style={Styles.clearBtn} >
              {/* onPress={() => this.setState({ queryS: '', resultS: [], toggleDirection: false })}> */}
              <Text style={[Styles.searchText, { color: 'grey' }]}></Text>
            </TouchableOpacity>}
        </View>

        {/* Destination search bar  ---------------------- */}
        <View style={[Styles.searchBarView, { marginTop: Platform.OS === 'ios' ? vh(45) : vh(65) }]}>
          <TextInput
            onFocus={() => { this.type = 'D', this.setState({ resultS: [] }) }}
            ref={ref => this.searchText = ref}
            numberOfLines={1}
            autoCorrect={false}
            style={Styles.searchText}
            placeholder='Search destination here'
            value={this.state.queryD}
            onChangeText={(text: string) => this.setState({ queryD: text }, () => setTimeout(() => { this.hitSearchAPI() }, 800))}
          />
          {this.state.queryD === '' ? null :
            <TouchableOpacity activeOpacity={0.8} style={Styles.clearBtn} onPress={() => this.setState({ queryD: '', resultD: [], toggleDirection: false })}>
              <Text style={[Styles.searchText, { color: 'grey' }]}>X</Text>
            </TouchableOpacity>}
        </View>

        {/* Source Search results in flatList --------- */}
        <View style={[Styles.searchBarFlat, this.state.resultS === null ? { padding: vw(10), borderWidth: vw(2) } : { padding: 0, borderWidth: 0 }]}>
          <FlatList
            data={this.state.resultS === [] ? this.props.recentSearch : this.state.resultS}
            keyExtractor={(item, index) => index.toString()}
            ItemSeparatorComponent={this.itemSeparator}
            renderItem={this.renderItems}
            keyboardShouldPersistTaps='always'
          />
        </View>

        {/* Destination Search results in flatList --------- */}
        <View style={[Styles.searchBarFlat, { top: Platform.OS === 'ios' ? vh(120) : vh(140) }, this.state.resultD === null ? { padding: vw(10), borderWidth: vw(2) } : { padding: 0, borderWidth: 0 }]}>
          <FlatList
            data={this.state.resultD === [] ? this.props.recentSearch : this.state.resultD}
            keyExtractor={(item, index) => index.toString()}
            ItemSeparatorComponent={this.itemSeparator}
            renderItem={this.renderItems}
            keyboardShouldPersistTaps='always'
          />
        </View>

        {/* Finding Route option ---------- */}
        {this.state.toggleDirection ?
          <View style={Styles.findRouteView}>
            {this.state.animate ? <ActivityIndicator animating={this.state.animate} size='large' color={Color.mapBlue} /> : null}
            {this.state.showTransport && this.state.transport !== {} ? <FlatList
              showsHorizontalScrollIndicator={false}
              bounces={false}
              horizontal={true}
              data={transportType}
              keyExtractor={(item, index) => index.toString()}
              renderItem={this.renderTransportItems}
            /> : null}
            <View style={Styles.bottomDirectionView}>
              {/* <Text numberOfLines={1} style={Styles.findRouteText}>{this.type === 'S' ? this.state.queryS : this.state.queryD}</Text> */}
              {this.state.queryS !== '' && this.state.queryD !== '' ? <TouchableOpacity activeOpacity={0.8} style={Styles.directionBtn} onPress={() => this.state.showTransport ? this.startNavigation() : (this.state.showNavigation ? this.stopNavigation() : this.getDirections())} >
                <Text style={Styles.directionTxt}>{this.state.showTransport && this.state.transport !== {} ? 'NAVIGATE' : (this.state.showNavigation ? 'STOP' : 'DIRECTIONS')}</Text>
              </TouchableOpacity> : null}
            </View>
          </View>
          : null}

        {/* Main Map View ------------- */}
        <MapView
          ref={ref => (this.mapView = ref)}
          zoomEnabled={true}
          showsUserLocation={true}
          provider={PROVIDER_GOOGLE} // remove if not using Google Maps
          style={[Styles.map, { zIndex: 0 }]}
          region={this.state.region}
          showsCompass={true}
          showsMyLocationButton={true}
          onLongPress={(e) => this.setState({ getCoordinates: e.nativeEvent.coordinate }, () => this.props.navigation.navigate('MarkerModal', { laglat: this.state.getCoordinates }))}
        >

          {/* Permanent Markers made by user ----------- */}
          {this.props.marker.map(marker => (
            <Marker
              coordinate={marker.coordinates}
              title={marker.title}
              description={marker.description}
              key={Math.random().toString()}
            />
          ))}

          {/* Markers of Searched places ---------------  */}
          {this.state.searchMarker.map(marker => (
            <Marker
              coordinate={marker}
              key={Math.random().toString()}
            />
          ))}

          {/* Path from source to destination */}
          <Polyline
            coordinates={this.state.route}
            strokeColor={Color.mapBlue}
            strokeWidth={this.state.showNavigation ? vw(10) : vw(5)}
          />

          {/* Custom marker for GPS Pointer indicating user's position */}
          {/* <Marker

          /> */}

        </MapView>
      </View>
    );
  }
}
