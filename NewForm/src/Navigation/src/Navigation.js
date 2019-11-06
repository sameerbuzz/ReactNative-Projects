import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

export default class Navigation extends Component {
    navigationOptions = {
      title: 'Home Page',
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
        fontSize: 25
      },
    };
    render() {
      return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text>Home Screen</Text>
          <Button title='Next Screen' onPress={()=> {this.props.navigation.push('NextScreen')}} color='grey'/>
        </View>
      );
    }
  }