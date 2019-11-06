import React, {Component } from 'react';
import {SafeAreaView} from 'react-native';
import Static from './StaticData';
import Footer from './Footer';

export default class NewUI extends Component {
    static navigationOptions = {
        title: 'UI Design 1',
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
          fontSize: 25
        },
      };
    render() {
        return(
            <SafeAreaView style = {{flex: 1}}>
                <Static />
                <Footer />
            </SafeAreaView>
        );
    }
}