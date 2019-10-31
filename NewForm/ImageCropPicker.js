import React, { Component } from 'react';
import { 
    View, 
    Text ,
    TouchableOpacity,
    Image,
    StyleSheet
} from 'react-native';
import ImagePickerCam from 'react-native-image-crop-picker';
import ImagePicker from 'react-native-image-picker';

export default class ImageCropPicker extends Component {
  constructor(props) {
    super(props);
    this.state = {
        source: 'https://cdn.pixabay.com/photo/2017/08/30/01/05/milky-way-2695569_960_720.jpg'
    };
  }

uploadImageFromGallery = () => {
    ImagePickerCam.openPicker({
            
        cropping: true
      }).then(image => {
        console.log(image);
        this.setState({
            source: image.path
        })
      });
}

openCamera = () => {
    let options = {
        title: 'Select Image',
        customButtons: [
          { name: 'customOptionKey', title: 'Choose Photo from Custom Option' },
        ],
        storageOptions: {
          skipBackup: true,
          path: 'images',
        },
      };
    ImagePicker.launchCamera(options, (response) => {
        console.log('Response = ', response);

  if (response.didCancel) {
    console.log('User cancelled image picker');
  } else if (response.error) {
    console.log('ImagePicker Error: ', response.error);
  } else if (response.customButton) {
    console.log('User tapped custom button: ', response.customButton);
  } else {
    

    // You can also display the image using data:
    // const source = { uri: 'data:image/jpeg;base64,' + response.data };

    this.setState({
        source: response.uri,
    });
  }
      });
}

  render() {
    return (
      <View>
        <TouchableOpacity 
        style={styles.image,{top: 300, left: 100,}}
        onPress={this.uploadImageFromGallery}>
            <Image 
                style={styles.image}
                source={{uri: this.state.source}} />
            </TouchableOpacity>
            
      </View>
    );
  }
}
styles = StyleSheet.create({
    image: { 
        height: 200,
        width: 200, 
        borderRadius: 100
    }
})
