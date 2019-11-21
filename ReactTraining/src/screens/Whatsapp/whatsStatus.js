import React, { Component } from 'react';
import { View, Text } from 'react-native';

export default class whatsStatus extends Component {
  static navigationOptions= {
             
    tabBarLabel:'Status',
    labelStyle: {
      
    }
  }
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={{flex: 1, backgroundColor: 'white'}}>
        <Text> whatsStatus </Text>
      </View>
    );
  }
}
