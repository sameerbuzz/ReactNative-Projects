import React, { Component } from 'react';
import { View, Text } from 'react-native';

export default class OnboardingSplash extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
componentDidMount(){
  this.props.navigation.navigate('CreateEventStep2')
}
  render() {
    const  gradientHeight=500;
    const gradientBackground  = 'purple';
    const data = Array.from({ length: gradientHeight });
    return (
      <View>
        {data.map((_, i) => (
                  <View
                      key={i}
                      style={{
                          position: 'absolute',
                          backgroundColor: gradientBackground,
                          height: 1,
                          bottom: (gradientHeight - i),
                          right: 0,
                          left: 0,
                          zIndex: 2,
                          opacity: (1 / gradientHeight) * (i + 1)
                      }}
                  />
              ))}
      </View>
    );
  }
}
