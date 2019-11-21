import React, { Component } from 'react';
import { View, Text } from 'react-native';

export default class whatsCall extends Component {
  static navigationOptions= {
    tabBarLabel: 'Calls'
  }
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={{backgroundColor: 'white', flex: 1}}>
        <Text> whatsCall </Text>
      </View>
    );
  }
}
