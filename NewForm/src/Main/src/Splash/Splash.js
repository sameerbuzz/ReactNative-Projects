import React, { Component } from 'react';
import { View, Text } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

export default class Splash extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }


  
componentDidMount(){
  setTimeout(() => {
    this.props.navigation.navigate('Screen1')
  }, 0)
}

  render() {
    return (
      <View>
        <Text> Splash </Text>
      </View>
    );
  }
}
