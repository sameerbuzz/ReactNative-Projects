import React, { Component } from 'react';
import { 
  View, 
  Text, 
  TextInput, 
  StyleSheet, 
  TouchableOpacity, 
  Image,
  ActivityIndicator 
} from 'react-native';
import myPicker from '../components/ImagePickerFn';

export default class Next extends Component {
  
    static navigationOptions = {
        title: 'Next',
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
          fontSize: 25
        },
      };

      constructor(props) {
        super(props)
      
        this.state = {
           first: this.props.navigation.state.params.first,
           last: this.props.navigation.state.params.last,
           source: this.props.navigation.state.params.source,
           isLoading : false,
        };
      };

      result = () => {
        this.props.navigation.state.params.getData(this.state.first, this.state.last, this.state.source)
        this.props.navigation.goBack()
      }

      uploadImageFromGallery = () => {
        myPicker.getSinglePic(mydata => 
          {
            this.setState({source: mydata}
              ,() => {myPicker.uploadmyPic( this.state.source, (res => {
                
                this.setState({
                  isLoading: true,
                })
                this.setState({
                  source: res.postResponse.location
                }, () => {this.setState({isLoading: false})})
                console.warn(this.state.source)
              })
            )})
        })  
    }

  render() {
    const { params } = this.props.navigation.state;
    return (
      <View style={styles.mainView}>
        <ActivityIndicator size='large' hidesWhenStopped='true' color='red' animating={this.state.isLoading} style={styles.loading}/>
        <TouchableOpacity onPress={this.uploadImageFromGallery}>
      <Image source={{uri: this.state.source}} style={styles.img} />
      </TouchableOpacity>
        <TextInput 
        placeholder='Enter First Name' 
        style={styles.textInput} 
        returnKeyType = 'next'
        onChangeText={(text) => this.setState({first : text})}
        value={this.state.first}
        onSubmitEditing={() => { this.secondInput.focus(); }}
        />
        <TextInput 
        placeholder='Enter Last Name' 
        style={styles.textInput} 
        returnKeyType = 'next'
        onChangeText={(text) => this.setState({last : text})}
        value={this.state.last}
        ref={(ref) => { this.secondInput = ref; }}
        onSubmitEditing={this.result} 
        returnKeyType = 'done'
        />
        <TouchableOpacity style={styles.Btn} onPress={this.result}>
            <Text style={{color: 'white', fontSize: 20, fontWeight: 'bold'}}>Save</Text>
            </TouchableOpacity>
      </View>
    );
  }
}
const styles = StyleSheet.create({
    textInput: {
        margin: 20,
        fontSize: 20,
        borderWidth: 1,
        padding: 10,
        borderRadius: 20,
        width: "80%"
    },
    mainView: {
        flex: 1,
        alignContent: 'center',
        alignItems: 'center',
        
    },
    Btn: {
        backgroundColor: '#1cad9a',
        padding: 10,
        borderRadius: 20
      },
      img: {
        height: 200,
        width: 200,
        margin: 20,
        borderRadius: 100
      },
      loading: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 100,
        bottom: 0,
        alignItems: 'center',
        justifyContent: 'center'
    },
})