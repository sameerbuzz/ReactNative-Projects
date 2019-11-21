import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  FlatList,
  ScrollView,
  TouchableOpacity
} from 'react-native';
import { width } from 'react-native-dimension';
import MyIcons from '../../constants/icons';
import picName from '../../constants/styles/picName';

const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;

DATA = [{
  pic: picName.pic2,
  name: 'Sameer Bhardwaj',
  title: 'okk',
  date: '18/11/2019'
},
{
  pic: picName.pic2,
  name: 'Sameer Bhardwaj',
  title: 'okk',
  date: '18/11/2019'
},
{
  pic: picName.pic2,
  name: 'Sameer Bhardwaj',
  title: 'okk',
  date: '18/11/2019'
},
{
  pic: picName.pic2,
  name: 'Sameer Bhardwaj',
  title: 'okk',
  date: '18/11/2019'
},
{
  pic: picName.pic2,
  name: 'Sameer Bhardwaj',
  title: 'okk',
  date: '18/11/2019'
},
{
  pic: picName.pic2,
  name: 'Sameer Bhardwaj',
  title: 'okk',
  date: '18/11/2019'
},
{
  pic: picName.pic2,
  name: 'Sameer Bhardwaj',
  title: 'okk',
  date: '18/11/2019'
},
{
  pic: picName.pic2,
  name: 'Sameer Bhardwaj',
  title: 'okk',
  date: '18/11/2019'
},
{
  pic: picName.pic2,
  name: 'Sameer Bhardwaj',
  title: 'okk',
  date: '18/11/2019'
}
]

export default class whatsappHome extends Component {
  static navigationOptions = {
    tabBarLabel: 'Chats',
  }

  renderItem = (rowData) => {
    let { item } = rowData
    return (
      <View style={styles.flatView}>
        <Image source={item.pic} style={styles.mypic} />
        <View style={{ margin: screenWidth / 40, flex: 1 }}>
          <TouchableOpacity>
          <View style={styles.nameView}>
            <Text style={styles.myName}>{item.name}</Text>
            <Text style={styles.title1}>{item.date}</Text>
          </View>
          <Text style={styles.title2}>{item.title}</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  FlatListItemSeparator = () => {
    return (
      <View
        style={styles.separator}
      />
    );
  }
  render() {
    return (
      <View style={styles.mainView}>
        <ScrollView>
          <View>
            <FlatList
              data={DATA}
              keyExtractor={(item, id) => id.toString()}
              renderItem={this.renderItem}
              ItemSeparatorComponent={this.FlatListItemSeparator}
            />
          </View>
          <View style={styles.lastView}>
            <Text style={styles.lastText}>Tap and hold on a chat for more options</Text>
          </View>
        </ScrollView>
        <TouchableOpacity>
        <View style={styles.msgIcon}>
          <MyIcons.MaterialCommunityIcons
            name="android-messages"
            size={screenWidth / 15}
            color='white'
            style={styles.msg}
          />
        </View>
        </TouchableOpacity>
      </View>
    );
  }
}

styles = StyleSheet.create({
  mainView: {
    flex: 1,
    backgroundColor: 'white'
  },
  lastView: {
    height: screenHeight / 6,
    alignItems: 'center',
    marginTop: screenHeight / 40
  },
  lastText: {
    fontWeight: '600',
    color: 'grey',
    fontSize: screenWidth / 30
  },
  headerText: {
    color: 'white',
    fontSize: width(5),
    fontWeight: '600'
  },
  search: {
    flexDirection: 'row',
  },
  icon: {
    marginLeft: width(10),

  },
  flatView: {
    flexDirection: 'row',
    padding: screenWidth / 30,
    flex: 1,
    height: screenHeight / 10,
    alignItems: 'center'
  },
  mypic: {
    height: screenWidth / 7,
    width: screenWidth / 7,
    borderRadius: screenWidth / 14,
  },
  nameView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  myName: {
    fontSize: screenWidth / 20,
    fontWeight: 'bold'
  },
  title1: {
    color: 'grey',
    fontSize: screenWidth / 28
  },
  title2: {
    color: 'grey',
    fontSize: screenWidth / 25
  },
  separator: {
    flex: 1,
    justifyContent: 'center',
    height: 1,
    width: "75%",
    backgroundColor: "grey",
    marginLeft: screenWidth / 5,
    opacity: 0.2
  },
  msgIcon: {
    backgroundColor: '#3fd611',
    position: 'absolute',
    height: screenWidth / 7,
    width: screenWidth / 7,
    borderRadius: screenWidth / 14,
    bottom: screenHeight / 30,
    right: screenWidth / 15,
    shadowColor: 'black',
    shadowOffset: { height: 5, width: 5 },
    shadowOpacity: 0.2,
    elevation: 0.2
  },
  msg: {
    padding: screenWidth/30
  }
})