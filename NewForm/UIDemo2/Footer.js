import React, { Component } from 'react';
import { 
     View,
     Text,
    ScrollView,
    Image
    } from 'react-native';
import Card from './Card';

export default class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
        <View style={{flex: 1, backgroundColor: 'white', flexDirection: 'row', justifyContent: 'space-evenly', borderWidth: 1, paddingTop: 10}}>
            <Image source={require('./home.png')} />
            <Image source={require('./search.png')} />
            <Image source={require('./person.png')} />
            <Image source={require('./notification.png')} />
            <Image source={require('./settings.png')} />
            </View>
    );}}