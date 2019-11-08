import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

export default class Dashboard extends Component {
    static navigationOptions = {
        title: 'Dashboard',
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
          fontSize: 25
        },
      };

  constructor(props) {
    super(props);
    this.state = {
        email: '',
        fn: '',
        ln: '',
        phone: '',
        age: '',
        username: '',
        source: '',
        type: false,
    };
  }

async componentDidMount(){
    AsyncStorage.multiGet(['email', 'fn', 'ln', 'phone', 'age', 'un', 'photo', JSON.parse('type')]).then(res => {
      console.warn('data-> ', res)      
      this.setState({
                email: res[0][1],
                fn: res[1][1],
                ln: res[2][1],
                phone: res[3][1],
                age: res[4][1],
                username: res[5][1],
                source: res[6][1],
                type: res[7][1],
            })
    })
}

removeData = async () => {
    AsyncStorage.clear()
    this.props.navigation.pop(2)
    
}

// sign out 
signOut = async () => {
  try {
    await GoogleSignin.revokeAccess();
    await GoogleSignin.signOut();
    this.removeData() // Remember to remove the user from your app's state as well
  } catch (error) {
    console.error(error);
  }
};

revokeAccess = async () => {
  try {
    await GoogleSignin.revokeAccess();
    console.log('deleted');
  } catch (error) {
    console.error(error);
  }
};

  render() {
    return (
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <Text style={styles.main}> Hello, {this.state.fn} {this.state.ln}</Text>
        <Image style={styles.imgs}
          source={{uri: this.state.source}} />
        <Text style={styles.small}>Email :</Text>
        <Text style={styles.field}>{this.state.email}</Text>
        <Text style={styles.small}>Phone No :</Text>
        <Text style={styles.field}>{this.state.phone}</Text>
        <Text style={styles.small}>Age :</Text>
        <Text style={styles.field}>{this.state.age}</Text>
        <Text style={styles.small}>Username :</Text>
        <Text style={styles.field}>{this.state.username}</Text>
        <View style={{ alignItems: 'center'}}>
        <TouchableOpacity style={this.state.type ? styles.btn2 : styles.btn1} onPress={this.state.type ? this.signOut : this.removeData}>
            <Text style={this.state.type ? styles.text2 : styles.text1}>Sign Out</Text>
            </TouchableOpacity>
            </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
    field: {
        height: 50,
        marginTop: 15,
        marginBottom: 15,
        fontSize: 20,
        padding: 10,
        borderWidth: 2,
        borderRadius: 10,
        alignContent: 'center',
        color: '#1cad9a',
        borderColor: '#1cad9a',
        fontWeight: 'bold',
        width: "90%"
    },
    main: {
        height: 50,
        fontSize: 20,
        fontWeight: 'bold', 
        color: '#1cad9a',
        margin: 15,
        padding: 10,
        alignContent: 'center', 
        alignItems: 'center', 
        justifyContent: 'center',
        marginBottom: 0,
    },
    btn1: {
        height: 50,
        width: 100,
        backgroundColor: '#1cad9a',
        justifyContent: 'center',
        marginTop: 20, 
    },
    btn2: {
        backgroundColor: 'white', 
        padding: 10, 
        borderRadius: 2, 
        borderWidth: 2, 
        borderColor: 'grey', 
  },
  text1: {
    color: 'white', 
    padding: 10, 
    fontWeight: 'bold', 
    fontSize: 20,
  },
  text2: {
    fontSize: 15, 
    color: 'grey', 
    fontWeight: 'bold',
  },
    small: {
        marginLeft: 20,
    },
    imgs: { 
        height: 200,
        width: 200, 
        borderRadius: 100,
        marginBottom: 10,
  }
})