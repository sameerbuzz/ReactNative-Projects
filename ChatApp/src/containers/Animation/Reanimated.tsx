import React, {Component} from 'react'
import {View, Button, StyleSheet} from 'react-native'
import Animated, { event, cond, eq, Value, Easing, timing } from 'react-native-reanimated';
import { State, TapGestureHandler } from 'react-native-gesture-handler';

export interface AppProps {
}

export interface AppState {
  
}

export default class Example extends React.Component<AppProps, AppState> {
    _transX: Animated.Value<0>;
    _config: { duration: number; toValue: number; easing: Animated.EasingFunction; };
    _anim: Animated.BackwardCompatibleWrapper;
    _opacity: Animated.BackwardCompatibleWrapper;
    _config2: { duration: number; toValue: number; easing: Animated.EasingFunction; };
    mystate: Animated.Value<0>;
    constructor(props: AppProps) {
      super(props);
      this.mystate = new Value(0);
      this._transX = new Value(0);
      this._config = {
        duration: 2000,
        toValue: 120,
        easing: Easing.inOut(Easing.ease),
      };
      this._config2 = {
        duration: 2000,
        toValue: 1,
        easing: Easing.inOut(Easing.ease),
        
      };

      this._anim = timing(this._transX, this._config);
      this._opacity = timing(this._transX, this._config2);
    }

    componentDidMount(){
        this._anim.start();
        this._opacity.start();
        
    }
  
    render() {
      return (
        <View style={styles.container}>
          <Animated.View
            style={[styles.box, {  }, { transform: [{ translateX: this._transX }] }]}
          />
        </View>
      );
    }
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
    },
    box: {
      backgroundColor: "tomato",
      width: 200,
      height: 200,
    },
  });