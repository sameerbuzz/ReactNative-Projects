import React, {Component } from 'react';
import {SafeAreaView} from 'react-native';
import Static from './StaticData';
import Footer from './Footer';

export default class NewUI extends Component {
    render() {
        return(
            <SafeAreaView style = {{flex: 1}}>
                <Static />
                <Footer />
            </SafeAreaView>
        );
    }
}