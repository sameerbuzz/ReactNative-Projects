import React, { Component } from 'react';
import { View, Text, SafeAreaView, ScrollView} from 'react-native';
import Child from './ChildView';
import ChildOne from './ChildViewOne';
import Footer from './Footer';
import Header from './Header';

export default class Main extends Component {

  render() {
    return (
      <View style={{flex:3}}>

          <View style={{flex:0.1}}> 
          <Header />
          </View>
          
          <View style={{flex:0.8}}>
          <Child />
          {/* <ChildOne /> */}
          </View>
          
         <View style={{flex: 0.1}}>
             <Footer />
             </View>
            
      </View>
    );
  }
}
