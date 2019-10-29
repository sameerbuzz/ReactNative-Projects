import React, { Component } from 'react';
import { SafeAreaView } from 'react-native';
import FetchData from './AllTest/FetchData';

export default class App extends Component {

  render() {
    return (
      <SafeAreaView>
        <FetchData />
      </SafeAreaView>
    );
  }
}
