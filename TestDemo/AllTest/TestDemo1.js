import React from 'react';
import {
    View, 
    Text,
    SafeAreaView
} from 'react-native';
import {SearchBar} from 'react-native-elements';

export default function TestDemo() {
    return(
        <SafeAreaView>
            <SearchBar placeholder='Enter Place' />
        </SafeAreaView>
    );
}