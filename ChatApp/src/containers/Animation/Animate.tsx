import * as React from 'react';
import { View, StyleSheet, Text, Animated, TextInput } from 'react-native';
import { vw } from '../../constants';

export interface AppProps {
}

export interface AppState {
  anim: boolean
}

export default class AppComponent extends React.Component<AppProps, AppState> {
  animatedValue: any;
  animatedValue1: any;
  animatedValue2: any;
  animatedValueB1: any;
  animatedValueB2: any;
  animatedValueB3: any;
  animatedValueB4: any;
  animatedCircle: any;
  constructor(props: AppProps) {
    super(props);
    this.animatedValue = new Animated.Value(0)
    this.animatedValue1 = new Animated.Value(0)
    this.animatedValue2 = new Animated.Value(0)
    this.animatedValueB1 = new Animated.Value(0)
    this.animatedValueB2 = new Animated.Value(0)
    this.animatedValueB3 = new Animated.Value(0)
    this.animatedValueB4 = new Animated.Value(0)
    this.animatedCircle = new Animated.Value(0)
    this.state = {
      anim: true
    };
  }

  componentDidMount(){
    // this.startAnimation()
    this.loadingAnim()
    // this.startCircleAnimation()
  }

  startCircleAnimation = () => {
    Animated.timing(this.animatedCircle, {
      toValue: 1,
      duration: 2000
    }).start();
  };

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

  loadingAnim = () => {
      Animated.parallel([
        Animated.timing(this.animatedValueB1, {
          toValue: 1,
          duration: 2000
        }),
        Animated.timing(this.animatedValueB2, {
          toValue: 1,
          duration: 2000
        }),
    ]).start(() => {this.animatedValueB1.setValue(0), this.animatedValueB2.setValue(0),this.loadingAnim()})
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
    const viewHeightB1 = this.animatedValueB1.interpolate({
      inputRange: [0, 0.5, 1],
      outputRange: [5, 20, 5]
    })
    const viewHeightB2 = this.animatedValueB2.interpolate({
      inputRange: [0, 0.5, 1],
      outputRange: [20, 5, 20]
    })

    const viewHeightCircle = this.animatedCircle.interpolate({
      inputRange: [0, 1],
      outputRange: [0, 200]
    })
    const viewWidthCircle = this.animatedCircle.interpolate({
      inputRange: [0, 1],
      outputRange: [0, 200]
    })
    const viewRadiusCircle = this.animatedCircle.interpolate({
      inputRange: [0, 1],
      outputRange: [0, 100]
    })


    // return (
    //   <View style={{flex: 1, alignItems: 'center', justifyContent: 'flex-start',}}>
    //      <Animated.View style={{ height: viewHeight, backgroundColor: 'red', width: 2}} />
    //      <Animated.View style={{position:"absolute",top: this.state.anim ? viewHeight1 : viewHeight2, left: 100, right: 0, bottom: 0, width: 100, height: 40 }}>
    //        <TextInput style={{borderWidth: 2, width: 100, height: 40}}
    //        onFocus={() => this.topAnim()}
    //        onSubmitEditing={() => this.topAnim()}
    //        />
    //        </Animated.View>
    //   </View>
    // );

    return(
      <View style={{flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
        <Animated.View style={{height: viewHeightB1, width: viewHeightB1, borderRadius: viewHeightB1, backgroundColor: 'red', marginHorizontal: 10,}} />
        <Animated.View style={{height: viewHeightB2, width: viewHeightB2, borderRadius: viewHeightB2, backgroundColor: 'blue'}}  />
      </View>
    )
    // return(
    //   <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
    //     <View style={{height: 200, width: 200, borderRadius: 100, backgroundColor: 'red', position: 'absolute', top: 200, bottom: 0, left: 110, right: 0}}>
    //       <Animated.View style={{height: viewHeightCircle, width: 200, borderBottomLeftRadius: 100, borderBottomRightRadius: 100, borderTopRadius: 0, backgroundColor: 'blue', position: 'absolute'}}>
    //         </Animated.View>
    //       </View>
    //     </View>
    // )
  }
}
