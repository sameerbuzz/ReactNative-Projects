import React, { Component, PermissionsAndroid } from 'react';
import { 
    View,
    Button 
} from 'react-native';

export default class ImageCropPicker extends React.Component {
  navigationOptions = {
    title: 'Upload From Here',
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
      fontSize: 25
    },
  };
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', Top: 40 }}>
        <Button title='Upload Pic' onPress={()=> {this.props.navigation.push('Cam1')}} color='grey' backgroundColor='black'/>
        <Button title='Upload Multiple Pics' onPress={()=> {this.props.navigation.push('Cam2')}} color='grey' backgroundColor='black'/>
        <Button title='Uload From Camera' onPress={()=> {this.props.navigation.push('Cam3')}} color='grey' backgroundColor='black'/>
        <Button title='Upload Video' onPress={()=> {this.props.navigation.push('Cam4')}} color='grey' backgroundColor='black'/>
      </View>
    );
  }
}