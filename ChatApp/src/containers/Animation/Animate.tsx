import * as React from 'react';
import { View, StyleSheet, Text, Animated } from 'react-native';

export interface AppProps {
}

export interface AppState {
}

export default class AppComponent extends React.Component<AppProps, AppState> {
  animatedValue: any;
  constructor(props: AppProps) {
    super(props);
    this.animatedValue = new Animated.Value(0)
    this.state = {
    };
  }

  componentDidMount(){
    this.startAnimation()
  }

  startAnimation = () => {
    Animated.timing(this.animatedValue, {
      toValue: 1,
      duration: 2000
    }).start();
  };

  public render() {
    
    const viewHeight = this.animatedValue.interpolate({
      inputRange: [0, 1],
      outputRange: [0, 1000]
    })

    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'flex-start',}}>
         <Animated.View style={{ height: viewHeight, backgroundColor: 'red', width: 2}} />
      </View>
    );
  }
}
