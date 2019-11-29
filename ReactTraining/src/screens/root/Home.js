import React, { Component } from 'react';
import { 
  View, 
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Dimensions
} from 'react-native';

//custom imports
import colorPick from '../../constants/styles/color';
import { width, height, totalSize } from 'react-native-dimension';
const screenWidth = Dimensions.get('window').width;  
const screenHeight = Dimensions.get('window').height; 

const myData= [
  {title: 'First UI', name: 'UIDemo1'},
  {title: 'MobX Demo', name: 'MobXDemo'},
  {title: 'Pagination', name: 'MobXPagination'},
  {title: 'Todo List', name: 'TodoSplash'},
  {title: 'Instagram', name: 'InstaLogin'},
  {title: 'WhatsApp', name: 'WhatsAppIndex'},
  {title: 'Redux', name: 'Redux'},
  {title: 'ReduxForm', name: 'ReduxForm'},
  {title: 'Redux API', name: 'ApiIndex'},
  {title: 'ChatApp', name: 'ChatApp'},
]

export default class Home extends Component {

  static navigationOptions = {
    title: "Directory of Projects",
    headerTintColor: colorPick.darkGreen,
    headerTitleStyle: {
      fontWeight: 'bold',
      fontSize: 20,
      color: 'white'
      },
  };


  render() {
    return (
        <View style={styles.mainView}>
        <FlatList 
          numColumns={2}
          data= {myData}
          keyExtractor={(item,id) => id.toString()}
          renderItem={({item})=> {
            return(
              <View>
              <TouchableOpacity onPress={()=> {this.props.navigation.push(item.name)}}>
                <View style={styles.homeCard}>
                <Text style={styles.textCard}>{item.title}</Text>
                </View>
                </TouchableOpacity>
                </View>
            )
          }}
        />
        </View>
    );
  }
}

const styles = StyleSheet.create({
  mainView: {
    justifyContent: 'space-between', 
    marginTop: height(0.2),
    alignItems: 'center',
  },
  homeCard: {
    backgroundColor: colorPick.darkGreen,
    margin: height(2),
    borderRadius: 20,
    width: screenWidth/2.7,
    height: screenWidth/2.7,
    alignItems: 'center',
    justifyContent: 'space-evenly'
},
  textCard: {
    color: 'white', 
    fontWeight: 'bold', 
    fontSize: totalSize(2),
},
})