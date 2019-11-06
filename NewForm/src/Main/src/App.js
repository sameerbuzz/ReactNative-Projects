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
import ImageCropPicker from '../../ImageCropPicker/src/ImageCropPicker';
import UploadPic from '../../ImageCropPicker/src/uploadImageFromGallery';
import MultipleUpload from '../../ImageCropPicker/src/multipleUploadImage';
import OpenCamera from '../../ImageCropPicker/src/openCamera';
import UploadVideo from '../../ImageCropPicker/src/uploadVideoFromGallery';
import SlowImageLoad from './SlowImageLoad';
import NavigationDemo from '../../Navigation/src/NavigationDemo';
import Navigation from '../../Navigation/src/Navigation';
import FetchData from '../../AllTest/src/test1/FetchData';
import Next from '../../LoginDemo2/Next';
import TestList from '../../AllTest/src/TestList';
import Home2 from '../../LoginDemo2/Home';
import Splash from './Splash/Splash';
import SignIn from './Splash/SignIn';
import SignUp from './Splash/SignUp';
import LoginForm from './Splash/Form';
import Dashboard from './Splash/Dashboard';
import {
  View, 
  Text, 
  StyleSheet, 
  Button, 
  FlatList, 
  TouchableOpacity, 
  TextInput,
  Keyboard,
  Image
} from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import i18n from './locales/i18n';

const myData=[
  {title: 'Form', name: 'Project1',},
  {title: 'Card', name: 'Project2',},
  {title: 'Flat List',name: 'Project3'},
  {title: 'Prop State',name: 'Project4'},
  {title: 'Gallery',name: 'Project5'},
  {title: 'UI Designing 1',name: 'Project6'},
  {title: 'Hit API',name: 'Project7'},
  {title: 'UI Designing 2',name: 'Project8'},
  {title: 'Pagination',name: 'Project9'},
  {title: 'Image Crop Picker',name: 'Project10'},
  {title: 'Slow Image Load',name: 'Project11'},
  {title: 'Navigation',name: 'Project12'},
  {title: 'All Test List',name: 'Project13'},
  {title: 'Login Demo 2',name: 'Project14'},
  {title: 'Splash',name: 'Project15'},
];
class App extends React.Component {
  static navigationOptions = {
    title: `${i18n.t("Directory of Projects")}`,
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
      fontSize: 25
    },
  };
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', marginTop: 1, marginBottom: 30, backgroundColor: '#00DBC2',}}>
<FlatList 
  showsVerticalScrollIndicator={false}
  numColumns={2}
  data={myData}
  keyExtractor={(item,id) => id.toString()}
  renderItem={({item})=> {
    return(
      <View style={{margin: 25, marginBottom: 4}}>
      <TouchableOpacity onPress={()=> {this.props.navigation.push(item.name)}} style={styles.card}>
        <Text style={{fontWeight: 'bold', fontSize: 20, color: 'white'}}>{item.title}</Text>
        </TouchableOpacity>
        </View>
    )
  }}/>
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
  Project12: Navigation,
      NextScreen: NavigationDemo,
  Project13: TestList,
      Test1: FetchData,
  Project14: Home2,
      Next1: Next,
  Project15: Splash,
    Screen1: SignUp,
    Screen2: SignIn,
    Screen3: LoginForm,
    Screen4: Dashboard,
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
        <Text style={{color: "#fff", right: 10, fontWeight: 'bold', fontSize: 25, alignItems: 'center'}}>+</Text>
        </TouchableOpacity>
    ),
  },
});

export default createAppContainer(AppNavigator);

const styles = StyleSheet.create({
  heading: {
    fontWeight: 'bold',
    fontSize: 30
  },
card: {
  justifyContent: 'center', 
  alignItems: 'center', 
  height: 100, 
  width: 150,
  borderRadius: 20,
  marginTop: 20,
  backgroundColor: '#00DBC2',
  borderWidth: 2,
  borderColor: 'white',
  shadowColor: 'white',
  shadowOpacity: 1,
  shadowRadius: 20,
}
})