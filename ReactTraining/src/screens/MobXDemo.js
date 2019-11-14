import React, { Component } from 'react';
import {
  View,
  Text,
  FlatList,
  TextInput,
  ScrollView,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Alert,
  Keyboard
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
  };

deleteAlert = (key) => {
  Alert.alert(
    'Do you want to Delete this TODO Item ?',
    '',
    [
      {
        text: 'Delete', 
        onPress: () => Demo.deleteCard(key),
      },
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
    ],
    { cancelable: false }
  );
}

  render() {

    return (
      <View style={{ flex: 1, marginTop: 5 }}>
          <FlatList
          ref={(ref) => { this.myFlatlist = ref }}
          numColumns={2}
          onContentSizeChange={ () => {        
            this.myFlatlist.scrollToEnd( { animated: true } )
        } }
          scrollToEnd = {Demo.dataArray}
            data={Demo.dataArray.slice()}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item, index }) =>(
                <View style={styles.cardView}>
                  <TouchableOpacity onLongPress={() => {
                    Keyboard.dismiss();
                    this.deleteAlert(index)}}
                    >
                      <View>
                  <ScrollView>
                  <Text style={styles.cardText}>{item}</Text>
                  </ScrollView>
                  </View>
                  </TouchableOpacity>
                </View>
              )}
          />
        <View style={styles.textView}>
          <TextInput 
          returnKeyType = 'done'
          multiline = {true}
          numberOfLines = {1}
          placeholder='Add data here' 
          onChangeText={(text) => Demo.name = text} 
          style={styles.textSize}
          ref={input => { this.textInput = input }}
          onSubmitEditing = {() => {
            Keyboard.dismiss()} }
          />
          <Icons 
          name="add-circle" 
          size={totalSize(5)} 
          color={colorPick.darkGreen} 
          onPress={() => {
            this.textInput.clear() 
            Demo.todo()} }
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
  },
  cardText: {
    fontSize: totalSize(2), 
    color: 'white', 
    padding: 10,
  },
})