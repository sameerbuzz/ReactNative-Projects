import { StyleSheet } from 'react-native';
import { vh, vw, Color } from '../../constants';

const Styles = StyleSheet.create({
    MainView: {
        flex: 1, 
        alignItems: 'center', 
    },
    cardView: {
        margin: vw(10),
        backgroundColor: 'blue',
        padding: vw(10)
    },
})
export default Styles;