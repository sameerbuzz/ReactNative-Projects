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

//import ImagePicker from 'react-native-image-picker';

export default class ImageCropPicker extends Component {
  constructor(props) {
    super(props);
    this.state = {
        source: 'https://cdn.pixabay.com/photo/2017/08/30/01/05/milky-way-2695569_960_720.jpg',
        permission: null,
        imageArray: [],
    };
  }

async getPermission(){
  try {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.CAMERA,
      {
        title: 'Give Camera Permission',
        message:'Just need permission ',
        buttonNegative: 'Cancel',
        buttonPositive: 'OK',
      },
    );
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      console.log('You can use the camera');
      this.setState({
        permission: true
      })
    } else {
      console.log('Camera permission denied');
      this.setState({
        permission: false
      })
    }
  } catch (err) {
    console.warn(err);
  }
}

  componentDidMount(){
    // if (this.state.permission == null || this.state.permission == false){
    //     this.getPermission
    // }
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

multipleUploadImage = () => {
  ImagePicker.openPicker({     
      cropping: true,
      multiple: true,
    }).then(image => {
      let temp = []
      console.log(image);
      this.setState({
          source: image
      })
      image.forEach((item)=> {
        let myImage= {
          uri: item.path
        }
        temp.push(myImage)
      
      this.setState({
          imageArray: temp
        })
        //console.warn(this.state.imageArray)
      })
    });
}

static navigationOptions = {
  title: 'Image Crop Picker',
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
        onPress={this.multipleUploadImage}>
            <Image 
                style={styles.image}
                source={{uri: 'https://cdn.pixabay.com/photo/2017/08/30/01/05/milky-way-2695569_960_720.jpg'}} />
            </TouchableOpacity>
            </View>
            <View style={{backgroundColor:'red', height: 500, width: "100%", top: 80}}>
            <FlatList 
            numColumns={3}
              data={this.state.imageArray}
              keyExtractor = {(item,id) => id.toString()}
              renderItem={(item) => {
                <View>
                  <Image 
                      style={{height: 50, width: 50, backgroundColor: 'blue'}}
                      source={{uri: item.myImage}}
                      debugger
                  />
                  </View>
              }}
            />
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
