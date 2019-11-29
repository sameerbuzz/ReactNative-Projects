import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  Image,
  FlatList,
  ScrollView
} from 'react-native';
import picName from '../../constants/styles/picName';
import MyIcons from '../../constants/icons';
import colorPick from '../../constants/styles/color';

const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;

DATA2 = [{
  pic: picName.pic2,
  name: 'Sameer Bhardwaj',
  date: 'Today'
},
{
  pic: picName.pic2,
  name: 'Sameer Bhardwaj',
  date: 'Today'
},
{
  pic: picName.pic2,
  name: 'Sameer Bhardwaj',
  date: 'Today'
},
]

DATA3 = [{
  pic: picName.pic1,
  name: 'Sameer Bhardwaj',
  date: 'Today'
},
{
  pic: picName.pic3,
  name: 'Sameer Bhardwaj',
  date: 'Today'
},
{
  pic: picName.pic1,
  name: 'Sameer Bhardwaj',
  date: 'Today'
},
{
  pic: picName.pic3,
  name: 'Sameer Bhardwaj',
  date: 'Today'
},
{
  pic: picName.pic1,
  name: 'Sameer Bhardwaj',
  date: 'Today'
},
{
  pic: picName.pic3,
  name: 'Sameer Bhardwaj',
  date: 'Today'
},
]

export default class whatsStatus extends Component {
  static navigationOptions = {
    tabBarLabel: 'Status',
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
            <Text style={styles.myName}>{item.name}</Text>
            <Text style={styles.title2}>{item.date}</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  }

  renderItems2 = (rowData) => {
    const { item, index } = rowData;
    return (
      <TouchableOpacity>
        <View style={styles.flatView}>
          <Image source={item.pic} style={styles.mypic} />
          <View style={styles.nameView}>
            <Text style={styles.myName}>{item.name}</Text>
            <Text style={styles.title2}>{item.date}</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  }

  render() {
    return (
      <View style={styles.mainView}>
        <ScrollView>
          <TouchableOpacity>
            <View style={styles.flatView}>
              <Image source={picName.pic3} style={styles.mypic} />
              <View style={styles.nameView}>
                <Text style={styles.myName}>My status</Text>
                <Text style={styles.title2}>Tap to add status update</Text>
              </View>
              <View style={styles.addView}>
                <MyIcons.Ionicons
                  name="md-add-circle"
                  size={screenWidth / 14}
                  color='#3fd611'
                  style={{ ...styles.add, }}
                />
              </View>
            </View>
          </TouchableOpacity>
          <View>
            <View style={styles.recentView}>
              <Text style={styles.recentText}>Recent updates</Text>
            </View>
            <FlatList
              data={DATA2}
              ItemSeparatorComponent={this.FlatListItemSeparator}
              scrollEnabled={false}
              keyExtractor={(item, id) => id.toString()}
              renderItem={this.renderItems}
            />
          </View>
          <View style={{marginBottom: screenHeight/5.5}}>
            <View style={styles.recentView}>
              <Text style={styles.recentText}>Viewed updates</Text>
            </View>
            <FlatList
              data={DATA3}
              ItemSeparatorComponent={this.FlatListItemSeparator}
              scrollEnabled={false}
              keyExtractor={(item, id) => id.toString()}
              renderItem={this.renderItems2}
            />
          </View>
        </ScrollView>
        <View>
          <TouchableOpacity style={{ ...styles.mainIcon, ...styles.writeIcon }}>
            
              <MyIcons.MaterialCommunityIcons
                name="pencil"
                size={screenWidth / 14}
                color={colorPick.darkGreen}
                style={styles.write}
              />
            
          </TouchableOpacity>
          <TouchableOpacity style={{ ...styles.mainIcon, ...styles.camIcon }}>
            
              <MyIcons.FontAwesome
                name="camera"
                size={screenWidth / 15}
                color='white'
                style={styles.main}
              />
          
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    backgroundColor: 'white'
  },
  flatView: {
    flexDirection: 'row',
    margin: screenWidth / 20,
    height: screenHeight / 10,
    marginTop: 0,
    marginBottom: screenWidth/80
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
  },
  myName: {
    fontSize: screenWidth / 20,
    fontWeight: '600',
    fontFamily: 'Roboto-Medium',
  },
  title2: {
    color: 'grey',
    fontSize: screenWidth / 25,
    fontFamily: 'Roboto-Medium',
  },
  add: {
    position: 'absolute',
  },
  addView: {
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    height: screenWidth / 18,
    width: screenWidth / 18,
    borderRadius: screenWidth / 36,
    marginLeft: screenWidth / 11,
    marginTop: screenHeight / 16,
    shadowColor: 'black',
    shadowOffset: { height: 1, width: 1 },
    shadowOpacity: 0.3,
    elevation: 0.3
  },
  recentView: {
    backgroundColor: '#f0f0f0',
    padding: screenWidth / 40,
    paddingLeft: screenWidth / 20,
    borderTopWidth: 1,
    borderTopColor: 'lightgrey'
  },
  recentText: {
    fontFamily: 'Roboto-Medium',
    fontSize: screenWidth / 24,
    color: '#666666'
  },
  separator: {
    flex: 1,
    height: 0.5,
    width: "75%",
    backgroundColor: "black",
    marginLeft: screenWidth / 4.8,
    opacity: 0.2
  },
  mainIcon: {
    position: 'absolute',
    shadowColor: 'black',
    shadowOffset: { height: 5, width: 5 },
    shadowOpacity: 0.1,
    elevation: 0.1,
    alignItems: 'center'
  },
  main: {
    paddingTop: screenWidth / 23
  },
  write: {
    paddingTop: screenWidth / 40
  },
  writeIcon: {
    backgroundColor: '#f7ffff',
    height: screenWidth / 8,
    width: screenWidth / 8,
    borderRadius: screenWidth / 16,
    bottom: screenHeight / 7.5,
    right: screenWidth / 12,
    borderWidth: 0.3,
    borderColor: 'lightgrey'
  },
  camIcon: {
    backgroundColor: '#3fd611',
    height: screenWidth / 6,
    width: screenWidth / 6,
    borderRadius: screenWidth / 12,
    bottom: screenHeight / 30,
    right: screenWidth / 15,
  }
})
