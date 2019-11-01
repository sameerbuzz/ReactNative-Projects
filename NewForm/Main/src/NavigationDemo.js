import React from 'react';
import { View, Text } from 'react-native';

export default class NavigationDemo extends React.Component {
  static navigationOptions = {
    title: 'Navigation Demo',
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
      fontSize: 25
    },
  };
    render() {
      return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text>Next Screen</Text>
        </View>
      );
    }
  }