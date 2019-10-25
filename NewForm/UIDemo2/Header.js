import React from 'react';
import { 
    View, 
    Image, 
    StyleSheet,
    Text,
    SafeAreaView,
    TouchableOpacity
} from 'react-native';

export default function Header() {
    return(
        <View style={styles.mainView}>
            <View style={{flex:1, flexDirection: 'row'}}>
            <View style={{flex: 0.8, paddingTop: 50, paddingLeft: 140}}>
            <Text style={{color: 'white', fontWeight: 'bold', fontSize: 18}}>Hall Of Fame</Text>
            </View>
            <View style={styles.buttonView}>
                <TouchableOpacity style={{backgroundColor:'white', borderRadius: 10}}>
                    <Image source={require('./plus.png')} style={{height: 16, aspectRatio: 1, marginTop: 6, marginLeft: 7, borderRadius: 10}}/>
                </TouchableOpacity>
                <Text style={{paddingTop: 7, paddingLeft: 5,fontSize: 11}}>7/15 votes</Text>
            </View>
            </View>
        </View>
    );
}
styles = StyleSheet.create({
    mainView: {
        flex: 1,
        backgroundColor: '#ffa83d',
        
    },
    buttonView: {
        flex: 0.5, 
        backgroundColor: 'white', 
        marginTop: 45, 
        margin: 8, 
        marginRight: 12, 
        borderRadius: 10,
        flexDirection: 'row',
    },
})