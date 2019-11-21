import React, { Component } from 'react';
import { View, Text, Dimensions, Image } from 'react-native';
import { width, height, totalSize } from 'react-native-dimension';
import Icons from 'react-native-vector-icons/FontAwesome';
import PickImage from '../../components/ImagePickerFn';
const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;
Icons.loadFont()

export default class whatsCamera extends Component {
  static navigationOptions= {
    // tabBarLabel:null,
    tabBarIcon:   <Icons style={{marginTop:screenHeight/60, marginBottom:-10,}} name="camera" size={screenWidth/17} color="rgba(255,255,255,0.5)" />,
    tabBarLabel:() => {return null},
    // tabBarStyle: {   width: 20 }
  }
  constructor(props) {
    super(props);
    this.state = {
      img : ''
    };
  }

  async componentDidMount(){
      await PickImage.getCamera(res => {
        this.setState({
          img: res
        })
      })
  }

  render() {
    return (
      <View style={{flex: 1}}>
        <Image source={{uri: this.state.img}} />
      </View>
    );
  }
}
