import React, { Component } from "react";
import {
    View,
    StyleSheet,
    Text,
    Image,
    ScrollView,
} from 'react-native';

export default class Card extends Component {
    static navigationOptions = {
  title: 'Card',
  headerTintColor: '#fff',
  headerTitleStyle: {
    fontWeight: 'bold',
    fontSize: 25
  },
};
    render() {
        return ( 
            <ScrollView>
            <View style={styles.mainView}>
                <Image source={require('../assets/1566799228.png')} style={styles.imageStyle} />
                <View style={styles.textView}>
                    <View style={styles.textViewTwo}>
                        <Text style={styles.nameText}>Sameer Bhardwaj</Text>
                        <Text style={styles.descText}>React Native Developer</Text>
                    </View>
                </View>
                <Text style={styles.timeText}>4:10</Text>
            </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    mainView: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 50,
        marginLeft: 30,
        paddingBottom: 50,
    },
    imageStyle: {
        flex: 0.2,
        height: 100,
        aspectRatio: 1,
        borderRadius: 5,
    },
    textView: {
        flex: 0.7,
        flexDirection: 'row',
    },
    textViewTwo: {
        flex: 1, 
        flexDirection: 'column',
        alignItems: 'center',
    },
    nameText: {
        fontWeight: 'bold',
        fontSize: 20,
        paddingTop: 10,
        paddingLeft: 10,
    },
    descText: {
        fontSize: 14,
        paddingBottom: 10,
    },
    timeText: {
        fontSize: 15,
        paddingLeft: 50,
    },
})