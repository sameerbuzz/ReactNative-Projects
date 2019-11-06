import React, { Component } from 'react';
import { 
     View,
     Text,
    ScrollView,
    } from 'react-native';
import Card from './Card';
import CardOne from './CardOne';

export default class ChildView extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
       
      <View style={{flex:1,}}>
          <View style={{flex: 1}}>
          <View style={{flex: 0.05, flexDirection: 'row', marginLeft: 20, marginTop: 10, alignItems: 'center'}}>
         <Text style={{fontWeight: 'bold', fontSize: 18}}>January</Text>
         <View style={{flex:1, alignItems:'flex-end', paddingEnd: 20}}>
         <Text style={{fontSize: 13}}>2 Challenges</Text>
         </View>
         </View>
         <View style={{flex: 0.8,}}>
        <Card />
        <CardOne />
        </View>
        </View>
      </View>
      
    );
  }
}
