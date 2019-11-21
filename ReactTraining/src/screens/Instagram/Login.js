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
                            <Text style={{ ...styles.help, fontWeight: "300" }}>
                                Forgot your login details?
                    </Text>
                            <Text style={{ ...styles.help, fontWeight: "600" }}> Get help signing in.</Text>
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
                <View style={styles.footer}>
                    <TouchableOpacity style={{flexDirection: 'row'}}>
                        <Text style={{ ...styles.help, fontWeight: "300" }}>Don't have an account? </Text>
                        <Text style={{ ...styles.help, fontWeight: "600" }}>Sign up.</Text>
                        </TouchableOpacity>
                </View>
            </Animated.View>

        );
    }
}

const styles = StyleSheet.create({
    mainView: {
        marginTop: screenHeight / 5,
        alignItems: 'center',
        flex: 0.9
    },
    container: {
        flex: 1,
    },
    insta: {
        height: totalSize(7.5),
        width: screenWidth / 2
    },
    input: {
        backgroundColor: 'rgba(255,255,255,0.15)',
        height: totalSize(6),
        marginTop: screenHeight / 40,
        width: screenWidth / 1.2,
        paddingLeft: height(2),
        paddingRight: height(2),
        fontSize: height(2.5),
        color: '#fff',
        borderRadius: height(0.3),
        
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
        fontSize: height(2.5),
        color: '#FFFFFF50',
        fontWeight: "800"
    },
    forgot: {
        flexDirection: 'row',
        marginTop: screenHeight / 40,
    },
    help: {
        color: 'white',
        fontSize: width(4),
    },
    orView: {
        marginTop: screenHeight / 40,
        flexDirection: 'row',
        alignItems: 'center'
    },
    orLine: {
        backgroundColor: '#FFFFFF50',
        height: height(0.1),
        width: screenWidth / 2.8,
    },
    orText: {
        color: 'white',
        fontSize: height(2.4)
    },
    fb: {
        marginTop: screenHeight / 40,
        flexDirection: 'row',
        alignItems: 'center'
    },
    fbText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: height(2.4),
        marginLeft: width(2)
    },
    footer: {
        backgroundColor: 'rgba(255,255,255,0.1)',
        flex: 0.1,
        borderTopWidth: height(0.1),
        borderColor: 'rgba(255,255,255,0.4)',
        alignItems: 'center',
        justifyContent: 'space-evenly'
    }
});