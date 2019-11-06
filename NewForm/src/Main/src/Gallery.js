import React, {
    Component
} from "react";
import {
    View,
    StyleSheet,
    Text,
    Image,
    FlatList,
    ScrollView
} from 'react-native';

const DATA = [
    {
        img: 'https://images.pexels.com/photos/67636/rose-blue-flower-rose-blooms-67636.jpeg?cs=srgb&dl=beauty-bloom-blue-67636.jpg&fm=jpg',
    },
    {
        img: 'https://images.pexels.com/photos/67636/rose-blue-flower-rose-blooms-67636.jpeg?cs=srgb&dl=beauty-bloom-blue-67636.jpg&fm=jpg',
    },
    {
        img: 'https://images.pexels.com/photos/67636/rose-blue-flower-rose-blooms-67636.jpeg?cs=srgb&dl=beauty-bloom-blue-67636.jpg&fm=jpg',
    },
    {
        img: 'https://images.pexels.com/photos/67636/rose-blue-flower-rose-blooms-67636.jpeg?cs=srgb&dl=beauty-bloom-blue-67636.jpg&fm=jpg',
    },
    {
        img: 'https://images.pexels.com/photos/67636/rose-blue-flower-rose-blooms-67636.jpeg?cs=srgb&dl=beauty-bloom-blue-67636.jpg&fm=jpg',
    },
    {
        img: 'https://images.pexels.com/photos/67636/rose-blue-flower-rose-blooms-67636.jpeg?cs=srgb&dl=beauty-bloom-blue-67636.jpg&fm=jpg',
    }
  ];

function Item({img}) {
    return(
        <View style={styles.mainView}>
                <Image source={{uri: img}} style={styles.imageStyle} />
            </View>
    );
}

export default class Listdemo extends React.Component {
    navigationOptions = {
        title: 'Gallery',
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
          fontSize: 25
        },
      };
      render(){
    return ( 
        <View style = {{flex: 1}}>    
        <FlatList
            numColumns = {3}
            data = {DATA}
            renderItem = {({item}) => (
            <Item 
                img = {item.img} 
            />
        )}/> 
        </View>
    );}
}

const styles = StyleSheet.create({
    mainView: {
        flex: 1,
        marginTop: 50,
        marginRight: 10,
        shadowColor : 'blue',
        shadowOpacity : 30,
        shadowRadius: 5,
        shadowOffset:{  width: 15,  height: 15,},
        alignItems: 'center'
    },
    imageStyle: {
        
        height: 80,
        aspectRatio: 1,
        borderRadius: 5,
        
    },
   
})