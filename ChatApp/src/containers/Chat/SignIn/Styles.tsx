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
    outerSignUp: {
        marginTop: vh(63.5),
        alignItems: 'center',
        justifyContent:'flex-end',
        flexDirection: 'row'
    },
    signupView: {
        zIndex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: vw(15),
        paddingVertical: vw(5)
    },
    signupText: {
        fontSize: vw(17),
        color: Color.tealBlue,
        fontFamily: 'SFUIDisplay-Semibold',
    },
    lowerView: {
        paddingHorizontal: vw(30),
        paddingTop: vh(20),
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
        padding: vh(15.5),
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
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Color.greyish,
        marginBottom: vh(20),
        borderRadius: vh(5),
    },
    passwordText: {
        flex: 1,
    },
    eyeView: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: vw(15),
    },
    indicator: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: vw(5)
    },
    gradient: {
        borderRadius: vh(5),
    },
    disableStyle: {
        opacity: 0.2
    },
})
export default Styles;