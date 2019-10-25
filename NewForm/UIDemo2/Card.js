import React,{Component} from 'react';
import OneCard from './OneCard';
import OneCardOne from './OneCardOne';
import OneCardTwo from './OneCardTwo';
import { 
    View, 
    Image, 
    StyleSheet,
    Text,
    SafeAreaView,
    TouchableOpacity
} from 'react-native';

export default class Card extends Component{
    render() {
    return(
        <View style={{flex: 0.5,}}>
            <View style={{flex: 0.7, backgroundColor:'#ffebc9', margin: 20, marginBottom: 0, marginTop: 0, borderRadius: 10,}}>
                <View style={{flex: 1, flexDirection: 'row', maxHeight: 105,  }}>
                <OneCard />
                <OneCardOne />
                <OneCardTwo />
                </View>
            </View>
            <View style={{height: 70,width: "60%", marginLeft: 45, marginTop:140, position: 'absolute',}}>
                <Image source={require('./whitebase.png')} />
                <View style={{ height: 50, width: 200, position: 'absolute', alignItems: 'center', paddingTop: 13, marginLeft: 45, marginTop: 5,}}>
                    <Text style={{fontWeight: 'bold', fontSize: 20}}>Jungle Safari</Text>
                    </View>
            </View>
        </View>
    );
}}