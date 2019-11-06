import React, {
    Component
} from "react";
import {
    View,
    StyleSheet,
    Text,
    Image,
    FlatList,
} from 'react-native';

const DATA = [
    {
        img: 'https://images.pexels.com/photos/67636/rose-blue-flower-rose-blooms-67636.jpeg?cs=srgb&dl=beauty-bloom-blue-67636.jpg&fm=jpg',
        myname: 'Sameer Bhardwaj',
        mydesc: 'React Native Developer',
        time: '4:10',
    },
    {
        img: 'https://images.pexels.com/photos/67636/rose-blue-flower-rose-blooms-67636.jpeg?cs=srgb&dl=beauty-bloom-blue-67636.jpg&fm=jpg',
        myname: 'Sameer Bhardwaj',
        mydesc: 'React Native Developer',
        time: '4:10',
    },
    {
        img: 'https://images.pexels.com/photos/67636/rose-blue-flower-rose-blooms-67636.jpeg?cs=srgb&dl=beauty-bloom-blue-67636.jpg&fm=jpg',
        myname: 'Sameer Bhardwaj',
        mydesc: 'React Native Developer',
        time: '4:10',
    }
  ];

function Item({img, myname, mydesc, time}) {
    return(
        <View style={styles.mainView}>
                <Image source={{uri: img}} style={styles.imageStyle} />
                <View style={styles.textView}>
                    <View style={styles.textViewTwo}>
                        <Text style={styles.nameText}>{myname}</Text>
                        <Text style={styles.descText}>{mydesc}</Text>
                    </View>
                </View>
                <Text style={styles.timeText}>{time}</Text>
            </View>
    );
}

export default class Listdemo extends React.Component {
 navigationOptions = {
        title: 'Flat List',
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
          fontSize: 25
        },
      };
      render(){
    return ( 
        <FlatList
            data = {DATA}
            renderItem = {({item}) => (
            <Item 
                img = {item.img} 
                myname = {item.myname} 
                mydesc = {item.mydesc} 
                time = {item.time}
            />
        )}/>
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
        paddingBottom: 0,
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