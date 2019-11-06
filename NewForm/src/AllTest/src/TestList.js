import React from 'react';
import {
    View,
    Text,
    Button,
} from 'react-native';

import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
export default class TestList extends React.Component {
    navigationOptions = {
      title: 'Test List',
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
        fontSize: 25
      },
    };
    render() {
      return (
        <View style={{ flex: 1, alignItems: 'center', Top: 40 }}>
          <Text style={{margin: 20}}>Test List</Text>
          <Button title='Fetch Data' onPress={()=> {this.props.navigation.push('Test1')}} color='grey' backgroundColor='black'/>
        </View>
      );
    }
  }