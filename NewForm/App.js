import React from 'react';
import Form from './Form';
import Card from'./Card';
import Listdemo from './Flat';
import Data from './PropStateDemo';
import Gallery from './Gallery';
import NewUi from './NewUIDemo/NewUI';
import ApiHit from './ApiHit';
import Main from './UIDemo2/Main';
import {View, ScrollView} from 'react-native';

export default class App extends React.Component {
  render() {
    return (
    
      <View style = {{flex: 1}}>
        {/* <Form />
        <Card />
        <Listdemo />  
        <Data />
        <Gallery />
        <NewUi />
        <ApiHit /> */}
        <Main />
      </View>
    
    );
  }
}
