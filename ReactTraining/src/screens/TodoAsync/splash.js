import React, { Component } from 'react';
import { 
    View, 
    Text,
    Animated,
    Easing,
    Dimensions,
    StyleSheet
} from 'react-native';
const screenHeight = Dimensions.get('window').height;
export default class splash extends Component {

    animatedValue = new Animated.Value(0)
    springValue = new Animated.Value(0.3)

    static navigationOptions = {
        header: null
      };

    componentDidMount() {
        this.animate()
      }

    animate = () => {
        this.animatedValue.setValue(0)
        this.springValue.setValue(0.3)
        Animated.sequence([
          Animated.spring(
            this.springValue,
            {
              toValue: 1,
              friction: 1
            }
          ).start(),
          Animated.timing(
            this.animatedValue,{
              toValue: 1,
              duration: 5000,
              easing: Easing.linear
            }
          ).start(() => {this.props.navigation.navigate('TodoListContainer')})
        ])
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
        <View style={{alignItems: 'center',flex: 1}}>
        <Animated.Text style={{ ...styles.anim,opacity,transform: [{scale: this.springValue},{rotateX}]}}>
          Sameer
          </Animated.Text>
        </View>
    );
  }
}
const styles = StyleSheet.create({
  anim: {
     fontSize: screenHeight/20, 
     color: '#1cad9a', 
     fontWeight: 'bold', 
     top: screenHeight/3
  }
})