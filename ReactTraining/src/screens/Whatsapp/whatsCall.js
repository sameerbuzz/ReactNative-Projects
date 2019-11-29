import React, { Component } from 'react';
import { 
  View, 
  Text,
  FlatList,
  StyleSheet,
  ScrollView,
  Dimensions,
  TouchableOpacity,
  Image
} from 'react-native';
import picName from '../../constants/styles/picName';
import MyIcons from '../../constants/icons';
import colorPick from '../../constants/styles/color';

const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;

DATA4 = [{
  pic: picName.pic2,
  name: 'Sameer Bhardwaj',
  date: 'Today',
  icon: "md-call",
  call: "call-made",
  missed: true
},
{
  pic: picName.pic2,
  name: 'Sameer Bhardwaj',
  date: 'Today',
  icon: "ios-videocam",
  call: "call-made",
  missed: false
},
{
  pic: picName.pic2,
  name: 'Sameer Bhardwaj',
  date: 'Today',
  icon: "md-call",
  call: "call-received",
  missed: true
},
{
  pic: picName.pic2,
  name: 'Sameer Bhardwaj',
  date: 'Today',
  icon: "md-call",
  call: "call-made",
  missed: true
},
{
  pic: picName.pic2,
  name: 'Sameer Bhardwaj',
  date: 'Today',
  icon: "ios-videocam",
  call: "call-received",
  missed: true
},
{
  pic: picName.pic2,
  name: 'Sameer Bhardwaj',
  date: 'Today',
  icon: "md-call",
  call: "call-received",
  missed: false
},
{
  pic: picName.pic2,
  name: 'Sameer Bhardwaj',
  date: 'Today',
  icon: "md-call",
  call: "call-made",
  missed: true
},
{
  pic: picName.pic2,
  name: 'Sameer Bhardwaj',
  date: 'Today',
  icon: "ios-videocam",
  call: "call-received",
  missed: true
},
{
  pic: picName.pic2,
  name: 'Sameer Bhardwaj',
  date: 'Today',
  icon: "ios-videocam",
  call: "call-received",
  missed: false
},
]

export default class whatsCall extends Component {
  static navigationOptions= {
    tabBarLabel: 'Calls'
  }
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  

  FlatListItemSeparator = () => {
    return (
      <View
        style={styles.separator}
      />
    );
  }


  renderItems = (rowData) => {
    const { item, index } = rowData;
    return (
      <TouchableOpacity>
        <View style={styles.flatView}>
          <Image source={item.pic} style={styles.mypic} />
          <View style={styles.nameView}>
            <View>
            <Text style={styles.myName}>{item.name}</Text>
            <View style={styles.titleView}>
              <MyIcons.MaterialCommunityIcons 
              name={item.call}
              color={item.missed ? 'red' : '#3fd611' }
              size={screenWidth/22}
              />
            <Text style={styles.title2}>{item.date}</Text>
            </View>
            </View>
            <MyIcons.Ionicons 
            name = {item.icon}
            color= {colorPick.darkGreen}
            size={screenWidth/14}
            />
          </View>
        </View>
      </TouchableOpacity>
    );
  }


  render() {
    return (
      <View style={styles.mainView}>
        <ScrollView>
          <View style={{marginBottom: screenHeight/9}}>
         <FlatList
              data={DATA4}
              ItemSeparatorComponent={this.FlatListItemSeparator}
              scrollEnabled={false}
              keyExtractor={(item, id) => id.toString()}
              renderItem={this.renderItems}
            />
            </View>
        </ScrollView>
        <TouchableOpacity>
            <View style={styles.callIcon }>
              <MyIcons.MaterialCommunityIcons
                name="phone-in-talk"
                size={screenWidth / 12}
                color='white'
                style={styles.call}
              />
            </View>
          </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  separator: {
    flex: 1,
    height: 0.5,
    width: "75%",
    backgroundColor: "black",
    marginLeft: screenWidth / 4.8,
    opacity: 0.2
  },
  mainView: {
    flex: 1,
    backgroundColor: 'white',
  },
  flatView: {
    flexDirection: 'row',
    margin: screenWidth / 20,
    height: screenHeight / 10,
    marginTop: 0,
    marginBottom: 0,
  },
  mypic: {
    height: screenWidth / 7,
    width: screenWidth / 7,
    borderRadius: screenWidth / 14,
    marginTop: screenWidth / 30
  },
  nameView: {
    margin: screenWidth / 20,
    flex: 1,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: screenWidth/50
  },
  myName: {
    fontSize: screenWidth / 20,
    fontWeight: '600',
    fontFamily: 'Roboto-Medium',
  },
  titleView: {
    flexDirection: 'row'
  },
  title2: {
    color: 'grey',
    fontSize: screenWidth / 25,
    fontFamily: 'Roboto-Medium',
  },
  callIcon: {
    position: 'absolute',
    shadowColor: 'black',
    shadowOffset: { height: 5, width: 5 },
    shadowOpacity: 0.1,
    elevation: 0.1,
    alignItems: 'center',
    backgroundColor: '#3fd611',
    height: screenWidth / 6,
    width: screenWidth / 6,
    borderRadius: screenWidth / 12,
    bottom: screenHeight / 30,
    right: screenWidth / 15,
  },
  call: {
    paddingTop: screenWidth / 25
  },
})