import { StyleSheet } from 'react-native';
import { vh, vw, Color } from '../../constants';

const Styles = StyleSheet.create({
    MainView: {
        flex: 1, 
        alignItems: 'center', 
    },
    cardView: {
        backgroundColor: 'blue',
        padding: vw(10),
        margin: vw(20),
        width: vw(150),
        height: vw(150),
        borderRadius: vw(15),
        alignItems: 'center', 
        justifyContent: 'center',
    },
    separator: {
        width: '100%',
        backgroundColor: 'red',
        height: 10,
    },
    cardText: {
        textAlign: 'center',
        color: 'white',
        fontWeight: 'bold',
        fontSize: vw(17)
    },

})
export default Styles;