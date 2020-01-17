import { StyleSheet } from 'react-native';
import { vh, vw, Color } from '../../../constants';

const Styles = StyleSheet.create({
    outerMainView: {
        flex: 1,
        backgroundColor: 'white',
    },
    headerView: {
        marginTop: vh(30),
        flexDirection: 'row',
        alignItems: 'center',
        padding: vh(15),
        width: '30%'
    },
    headerTxt: {
        fontFamily: 'SFUIDisplay-Semibold',
        fontSize: vw(18),
        color: Color.placeholderGrey,
        paddingLeft: vw(15)
    },
    mainView: {
        paddingHorizontal: vw(30),
        paddingTop: vh(44),
        alignItems: 'center'
    },
    input: {
        padding: vw(15.5),
        marginBottom: vh(20),
        fontSize: vw(17),
        backgroundColor: Color.greyish,
        borderRadius: vh(5),
        fontFamily: 'SFUIDisplay-Regular',
        width: '100%'
    },
    btn: {
        paddingVertical: vh(16.5),
    },
    indicator: {
        position: 'absolute',
        top: vh(550),
        left: vw(180)
    },
    imgStyle: {
        height: vh(140),
        width: vh(140),
        alignItems: 'center',
        marginBottom: vh(20),
        borderRadius: vh(70)
    },
    imageStyle: {
        height: vh(140),
        width: vh(140),
        borderRadius: vh(70)
    },
    edit: {
        position: 'absolute',
        bottom: 0,
        right: 0
    },
    signupText: {
        fontSize: vw(25),
        fontFamily: 'SFUIDisplay-Heavy',
        marginBottom: vh(33.5)
    },
    btnText: {
        color: 'white',
        fontSize: vw(17),
        textAlign: 'center',
        fontFamily: 'SFUIDisplay-Bold',
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
    gradient: {
        borderRadius: vh(5),
        width: '100%'
    },
})
export default Styles;