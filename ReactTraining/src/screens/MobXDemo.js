import React, { Component } from 'react';
import {
  View,
  Text,
  FlatList,
  TextInput,
  ScrollView,
  StyleSheet,
  Dimensions
} from 'react-native';
import { observer } from "mobx-react"
import Demo from '../stores/DemoMobx'
import colorPick from '../../src/constants/styles/color';
import { width, height, totalSize } from 'react-native-dimension';
import Icons from 'react-native-vector-icons/MaterialIcons';
Icons.loadFont()

const screenWidth = Dimensions.get('window').width;  
const screenHeight = Dimensions.get('window').height; 

@observer
class MobXDemo extends Component {
  static navigationOptions = {
    title: "TODO LIST",
    headerTintColor: colorPick.darkGreen,
    headerTitleStyle: {
      fontWeight: 'bold',
      fontSize: 25,
      color: 'white'
    },
  };

  render() {

    return (
      <View style={{ flex: 1 }}>
          <FlatList
          ref={(ref) => { this.myFlatlist = ref }}
          numColumns={2}
          onContentSizeChange={ () => {        
            this.myFlatlist.scrollToEnd( { animated: true } )
        } }
          scrollToEnd = {Demo.dataArray}
            data={Demo.dataArray.slice()}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) =>(
                <View style={styles.cardView}>
                  <Text style={{fontSize: totalSize(2), color: 'white'}}>{item}</Text>
                </View>
              )}
          />
        <View style={styles.textView}>
          <TextInput 
          multiline = {true}
          numberOfLines = {1}
          placeholder='Add data here' 
          onChangeText={(text) => Demo.name = text} 
          style={styles.textSize}
          />
          <Icons 
          name="add-circle" 
          size={totalSize(5)} 
          color={colorPick.darkGreen} 
          onPress={() => Demo.todo()} 
          />
        </View>
      </View>
    );
  }

}
export default MobXDemo

const styles = StyleSheet.create({
  textView : { 
    flexDirection: 'row', 
    margin: totalSize(2), 
    marginBottom: totalSize(5), 
    justifyContent: 'space-around', 
    alignItems: 'center' 
  },
  textSize : {
    borderWidth: 1, 
    width: "80%", 
    padding: width(4), 
    borderRadius: 10, 
    fontSize: totalSize(2),
  },
  cardView : { 
    padding: width(2), 
    margin: width(5), borderRadius: 10, 
    backgroundColor: colorPick.darkGreen, 
    width: screenWidth/2.35, 
    marginRight: 0, 
    marginBottom: 0, 
    height: screenWidth/2.35, 
    alignItems: 'center', 
    justifyContent: 'space-evenly',
  }
})