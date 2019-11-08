import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import myPicker from '../../../components/ImagePickerFn';

export default class Form extends Component {

    static navigationOptions = {
        title: 'Enter Details',
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
          fontSize: 25
        },
      };

  constructor(props) {

    super(props);
    this.state = {
        type: JSON.parse( AsyncStorage.multiGet(['type'])) == null ? true : JSON.parse(AsyncStorage.multiGet(['type'])),
        email: AsyncStorage.multiGet(['email']) == null ? 'it is null ' : AsyncStorage.multiGet(['email']),
        fn: '',
        ln: '',
        phone: '',
        age: '',
        username: '',
        source: AsyncStorage.multiGet(['photo']) == null ? 'https://www.pngfind.com/pngs/m/292-2924933_image-result-for-png-file-user-icon-black.png' : AsyncStorage.multiGet(['photo']),

    };
  }

setData = () => {
    AsyncStorage.multiSet([
        ['fn', this.state.fn],
        ['ln', this.state.ln],
        ['phone', this.state.phone],
        ['age', this.state.age],
        ['un', this.state.username],
        ['photo', this.state.source],
        ['type', JSON.stringify(this.state.type)],
    ], () => {
        AsyncStorage.multiGet(
            ['email', 'fn', 'ln', 'phone', 'age', 'un', 'photo',], 
            (err, result) => {console.warn('whole data-> ',result)}
            )
    }
    )
    
    this.props.navigation.navigate('Screen4')
}

uploadImageFromGallery = () => {
  myPicker.getSinglePic((response)=>{
    this.setState({
      source: response
    })
})
}

  render() {
    return (
      <View style={{flex: 1}}>
        <View style={styles.image,{justifyContent: 'center', alignItems: 'center'}}>
        <TouchableOpacity 
        style={styles.image}
        onPress={this.state.type ? null :this.uploadImageFromGallery}
        >
            <Image 
                style={styles.image}
                source={{uri: this.state.source}} />
            </TouchableOpacity>
            </View>
        <Text style={{fontSize: 30}}>{this.state.email}</Text>
        <TextInput placeholder='Enter first name here' value={this.state.fn} onChangeText={(text) => {this.setState({fn : text}) }} style={styles.field}/>
        <TextInput placeholder='Enter last name here' value={this.state.ln} onChangeText={(text) => {this.setState({ln : text}) }} style={styles.field}/>
        <TextInput placeholder='Enter phone no. here' value={this.state.phone} onChangeText={(text) => {this.setState({phone : text}) }} style={styles.field}/>
        <TextInput placeholder='Enter age here' value={this.state.age} onChangeText={(text) => {this.setState({age : text}) }} style={styles.field}/>
        <TextInput placeholder='Enter username here' value={this.state.username} onChangeText={(text) => {this.setState({username : text}) }} style={styles.field}/>
        <View style={{alignItems: 'center',}}>
        <TouchableOpacity onPress={() => this.setData()} style={styles.btn} >
            <Text style={{color: 'white', padding: 10, fontWeight: 'bold', fontSize: 20}}>Show</Text>
            </TouchableOpacity>
            </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    field: {
        margin: 10,
        height: 50,
        fontSize: 25,
        padding: 10,
        borderRadius: 15,
        borderWidth: 2
    },
    btn: {
        height: 50,
        width: 100,
        backgroundColor: '#1cad9a',
        justifyContent: 'center',
        marginTop: 20,
        alignItems: 'center',
    },
    image: { 
      height: 200,
      width: 200, 
      borderRadius: 100, 
      marginTop: 10
  }
})