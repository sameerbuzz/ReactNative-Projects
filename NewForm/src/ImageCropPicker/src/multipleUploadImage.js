import React, { Component } from 'react';
import { 
    View, 
    Text ,
    TouchableOpacity,
    Image,
    StyleSheet,
    FlatList
} from 'react-native';
import myPicker from '../../components/ImagePickerFn.js';

export default class ImageCropPicker extends Component {
  constructor(props) {
    super(props);
    this.state = {
        source: 'https://cdn.pixabay.com/photo/2017/08/30/01/05/milky-way-2695569_960_720.jpg',
        imageArray: [],
    };
  }

multipleUploadImage = () => {
  myPicker.getMultiplePic(response => {
    this.setState({
      imageArray: response
    })
  })   
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
        style={styles.image,{top: 50, alignContent: 'center', alignItems: 'center'}}
        onPress={this.multipleUploadImage}>
            <Image 
                style={styles.image}
                source={{uri: this.state.source}} />
            </TouchableOpacity>
            </View>
            <View style={{ height: 500, width: "100%", top: 80, alignContent: 'center', alignItems: 'center'}}>
            <FlatList 
              numColumns={3}
              data={this.state.imageArray}
              keyExtractor = {(item,id) => id.toString()}
              renderItem = {({item}) => {
                return(
                <Image 
                    style={{height: 100, width: 100,}}
                    source={{uri : item}}
                debugger/> )
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
