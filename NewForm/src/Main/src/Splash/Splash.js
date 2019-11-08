import React, { Component } from 'react';
import { 
  View, 
  Text,
  Animated,
  Image,
  Easing,
  StyleSheet 
} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

export default class Splash extends Component {

  constructor(props) {
    super(props);
    this.animatedValue = new Animated.Value(0)
    this.springValue = new Animated.Value(0.3)
    this.state = {
      email: ''
    }
  }
animate = () => {
  this.animatedValue.setValue(0)
  this.springValue.setValue(0.3)
  Animated.sequence([
    Animated.timing(
      this.animatedValue,{
        toValue: 1,
        duration: 5000,
        easing: Easing.linear
      }
    ).start(),
    Animated.spring(
      this.springValue,
      {
        toValue: 1,
        friction: 1
      }
    ).start()
  ])

  setTimeout(() => {
    console.warn('email->',this.state.email)
    this.props.navigation.navigate(this.state.email == null ? 'Screen1' : 'Screen4')
 }, 5000)
  
}

componentDidMount() {
  AsyncStorage.getItem('email', (err, result) => {this.setState({email: result})})
  // AsyncStorage.clear();
  this.animate()
}

  render() {

    const opacity = this.animatedValue.interpolate({
      inputRange: [0, 0.5, 1],
      outputRange: [0, 1, 0]
    })
    const rotateX = this.animatedValue.interpolate({
      inputRange: [0, 0.5, 1],
      outputRange: ['0deg', '180deg', '0deg']
    })

    goToNext = () => {
      setTimeout(() => {
         this.props.navigation.navigate('Screen1')
      }, 0)
    }
    return (
      <View style={{flex: 1}}>
        <View style={{alignItems: 'center',}}>
        <Animated.Text style={{ opacity, fontSize: 50, color: '#1cad9a', fontWeight: 'bold', top: 300,transform: [{scale: this.springValue},{rotateX}]}}>
          Sameer
          </Animated.Text>
        </View>
      </View>
      
    );
  }
}
