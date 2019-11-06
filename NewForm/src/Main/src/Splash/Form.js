import React, { Component } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

export default class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
        email: this.props.navigation.state.params.email,
        fn: '',
        ln: '',
        phone: '',
        age: '',
        username: '',
    };
  }

setData = () => {
    AsyncStorage.multiSet([
        ['fn', this.state.fn],
        ['ln', this.state.ln],
        ['phone', this.state.phone],
        ['age', this.state.age],
        ['un', this.state.username],
    ], () => {
        AsyncStorage.multiGet(
            ['email', 'fn', 'ln', 'phone', 'age', 'un'], 
            (err, result) => {console.warn(result)}
            )
    })
    
    this.props.navigation.navigate('Screen4')
}

  render() {
    return (
      <View>
        <Text> Enter Details Here </Text>
        <Text>email: {this.state.email}</Text>
        <TextInput placeholder='enter first name here' value={this.state.fn} onChangeText={(text) => {this.setState({fn : text}) }} />
        <TextInput placeholder='enter last name here' value={this.state.ln} onChangeText={(text) => {this.setState({ln : text}) }} />
        <TextInput placeholder='enter phone no. here' value={this.state.phone} onChangeText={(text) => {this.setState({phone : text}) }} />
        <TextInput placeholder='enter age here' value={this.state.age} onChangeText={(text) => {this.setState({age : text}) }} />
        <TextInput placeholder='enter username here' value={this.state.username} onChangeText={(text) => {this.setState({username : text}) }} />
        <Button title='Sign In' onPress={() => this.setData()} />
      </View>
    );
  }
}
