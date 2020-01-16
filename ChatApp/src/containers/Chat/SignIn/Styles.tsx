import { StyleSheet } from 'react-native';
import { vh, vw, Color } from '../../../constants';

const Styles = StyleSheet.create({
    mainView: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    input: {
        borderBottomWidth: vh(2),
        padding: vw(15),
        width: '80%',
        marginBottom: vh(20),
        fontSize: vh(20),
        textAlign: 'center',
        borderColor: 'white',
        color: 'white',
    },
    btn: {
        borderBottomWidth: vh(2),
        borderRightWidth: vh(2),
        padding: vw(10),
        marginBottom: vh(20),
        borderColor: 'white',
    },
    btnText: {
        color: 'white',
        fontSize: vh(15)
    },
    indicator: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0
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
})
export default Styles;