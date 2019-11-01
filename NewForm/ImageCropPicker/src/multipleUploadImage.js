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
  title: 'Upload Multiple Pics',
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
            <View style={{ height: 500, width: "100%", top: 80}}>
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
