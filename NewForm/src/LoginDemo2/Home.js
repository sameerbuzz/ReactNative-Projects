import React, { Component } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Image } from 'react-native';

export default class Home2 extends Component {
  static navigationOptions = {
    title: 'Home',
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
      fontSize: 25
    },
  };
constructor(props) {
  super(props)

  this.state = {
     first: 'Sameer',
     last: 'Bhardwaj',
     source: 'https://images.pexels.com/photos/302743/pexels-photo-302743.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260',
  };
};

getData = (fn,ln, img) => {
  this.setState({
    first: fn,
    last: ln,
    source: img
  })
}

render() {


return (
  <View style={styles.mainView}>
      <Image source={{uri: this.state.source}} style={styles.img} />
      <Text style={styles.title}>{this.state.first} {this.state.last}</Text>
      <TouchableOpacity style={styles.Btn} onPress={()=> {this.props.navigation.navigate('Next1', {first: this.state.first, last: this.state.last, getData: this.getData, source: this.state.source})}}>
      <Text style={{color: 'white', fontSize: 20, fontWeight: 'bold'}}>Change</Text>
      </TouchableOpacity>
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
    width: "80%",
    
},
mainView: {
    flex: 1,
    alignContent: 'center',
    alignItems: 'center',
    
},
Btn: {
  backgroundColor: '#1cad9a',
  padding: 15,
  borderRadius: 20,
  margin: 20
},
img: {
  height: 200,
  width: 200,
  margin: 20,
  borderRadius: 100
},
title:{
  fontWeight: 'bold',
  fontSize: 40
},
})