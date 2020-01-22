import { StyleSheet } from 'react-native';
import { vh, vw, Color } from '../../../constants';

const Styles = StyleSheet.create({
    mainView: {
        flex: 1,
        backgroundColor: 'white',
    },
    graphicsView: {
        position: 'absolute',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end',
        right: 0
    },
    signupView: {
        zIndex: 1,
        position: 'absolute',
        alignItems: 'center',
        width: vw(100),
    },
    signupText: {
        fontSize: vw(17),
        color: Color.tealBlue,
        fontFamily: 'SFUIDisplay-Semibold',
    },
    lowerView: {
        paddingHorizontal: vw(30),
        paddingTop: vh(99.5)
    },
    signinText: {
        fontSize: vw(25),
        fontFamily: 'SFUIDisplay-Heavy',
        marginBottom: vh(25)
    },
    welcome: {
        fontFamily: 'SFUIDisplay-Semibold',
        fontSize: vw(15),
        marginBottom: vh(25)
    },
    input: {
        padding: vw(15.5),
        marginBottom: vh(20),
        fontSize: vw(17),
        backgroundColor: Color.greyish,
        borderRadius: vh(5),
        fontFamily: 'SFUIDisplay-Regular',
    },
    btn: {
        paddingVertical: vh(16.5),
    },
    btnText: {
        color: 'white',
        fontSize: vw(17),
        textAlign: 'center',
        fontFamily: 'SFUIDisplay-Bold'
    },
    passwordView: {
        flexDirection: 'row',
        backgroundColor: Color.greyish,
        marginBottom: vh(20),
        borderRadius: vh(5),
    },
    passwordText: {
        flex: 1,
        marginBottom: 0
    },
    eyeView: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: vw(15)
    },
    indicator: {
        position: 'absolute',
        top: vh(400),
        left: vw(180)
    },
    addBtn: {
        zIndex: 1,
        flexDirection: 'row',
        position: 'absolute',
        bottom: vh(40),
        right: vw(40),
        backgroundColor: Color.darkGreen,
        height: vw(60),
        width: vw(60),
        borderRadius: vw(30),
        alignItems: 'center',
        justifyContent: 'center',
    },
    flatStyle: {
        zIndex: 1,
        flex: 1,
        backgroundColor: Color.darkGreen,
        position: 'absolute',
        top: vh(100),
        right: vw(20),
        left: vw(20),
        borderRadius: vw(10),
    },
    gradient: {
        borderRadius: vh(5)
    },
})
export default Styles;