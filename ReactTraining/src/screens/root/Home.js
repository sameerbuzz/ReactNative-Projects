import React, { Component } from 'react';
import { 
  View, 
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet
} from 'react-native';
import colorPick from '../../constants/styles/color';

const myData= [
  {title: 'First UI', name: 'UIDemo1'},
  {title: 'MobX Demo', name: 'MobXDemo'},
]

export default class Home extends Component {

  static navigationOptions = {
    title: "Directory of Projects",
    headerTintColor: colorPick.darkGreen,
    headerTitleStyle: {
      fontWeight: 'bold',
      fontSize: 25,
      color: 'white'
      },
  };

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={{flex: 1}}>
        <View style={{justifyContent: 'space-between', marginTop: 1}}>
        <FlatList 
          numColumns={2}
          data= {myData}
          keyExtractor={(item,id) => id.toString()}
          renderItem={({item})=> {
            return(
              <View style={styles.homeCard}>
              <TouchableOpacity onPress={()=> {this.props.navigation.push(item.name)}}>
                <Text style={styles.textCard}>{item.title}</Text>
                </TouchableOpacity>
                </View>
            )
          }}
        />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  homeCard: {
    margin: 20,
    backgroundColor: colorPick.darkGreen,
    padding: 20,
    borderRadius: 20,
    width: "39%",
    alignItems: 'center',
},
  textCard: {
    color: 'white', 
    fontWeight: 'bold', 
    fontSize: 20,
},
})