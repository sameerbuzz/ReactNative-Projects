import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  FlatList,
  ScrollView,
  TouchableOpacity,
  Animated
} from 'react-native';
import { width } from 'react-native-dimension';
import Swipeable from 'react-native-gesture-handler/Swipeable';

import PickImage from '../../components/ImagePickerFn';
import MyIcons from '../../constants/icons';
import picName from '../../constants/styles/picName';

const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;

DATA1 = [{
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
},
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

  camera = () => {
    PickImage.getCamera(res => {
        this.props.click(res)
      })
}

renderLeftActions = (progress, dragX) => {
  const trans = dragX.interpolate({
    inputRange: [0, 100],
    outputRange: [0, 1],
  })
  return (
      <Animated.View
        style={[
          {
            transform: [{translateX: trans }],
          },
        ]}>
          {this.camera}
      </Animated.View>
  );
};

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
          {/* <Swipeable onSwipeableLeftOpen={this.renderLeftActions}> */}
            <FlatList
              data={DATA1}
              keyExtractor={(item, id) => id.toString()}
              renderItem={this.renderItem}
              ItemSeparatorComponent={this.FlatListItemSeparator}
            />
            {/* </Swipeable> */}
          </View>
          <View style={styles.lastView}>
            <Text style={styles.lastText}>Tap and hold on a chat for more options</Text>
          </View>
        </ScrollView>
        <TouchableOpacity>
          <View style={styles.msgIcon}>
            <MyIcons.MaterialCommunityIcons
              name="android-messages"
              size={screenWidth / 13}
              color='white'
              style={styles.msg}
            />
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
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
    fontSize: screenWidth / 30,
    fontFamily: 'Roboto-Medium',
  },
  headerText: {
    color: 'white',
    fontSize: width(5),
    fontWeight: '600',
    fontFamily: 'Roboto-Medium',
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
    fontWeight: '600',
    fontFamily: 'Roboto-Medium',
  },
  title1: {
    color: 'grey',
    fontSize: screenWidth / 28,
    fontFamily: 'Roboto-Medium',
  },
  title2: {
    color: 'grey',
    fontSize: screenWidth / 25,
    fontFamily: 'Roboto-Medium',
  },
  separator: {
    flex: 1,
    justifyContent: 'center',
    height: 0.5,
    width: "75%",
    backgroundColor: "black",
    marginLeft: screenWidth / 5,
    opacity: 0.2
  },
  msgIcon: {
    backgroundColor: '#3fd611',
    position: 'absolute',
    height: screenWidth / 6,
    width: screenWidth / 6,
    borderRadius: screenWidth / 12,
    bottom: screenHeight / 30,
    right: screenWidth / 15,
    shadowColor: 'black',
    shadowOffset: { height: 5, width: 5 },
    shadowOpacity: 0.2,
    elevation: 0.2,
    alignItems: 'center'
  },
  msg: {
    paddingTop: screenWidth / 25
  }
})