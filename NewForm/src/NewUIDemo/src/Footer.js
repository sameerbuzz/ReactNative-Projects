import React, {PureComponent } from 'react';
import {
    View,
    TouchableOpacity,
    Text,
    StyleSheet,
    Image,
} from 'react-native';

export default class Footer extends PureComponent {
    constructor(){
        super();
        this.state={
            button: false,
        }
    }
    render() {
        return(
            <View style={{flex: 0.1, flexDirection: 'row',marginLeft: 20, marginRight: 20}}>
                <View style={styles.buttonStyle}>
                <TouchableOpacity style={{margin: 10,}}>
                    <Text style={{color: '#eb982d', fontWeight: 'bold', fontSize: 15,}}>View Gallery</Text>
                </TouchableOpacity>
                </View>
                <View style={styles.button2View}>
                <TouchableOpacity style={styles.button2Style}>
                    <Image style={{maxHeight: 60, maxWidth: 60}} source={require('../assets/camera.png')} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.button2Style}>
                    <Image style={{maxHeight: 60, maxWidth: 60}} source={require('../assets/gallery.png')} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.button2Style}>
                    <Image style={{maxHeight: 60, maxWidth: 60}} source={require('../assets/plus.png')} />
                </TouchableOpacity>
                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    buttonStyle: {
        flex: 0.6,
        flexDirection: 'row',
        shadowColor : 'grey',
        shadowOpacity : 0.3,
        shadowRadius: 10,
        alignItems: 'center',
        backgroundColor: 'white',
        borderRadius: 10,
        elevation: 5,
    },
    button2View: {
        flex: 1,
        flexDirection: "row", 
        marginLeft: 10,
    },
    button2Style: {
        flex: 1,
        
    },
});