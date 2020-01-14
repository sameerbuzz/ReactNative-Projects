import * as React from 'react';
import { View, StyleSheet, Text, Animated, TextInput } from 'react-native';

export interface AppProps {
}

export interface AppState {
  anim: boolean
}

export default class AppComponent extends React.Component<AppProps, AppState> {
  animatedValue: any;
  animatedValue1: any;
  animatedValue2: any;
  constructor(props: AppProps) {
    super(props);
    this.animatedValue = new Animated.Value(0)
    this.animatedValue1 = new Animated.Value(0)
    this.animatedValue2 = new Animated.Value(0)
    this.state = {
      anim: true
    };
  }

  componentDidMount(){
    // this.startAnimation()
  }

  startAnimation = () => {
    Animated.timing(this.animatedValue, {
      toValue: 1,
      duration: 2000
    }).start();
  };

  topAnim = () => {
    setTimeout(() => {
      this.changeState()
    }, 2000);
   if (this.state.anim){
    Animated.timing(this.animatedValue1, {
      toValue: 1,
      duration: 2000
    }).start();
  }else{
    Animated.timing(this.animatedValue2, {
      toValue: 1,
      duration: 2000
    }).start();  }
  
  }

  changeState = () => {
    this.setState({
      anim: !this.state.anim
    })
  }

  bottomAnim = () => {
    Animated.timing(this.animatedValue2, {
      toValue: 1,
      duration: 2000
    }).start();
  }

  public render() {
    
    const viewHeight = this.animatedValue.interpolate({
      inputRange: [0, 1],
      outputRange: [0, 1000]
    })
    const viewHeight1 = this.animatedValue1.interpolate({
      inputRange: [0, 1],
      outputRange: [500, 50]
    })
    const viewHeight2 = this.animatedValue2.interpolate({
      inputRange: [0, 1],
      outputRange: [50, 500]
    })

    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'flex-start',}}>
         <Animated.View style={{ height: viewHeight, backgroundColor: 'red', width: 2}} />
         <Animated.View style={{position:"absolute",top: this.state.anim ? viewHeight1 : viewHeight2, left: 100, right: 0, bottom: 0, width: 100, height: 40 }}>
           <TextInput style={{borderWidth: 2, width: 100, height: 40}}
           onFocus={() => this.topAnim()}
           onSubmitEditing={() => this.topAnim()}
           />
           </Animated.View>
      </View>
    );
  }
}
