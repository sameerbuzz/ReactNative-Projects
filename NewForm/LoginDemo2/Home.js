import React, { Component } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

export default class LoginDemo2 extends Component {
    static navigationOptions = {
        title: 'Login Demo 2',
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
          fontSize: 25
        },
      };
  render() {
    return (
      <View style={styles.mainView}>
        <TextInput placeholder='Enter First Name' style={styles.textInput}>
            </TextInput>
        <TextInput placeholder='Enter Last Name' style={styles.textInput}>
            </TextInput>
      </View>
    );
  }
}
const styles = StyleSheet.create({
    textInput: {
        margin: 20,
        fontSize: 20,
        borderWidth: 1,
        padding: 10,
        borderRadius: 20,
        width: "80%"
    },
    mainView: {
        flex: 1,
        alignContent: 'center',
        alignItems: 'center',
        
    },
    Btn: {
      backgroundColor: '#1cad9a',
      padding: 10,
      borderRadius: 20
    }
})