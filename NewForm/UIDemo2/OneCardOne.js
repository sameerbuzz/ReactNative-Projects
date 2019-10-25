import React, {Component} from 'react';
import { 
    View, 
    Image, 
    StyleSheet,
    Text,
    SafeAreaView,
    TouchableOpacity
} from 'react-native';

export default class CardOne extends Component{
    render() {
    return(
        <View style={{flex: 0.65, justifyContent: 'space-evenly'}}>
            <View style={styles.mainView}>
            <Image source={require('./pics.jpeg')} style={{height: 90, width: 80, borderRadius: 10}} />
                </View>
            <View style={styles.second}>
                <View style={styles.third}>
                <Image source={require('./second.png')} style={styles.image} />
                <Text style={styles.text}>2nd</Text>
                </View>
            </View>
        </View>
    );
}}
const styles = StyleSheet.create({
    mainView: {
        flex: 1, 
        backgroundColor:'#d69b36', 
        marginTop: 17, 
        marginLeft: 16, 
        maxWidth: 80, 
        borderRadius: 10
    },
    second: {
        backgroundColor: 'white', 
        flex: 0.6, 
        maxWidth: 50, 
        borderRadius: 10, 
        marginLeft: 33, 
        position: 'absolute', 
        marginTop: 90,
    },
    third: { 
        flexDirection: 'row', 
        alignItems: 'flex-start', 
        maxHeight: 30, 
        borderRadius: 10,
    },
    image: {
        maxHeight: 20, 
        maxWidth: 20, 
        marginTop: 5 
    },
    text: {
        paddingTop: 6, 
        color: 'grey', 
        fontSize: 12
    },
})