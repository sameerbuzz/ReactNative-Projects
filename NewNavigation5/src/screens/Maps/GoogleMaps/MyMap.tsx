import * as React from 'react';
import { View, Text, Alert, TextInput, TouchableOpacity, Button, FlatList, Platform } from 'react-native';
import MapView, { PROVIDER_GOOGLE, Marker, Polyline } from 'react-native-maps';
import axios from 'axios';

// custom imports
import Styles from './Styles';
import ResultFlatList from './ResultFlatList';
import TransportFlatList from './TransportFlatList';
import { vw, vh, Color } from '../../../constants';

const transportType = [{ title: 'Car' }, { title: 'Truck' }, { title: 'Motorcycle' }, { title: 'pedestrian' },]
let transpotJson = {
  car: {
    title: '',
    time: ''
  },

}
interface AppProps {
  navigation?: any,
  marker: Array<any>,
  updateMarkers: Function
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
  transport: Array<any>,
  showTransport: boolean
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
        latitude: 28.606226,
        longitude: 77.362085,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
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
      transport: [],
      showTransport: false
    }
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
    let temp: any[] = []
    temp = temp.concat(this.type === 'S' ? this.state.searchCoordinates : this.state.lastCoordinates)
    this.setState({
      searchMarker: temp,
      region: this.type === 'S' ? this.state.searchCoordinates : this.state.lastCoordinates
    })
  }

  getMapRegion = (coordinates: any, place: string) => {
    this.type === 'S' ?
      this.setState({ resultS: [], queryS: place, toggleDirection: true }) :
      this.setState({ resultD: [], queryD: place, toggleDirection: true })
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
    // this.setState({ toggleDirection: false })
    this.setState({ showTransport: true })


    // this.mapView.animateCamera({ center: { latitude: this.state.searchCoordinates.latitude, longitude: this.state.searchCoordinates.longitude }, pitch: 2, heading: 20, altitude: 200, zoom: 100 }, 1000)

    transportType.map((type) => {
      debugger

      this.hitDIrectionAPI(type.title, new Promise((res: any) => {
        let temp: any[] = this.state.transport
        temp = temp.concat(res)
        debugger
        this.setState({
          transport: temp
        }, () => console.warn('state transport', this.state.transport)
        )
      }))

    })


  }

  hitDIrectionAPI = (type: string, promise: any) => {
    debugger
    let temp: any[] = []
    return promise.then((callback: Function) => {
      debugger

      this.hitRouteAPI(type, (data: any) => {
        temp = temp.concat({
          tittle: type,
          route: data[0].legs[0].points
        })
        debugger
        // this.setState({
        //   route: temp
        // })
      })
    }).catch((error: any) => console.warn(error))
  }

  hitRouteAPI = (type: string, callback: Function) => {
    try {
      axios.get(`https://api.tomtom.com/routing/1/calculateRoute/${this.state.searchCoordinates.latitude}%2C${this.state.searchCoordinates.longitude}%3A${this.state.lastCoordinates.latitude}%2C${this.state.lastCoordinates.longitude}/json?avoid=unpavedRoads&travelMode=${type}&key=sZ5pXo5YudONmsTxZU2ZpAhs2HWUCPjP`)
        .then((response: any) => {
          callback(response.data.routes)
        })
    } catch (error) {
      console.warn(error)
    }
  }

  renderItems = (rowData: any) => {
    const { item, index } = rowData
    return (
      <ResultFlatList
        data={item}
        getCoordinates={this.getMapRegion}
      />
    )
  }

  renderTransportItems = (rowData: any) => {
    const { item, index } = rowData
    return (
      <TransportFlatList
        data={item}
        getCoordinates={this.getMapRegion}
      />
    )
  }

  public render() {
    return (
      <View style={Styles.container}>

        {/* Source search bar and Normal search Bar ---------------------- */}
        <View style={Styles.searchBar}>
          <TextInput
            onFocus={() => this.type = 'S'}
            ref={ref => this.searchText = ref}
            numberOfLines={1}
            autoCorrect={false}
            style={Styles.searchText}
            placeholder='Search source here'
            value={this.state.queryS}
            onChangeText={(text: string) => this.setState({ queryS: text }, () => setTimeout(() => { this.hitSearchAPI() }, 800))}
          />
          {this.state.queryS === '' ? null :
            <TouchableOpacity style={Styles.clearBtn} onPress={() => this.setState({ queryS: '', resultS: [], toggleDirection: false })}>
              <Text style={[Styles.searchText, { color: 'grey' }]}>X</Text>
            </TouchableOpacity>}
        </View>

        {/* Destination search bar  ---------------------- */}
        <View style={[Styles.searchBar, { top: vw(65) }]}>
          <TextInput
            onFocus={() => this.type = 'D'}
            ref={ref => this.searchText = ref}
            numberOfLines={1}
            autoCorrect={false}
            style={Styles.searchText}
            placeholder='Search destination here'
            value={this.state.queryD}
            onChangeText={(text: string) => this.setState({ queryD: text }, () => setTimeout(() => { this.hitSearchAPI() }, 800))}
          />
          {this.state.queryD === '' ? null :
            <TouchableOpacity style={Styles.clearBtn} onPress={() => this.setState({ queryD: '', resultD: [], toggleDirection: false })}>
              <Text style={[Styles.searchText, { color: 'grey' }]}>X</Text>
            </TouchableOpacity>}
        </View>

        {/* Source Search results in flatList --------- */}
        <View style={[Styles.searchBarFlat, this.state.resultS === null ? { padding: vw(10), borderWidth: vw(2) } : { padding: 0, borderWidth: 0 }]}>
          <FlatList
            data={this.state.resultS}
            keyExtractor={(item, index) => index.toString()}
            ItemSeparatorComponent={this.itemSeparator}
            renderItem={this.renderItems}
            keyboardShouldPersistTaps='always'
          />
        </View>

        {/* Destination Search results in flatList --------- */}
        <View style={[Styles.searchBarFlat, { top: Platform.OS === 'ios' ? vh(100) : vh(120) }, this.state.resultD === null ? { padding: vw(10), borderWidth: vw(2) } : { padding: 0, borderWidth: 0 }]}>
          <FlatList
            data={this.state.resultD}
            keyExtractor={(item, index) => index.toString()}
            ItemSeparatorComponent={this.itemSeparator}
            renderItem={this.renderItems}
            keyboardShouldPersistTaps='always'
          />
        </View>

        {/* Finding Route option ---------- */}
        {this.state.toggleDirection ?
          <View style={Styles.findRouteView}>
            {this.state.showTransport ? <FlatList
              showsHorizontalScrollIndicator={false}
              horizontal={true}
              data={transportType}
              keyExtractor={(item, index) => index.toString()}
              renderItem={this.renderTransportItems}
            /> : null}
            <View style={{ flexDirection: 'row' }}>
              <Text numberOfLines={2} style={Styles.findRouteText}>{this.type === 'S' ? this.state.queryS : this.state.queryD}</Text>
              {this.state.queryS !== '' && this.state.queryD !== '' ? <TouchableOpacity style={Styles.directionBtn} onPress={() => this.getDirections()} >
                <Text style={Styles.directionTxt}>DIRECTIONS</Text>
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
            strokeWidth={vw(5)}
          />
        </MapView>
      </View>
    );
  }
}
