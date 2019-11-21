import React, { Component } from 'react';
import { View, Image, StyleSheet, Dimensions } from 'react-native';

import picName from '../../constants/styles/picName';
const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;

export default class whatsappSplash extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

componentDidMount(){
  setTimeout(() => {
    this.props.navigation.navigate('WhatsappHome')
 }, 1000)
}

  render() {
    return (
      <View style={styles.main}>
        <Image 
        style={styles.img}
        source={picName.whatsPic}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  main: {
    alignItems: "center",
    justifyContent: 'center',
    flex: 1,
  },
  img: {
    height: screenHeight/5,
    width: screenWidth/2,
    shadowColor: 'grey',
    shadowOffset: {height: 2, width: 0},
    shadowOpacity: 0.2,
  }
})