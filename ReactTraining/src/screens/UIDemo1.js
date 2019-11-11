import React, { Component } from 'react';
import { width, height, totalSize } from 'react-native-dimension';
import {
  View,
  Text,
  Image,
  SafeAreaView,
  ScrollView,
  TouchableOpacity
} from 'react-native';
import stylePick from '../constants/styles/styles';
import picName from '../constants/styles/picName';

export default class UIDemo1 extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <SafeAreaView style={stylePick.header}>
          <ScrollView>
            <View style={stylePick.topImgView}>
              <View style={stylePick.imgOne}>
                <View style={stylePick.imgTwo}>
                  <Image source={picName.pic1} style={stylePick.topImg} />
                </View>
              </View>
              <View style={stylePick.topTextView}>
                <Text style={stylePick.topTextFont}>Marcus Hoang</Text>
                <Text style={stylePick.topDesc}>Level 3</Text>
              </View>
            </View>
            <View style={stylePick.whiteView}>
              <View style={stylePick.healthView}>
                <Text style={stylePick.healthFont}> Health Insurance</Text>
                <TouchableOpacity style={stylePick.cardBtn}>
                  <Text style={stylePick.cardBtnFont}>Card Details ></Text>
                </TouchableOpacity>
              </View>
              <View style={{ marginLeft: width(7), marginRight: width(7) }}>
                <View style={{ ...stylePick.rowStyle, paddingTop: height(4), paddingBottom: height(3) }}>
                  <View>
                    <Text style={stylePick.balance}>Balance</Text>
                    <Text style={stylePick.digits}>2.000.000VND</Text>
                  </View>
                  <View>
                    <Text style={stylePick.balance}>Balance Used</Text>
                    <Text style={stylePick.digits}>4.320.000VND</Text>
                  </View>
                </View>
                <View>
                  <Text style={stylePick.balance}>Relatives</Text>
                  <View style={stylePick.rowStyle}>
                    <View style={{...stylePick.relativeView,}}>
                      <Image source={picName.pic2} style={stylePick.relativeImg} />
                      <View style={stylePick.relativeTitle}>
                        <Image source={picName.accept} style={stylePick.relativeTick} />
                      </View>
                      <Text style={stylePick.relativeFont}>Wife</Text>
                    </View>
                    <View style={{...stylePick.relativeView,}}>
                      <Image source={picName.pic3} style={stylePick.relativeImg} />
                      <View style={stylePick.relativeTitle}>
                        <Image source={picName.accept} style={stylePick.relativeTick} />
                      </View>
                      <Text style={stylePick.relativeFont}>Child</Text>
                    </View>
                    <View style={{ ...stylePick.rowStyle,}}>
                      <TouchableOpacity>
                        <Image source={picName.more} style={{...stylePick.addPic}} />
                      </TouchableOpacity>
                      <Text style={stylePick.addFont}>Add</Text>
                    </View>
                    <View style={{ ...stylePick.rowStyle,}}>
                      <TouchableOpacity>
                        <Image source={picName.more} style={stylePick.addPic} />
                      </TouchableOpacity>
                      <Text style={stylePick.addFont}>Add</Text>
                    </View>
                    <View style={{ backgroundColor: 'grey', width: totalSize(0.2) }}></View>
                    <View style={{ justifyContent: 'space-evenly', alignItems: 'center', marginRight: -10 }}>
                      <TouchableOpacity>
                        <Image source={picName.transfer} style={{ height: 40, width: 40 }} />
                      </TouchableOpacity>
                      <Text style={{ fontSize: 10 }}>Benefits transfer</Text>
                    </View>
                  </View>
                </View>
                <View>
                  <View style={stylePick.historyStyle}>
                    <Text style={stylePick.balance}>History</Text>
                    <TouchableOpacity>
                      <Text style={stylePick.seeAll}>See all</Text>
                    </TouchableOpacity>
                  </View>
                  <View style={stylePick.historyStyle}>
                    <Text style={{ ...stylePick.balance, color: 'black' }}>Add Relative</Text>
                    <Text style={{ color: '#CB0001' }}>4.000.000VND</Text>
                  </View>
                  <Text style={{ color: 'grey', fontSize: 12 }}>13/06/2019</Text>
                  <View style={stylePick.historyStyle}>
                    <Text style={{ ...stylePick.balance, color: 'black' }}>Add Relative</Text>
                    <Text style={{ color: '#CB0001' }}>4.000.000VND</Text>
                  </View>
                  <Text style={{ color: 'grey', fontSize: 12 }}>11/06/2019</Text>
                </View>
              </View>
              <View style={{ ...stylePick.pinkHealth, justifyContent: 'space-evenly' }}>
                <View style={{ backgroundColor: '#FFCAD5', marginTop: 20, ...stylePick.lastCard, height: 150 }}>
                  <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                    <Text style={stylePick.lastCardFont}>Health and Beauty</Text>
                    <Text style={stylePick.lastCardFont}>5.000.000 VND</Text>
                  </View>
                  <View style={{ backgroundColor: '#024051', ...stylePick.lastCard, height: 100 }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                      <Text style={{ ...stylePick.lastCardFont, color: 'white' }}>Course and Training</Text>
                      <Text style={{ ...stylePick.lastCardFont, color: 'white' }}>2.000.000 VND</Text>
                    </View>
                    <View style={{ backgroundColor: '#F9DED0', ...stylePick.lastCard, height: 50 }}>
                      <View style={{ flexDirection: 'row', justifyContent: 'flex-start', paddingLeft: 15 }}>
                        <Text style={stylePick.lastCardFont}>Bussiness Trip Cost</Text>
                        <Text style={stylePick.lastCardFont}></Text>
                      </View>
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </ScrollView>
        </SafeAreaView>
        <TouchableOpacity style={stylePick.footer} onPress={() => { this.props.navigation.pop() }}>
          <Text style={stylePick.footerText}>Home</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
