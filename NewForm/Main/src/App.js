import React from 'react';
import Form from './Form';
import Card from'./Card';
import Listdemo from './Flat';
import Data from '../.././PropStateDemo/src/PropStateDemo';
import Gallery from './Gallery';
import NewUi from '../.././NewUIDemo/src/NewUI';
import ApiHit from './ApiHit';
import Main from '../.././UIDemo2/src/Main';
import FlatPagination from './FlatPagination';
import UploadPic from '../../ImageCropPicker/src/uploadImageFromGallery';
import MultipleUpload from '../../ImageCropPicker/src/multipleUploadImage';
import OpenCamera from '../../ImageCropPicker/src/openCamera';
import UploadVideo from '../../ImageCropPicker/src/uploadVideoFromGallery';
import SlowImageLoad from './SlowImageLoad';
import NavigationDemo from './NavigationDemo';
import FetchData from '../../AllTest/src/test1/FetchData';
import {View, Text, StyleSheet, Button, FlatList, TouchableOpacity} from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

const myData=[
  {
    title1: 'Form',
    name1: 'Project1',
  },
  {
    title1: 'Card',
    name1: 'Project2',
  },
];
class App extends React.Component {
  static navigationOptions = {
    title: 'Directory of Projects',
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
      fontSize: 25
    },
  };
  render() {
    
    return (
      <View style={{ flex: 1, alignItems: 'center', top: 10 }}>
      <Button title='Form' onPress={()=> {this.props.navigation.push('Project1')}} color='grey' backgroundColor='black'/>
      <Button title='Card' onPress={()=> {this.props.navigation.push('Project2')}} color='grey' backgroundColor='black'/>
      <Button title='Flat List' onPress={()=> {this.props.navigation.push('Project3')}} color='grey' backgroundColor='black'/>
      <Button title='Prop State' onPress={()=> {this.props.navigation.push('Project4')}} color='grey' backgroundColor='black'/>
      <Button title='Gallery' onPress={()=> {this.props.navigation.push('Project5')}} color='grey' backgroundColor='black'/>
      <Button title='UI Designing 1' onPress={()=> {this.props.navigation.push('Project6')}} color='grey' backgroundColor='black'/>
      <Button title='Hit API' onPress={()=> {this.props.navigation.push('Project7')}} color='grey' backgroundColor='black'/>
      <Button title='UI Designing 2' onPress={()=> {this.props.navigation.push('Project8')}} color='grey' backgroundColor='black'/>
      <Button title='Pagination' onPress={()=> {this.props.navigation.push('Project9')}} color='grey' backgroundColor='black'/>
      <Button title='Image Crop Picker' onPress={()=> {this.props.navigation.push('Project10')}} color='grey' backgroundColor='black'/>
      <Button title='Slow Image Load' onPress={()=> {this.props.navigation.push('Project11')}} color='grey' backgroundColor='black'/>
      <Button title='Navigation' onPress={()=> {this.props.navigation.push('Project12')}} color='grey' backgroundColor='black'/>
      <Button title='All Test List' onPress={()=> {this.props.navigation.push('Project13')}} color='grey' backgroundColor='black'/>

    </View> 
    );
  }
}
class TestList extends React.Component {
  navigationOptions = {
    title: 'Test List',
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
      fontSize: 25
    },
  };
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', Top: 40 }}>
        <Text style={{margin: 20}}>Test List</Text>
        <Button title='Fetch Data' onPress={()=> {this.props.navigation.push('Test1')}} color='grey' backgroundColor='black'/>
      </View>
    );
  }
}

class HomeScreen extends React.Component {
  navigationOptions = {
    title: 'Home Page',
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
      fontSize: 25
    },
  };
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
        <Button title='Next Screen' onPress={()=> {this.props.navigation.push('NextScreen')}} color='grey' backgroundColor='black'/>
      </View>
    );
  }
}

class ImageCropPicker extends React.Component {
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

const AppNavigator = createStackNavigator({
  Home: App,
  Project1: Form, Project2: Card, Project3: Listdemo, Project4: Data, Project5: Gallery,
  Project6: NewUi, Project7: ApiHit, Project8: Main, Project9: FlatPagination, 
  Project10: ImageCropPicker,
      Cam1: UploadPic,
      Cam2: MultipleUpload,
      Cam3: OpenCamera,
      Cam4: UploadVideo,
  Project11: SlowImageLoad, 
  Project12: HomeScreen,
      NextScreen: NavigationDemo,
  Project13: TestList,
      Test1: FetchData,
},
{
  initialRouteName: 'Home',
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: '#1cad9a',
    },
    headerTintColor: '#fff',
    headerBackTitle: null,
    headerTitleStyle: {
      fontWeight: 'bold',
      fontSize: 30
    },
    headerRight: () => (
      <TouchableOpacity onPress={() => alert('This is a button!')} >
        <Text style={{color: "#fff", right: 10, fontWeight: 'bold', fontSize: 25}}>+</Text>
        </TouchableOpacity>
    ),
  },
}
);

export default createAppContainer(AppNavigator);

styles = StyleSheet.create({
  heading: {
    fontWeight: 'bold',
    fontSize: 30
  },
})