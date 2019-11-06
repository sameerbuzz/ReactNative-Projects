import React, { Component } from 'react';
import { View, Text } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

export default class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
        email: '',
        fn: '',
        ln: '',
        phone: '',
        age: '',
        username: '',
    };
  }

componentDidMount(){
    AsyncStorage.multiGet(['email', 'fn', 'ln', 'phone', 'age', 'un']).then(res => {
            this.setState({
                email: res[0][1],
                fn: res[1][1],
                ln: res[2][1],
                phone: res[3][1],
                age: res[3][1],
                username: res[4][1],
            })
    })
}

  render() {
    return (
      <View>
        <Text> Hello, {this.state.username}</Text>
        <Text>{this.state.email}</Text>
        <Text>{this.state.fn}</Text>
        <Text>{this.state.ln}</Text>
        <Text>{this.state.phone}</Text>
        <Text>{this.state.age}</Text>
      </View>
    );
  }
}
