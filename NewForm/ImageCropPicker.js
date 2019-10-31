import React, { Component, PermissionsAndroid } from 'react';
import { 
    View, 
    Text ,
    TouchableOpacity,
    Image,
    StyleSheet
} from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';
//import ImagePicker from 'react-native-image-picker';

export default class ImageCropPicker extends Component {
  constructor(props) {
    super(props);
    this.state = {
        source: 'https://cdn.pixabay.com/photo/2017/08/30/01/05/milky-way-2695569_960_720.jpg'
    };
  }

uploadImageFromGallery = () => {
    ImagePicker.openPicker({     
        cropping: true
      }).then(image => {
        console.log(image);
        this.setState({
            source: image.path
        })
      });
}
uploadVideoFromGallery = () => {
  ImagePicker.openPicker({ 
    mediaType: 'video'    
    }).then(video => {
      console.log(video);
      this.setState({
          source: video.path
      })
    });
}

openCamera = () => {
  ImagePicker.openCamera({     
    cropping: true
  }).then(image => {
    console.log(image);
    this.setState({
        source: image.path
    })
  });
}

  render() {
    return (
      <View>
        <TouchableOpacity 
        style={styles.image,{top: 200, left: 80,}}
        onPress={this.openCamera}>
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
