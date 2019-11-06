import React, { Component } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

export default class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
        email: ''
    };
  }

  result = () => {
      AsyncStorage.setItem('email', this.state.email, () => {
          AsyncStorage.getItem('email', (err, result) => {console.warn(result)})   
      })
      
      this.props.navigation.navigate('Screen3', {email: this.state.email})
  }

  render() {
    return (
      <View>
        <Text> Enter email </Text>
        <TextInput placeholder='Enter email here' value={this.state.email} onChangeText={(text)=> this.setState({email: text})}/>
        <Button onPress={() => {this.result()}} title='Sign in'/>
      </View>
    );
  }
}
