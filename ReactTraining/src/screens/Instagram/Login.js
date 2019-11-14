import React, { Component } from 'react';
import {
    Animated,
    Text,
    StyleSheet,
    Image,
    TextInput,
    View,
    Dimensions,
    TouchableOpacity
} from 'react-native';
import { width, height, totalSize } from 'react-native-dimension';
import Icons from 'react-native-vector-icons/FontAwesome';

// custom imports
import picName from '../../constants/styles/picName';
const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;
Icons.loadFont()

export default class Login extends Component {

    constructor() {
        super();

        this.Animation = new Animated.Value(0);
    }

    componentDidMount() {
        this.StartBackgroundColorAnimation();
    }


    StartBackgroundColorAnimation = () => {
        this.Animation.setValue(0);

        Animated.timing(
            this.Animation,
            {
                toValue: 1,
                duration: 15000
            }).start(() => { this.StartBackgroundColorAnimation() });
    }

    render() {
        const BackgroundColorConfig = this.Animation.interpolate(
            {
                inputRange: [0, 0.3, 0.6, 0.8, 1],
                outputRange: ['#e53935', '#8e24aa', '#5232a8', '#5203fc', '#ff3d00']

            });
        return (
            <Animated.View style={[styles.container, { backgroundColor: BackgroundColorConfig }]}>
                <View style={styles.mainView}>
                    <Image
                        source={picName.instaPic}
                        style={styles.insta}
                    />
                    <TextInput style={styles.input}
                        placeholder='Username'
                        placeholderTextColor='white'
                    />
                    <TextInput style={styles.input}
                        placeholder='Password'
                        placeholderTextColor='white'
                    />
                    <TouchableOpacity style={styles.login}>
                        <Text style={styles.loginText}>Log In</Text>
                        </TouchableOpacity>
                        <TouchableOpacity>
                    <View style={styles.forgot}>                   
                    <Text style={{...styles.help, fontWeight: "300"}}>
                        Forgot your login details? 
                    </Text>
                        <Text style={{...styles.help, fontWeight: "600"}}> Get help signing in.</Text>                       
                    </View>
                    </TouchableOpacity>
                    <View style={styles.orView}>
                        <View style={styles.orLine}></View>
                        <Text style={styles.orText}>  OR  </Text>
                        <View style={styles.orLine}></View>
                        </View>
                        <TouchableOpacity>
                        <View style={styles.fb}>
                            <Icons 
                            name='facebook-official'
                            color='white'
                            size={totalSize(3)}
                            />
                            <Text style={styles.fbText}>Log in with Facebook</Text>
                            </View>
                            </TouchableOpacity>
                            
                </View>
            </Animated.View>

        );
    }
}

const styles = StyleSheet.create({
    mainView: {
        marginTop: screenHeight / 5,
        alignItems: 'center'
    },
    container: {
        flex: 1,

    },
    insta: {
        height: totalSize(10),
        width: screenWidth / 1.5
    },
    input: {
        backgroundColor: '#FFFFFF50',
        height: totalSize(6),
        marginTop: screenHeight / 40,
        width: screenWidth / 1.2,
        padding: height(2),
        fontSize: height(2.5),
        color: 'white',
        opacity: 0.6,
        borderRadius: height(0.3)
    },
    login: {
        height: totalSize(6),
        marginTop: screenHeight / 40,
        width: screenWidth / 1.2, 
        color: 'white',
        opacity: 0.6,
        borderRadius: height(0.3),
        borderColor: '#FFFFFF50',
        borderWidth: 2,
        alignItems: 'center'
    },
    loginText: {
        padding: height(1.5),
        fontSize: height(2.3),
        color: '#FFFFFF50',
        fontWeight: "600"
    },
    forgot: {
        flexDirection: 'row',
        marginTop: screenHeight / 40,
    },
    help:{
        color: 'white',
        fontSize: height(1.5),
    },
    orView: {
        marginTop: screenHeight / 40,
        flexDirection: 'row',
    },
    orLine: {
        backgroundColor: '#FFFFFF50',
        height: height(0.1),
        width: screenWidth/2.8,
        marginTop: height(1)
    },
    orText: {
        color: 'white',
        fontSize: height(1.8)
    },
    fb: {
        marginTop: screenHeight / 40,
        flexDirection: 'row',
        alignItems: 'center'
    },
    fbText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: height(2),
        marginLeft: width(2)
    }
});