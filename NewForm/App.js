import React from 'react';
import Form from './Form';
import Card from'./Card';
import Listdemo from './Flat';
import Data from './PropStateDemo';
import Gallery from './Gallery';
import {View, ScrollView} from 'react-native';

export default class App extends React.Component {
  render() {
    return (
    
      <View style = {{flex: 1,}}>
        {/* <Form />
        <Card />
        <Listdemo />   */}
        <Data />
        {/* <Gallery /> */}
      </View>
    
    );
  }
}
