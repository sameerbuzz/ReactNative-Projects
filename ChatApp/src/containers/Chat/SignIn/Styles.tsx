import {StyleSheet} from 'react-native';
import {vh, vw} from '../../../constants';

const Styles = StyleSheet.create({
    mainView: {
        flex: 1, 
        alignItems: 'center', 
        justifyContent: 'center',
    },
    input: {
        borderWidth: vh(1),
        padding: vw(20),
        width: '80%',
        borderRadius: vw(5),
        marginBottom: vh(20),
        fontSize: vh(20),
        textAlign: 'center'
    },
    btn: {
        borderWidth: vh(1),
        padding: vw(10),
        borderRadius: vw(5),
        marginBottom: vh(20)
    },
    indicator: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0
    },
    addBtn: {
        position: 'absolute',
        bottom: vh(40),
        right: vw(40),
        borderWidth: vh(2),
        height: vw(60),
        width: vw(60),
        borderRadius: vw(30),
        alignItems: 'center',
        justifyContent: 'center',
    }
})
export default Styles;