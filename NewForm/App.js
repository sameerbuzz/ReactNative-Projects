import React from 'react';
import Form from './Form';
import Card from'./Card';
import Listdemo from './Flat';
import Data from './PropStateDemo';
import {View, ScrollView} from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <ScrollView>
      <View>
        {/* <Form />
        <Card />
        <Listdemo />  */}
        <Data />
      </View>
      </ScrollView>
    );
  }
}
