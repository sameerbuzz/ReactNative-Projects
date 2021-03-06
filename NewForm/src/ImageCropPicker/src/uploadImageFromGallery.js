import React, { Component, PermissionsAndroid } from 'react';
import { 
    View, 
    Text ,
    TouchableOpacity,
    Image,
    StyleSheet,
    FlatList
} from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';
import myPicker from '../../components/ImagePickerFn.js'
export default class ImageCropPicker extends Component {
  constructor(props) {
    super(props);
    this.state = {
        source: 'https://cdn.pixabay.com/photo/2017/08/30/01/05/milky-way-2695569_960_720.jpg',
        permission: null,
        imageArray: [],
    };
  }

uploadImageFromGallery = () => {
    myPicker.getSinglePic((response)=>{
      this.setState({
        source: response
      })
  })
}

static navigationOptions = {
  title: 'Upload Pic',
  headerTintColor: '#fff',
  headerTitleStyle: {
    fontWeight: 'bold',
    fontSize: 25
  },
};
  render() {
    return (
      <View>
        <View>
        <TouchableOpacity 
        style={styles.image,{top: 50, left: 80,}}
        onPress={this.uploadImageFromGallery}>
            <Image 
                style={styles.image}
                source={{uri: this.state.source}} />
            </TouchableOpacity>
            </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
    image: { 
        height: 200,
        width: 200, 
        borderRadius: 100
    }
})
