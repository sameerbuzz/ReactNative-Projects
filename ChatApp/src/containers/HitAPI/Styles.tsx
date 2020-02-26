import {StyleSheet} from 'react-native';
import {vh, vw} from '../../constants';

const Styles = StyleSheet.create({
    mainView: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    cardView: {
        margin: vw(10),
        padding: vw(10)
    }
})
export default Styles;