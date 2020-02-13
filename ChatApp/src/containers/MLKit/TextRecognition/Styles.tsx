import { StyleSheet } from 'react-native';
import { vh, vw, Color } from '../../../constants';

const Styles = StyleSheet.create({
    MainView: {
        flex: 1, 
        alignItems: 'center', 
        justifyContent: 'center',
    },
    cardView: {
        padding: vw(10),
        margin: vw(20),
        width: vw(150),
        height: vw(100),
        borderRadius: vw(15),
        alignItems: 'center', 
        justifyContent: 'center',
        alignSelf: 'center',
    },
    cardText: {
        textAlign: 'center',
        color: 'white',
        fontWeight: 'bold',
        fontSize: vw(17)
    },
    resultText: {
        borderWidth: vw(2),
        borderColor: Color.newViolet,
        padding: vw(20),
        color: Color.newViolet,
        borderRadius: vw(10),
        width: vw(350),
        alignSelf: 'center',
    },
    indicator: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
    },

})
export default Styles;