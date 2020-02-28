import * as React from 'react';
import { View, Text, Alert, TextInput, TouchableOpacity, Button, FlatList, Platform } from 'react-native';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import axios from 'axios';

// custom imports
import Styles from './Styles';
import ResultFlatList from './ResultFlatList';
import { vw, vh } from '../../../constants';

interface AppProps {
  navigation?: any,
  marker: Array<any>,
  updateMarkers: Function
}
interface AppState {
  region: any,
  markers: Array<any>,
  x: any,
  getCoordinates: any,
  query: string,
  result: Array<any>,
  searchCoordinates: any,
  searchMarker: Array<any>
}

export default class AppComponent extends React.PureComponent<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props);
    this.state = {
      region: {
        latitude: 28.606226,
        longitude: 77.362085,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      },
      markers: [this.marker],
      x: null,
      getCoordinates: null,
      query: '',
      result: [],
      searchCoordinates: null,
      searchMarker: []
    }
  }

  marker = {
    latlng: {
      latitude: 28.606226,
      longitude: 77.362085
    },
    title: 'okk',
    description: 'yeah',

  }

  hitSearchAPI = () => {
    if (this.state.query.length >= 2) {
      try {
        axios.get(`https://api.tomtom.com/search/2/search/+${this.state.query}+.json?key=qYnOE6fopDXJS9glDv0RgmXWAA6EjdV4&limit=3`)
          .then(response => {
            this.setState({ result: response.data.results })
          })
      } catch (error) {
        console.log(error)
      }
    } else {
      this.setState({ result: [] })
    }
  }

  setCoordinates = (coordinates: any) => {
    this.setState({
      result: [],
      region: {
        latitude: coordinates.lat,
        longitude: coordinates.lon,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      },
      searchCoordinates: { latitude: coordinates.lat, longitude: coordinates.lon },
    }, this.setSearchMarker)
  }

  setSearchMarker = () => {
    let temp: any[] = []
    temp = temp.concat(this.state.searchCoordinates)
    this.setState({
      searchMarker: temp
    })
  }
  itemSeparator = () => {
    return (
      <View style={Styles.separator} />
    )
  }

  renderItems = (rowData: any) => {
    const { item, index } = rowData
    return (
      <ResultFlatList
        data={item}
        getCoordinates={this.setCoordinates}
      />
    )
  }

  public render() {
    return (
      <View style={Styles.container}>
        <View style={Styles.searchBar}>
          <TextInput style={Styles.searchText} placeholder='Search here' value={this.state.query} onChangeText={(text: string) => this.setState({ query: text }, () => this.hitSearchAPI())} />
        </View>
        <View style={[Styles.searchBarFlat, this.state.result === null ? { padding: vw(10), borderWidth: vw(2) } : { padding: 0, borderWidth: 0 }]}>
          <FlatList
            data={this.state.result}
            keyExtractor={(item, index) => index.toString()}
            ItemSeparatorComponent={this.itemSeparator}
            renderItem={this.renderItems}
          />
        </View>
        <MapView
          provider={PROVIDER_GOOGLE} // remove if not using Google Maps
          style={[Styles.map, { zIndex: 0 }]}
          region={this.state.region}
          onLongPress={(e) => this.setState({ getCoordinates: e.nativeEvent.coordinate }, () => this.props.navigation.navigate('MarkerModal', { laglat: this.state.getCoordinates }))}
        >
          {this.props.marker.map(marker => (
            <Marker
              coordinate={marker.coordinates}
              title={marker.title}
              description={marker.description}
              key={Math.random().toString()}
            />
          ))}
          {this.state.searchMarker.map(marker => (
            <Marker
              coordinate={marker}
              key={Math.random().toString()}
            />
          ))}
        </MapView>
      </View>
    );
  }
}
