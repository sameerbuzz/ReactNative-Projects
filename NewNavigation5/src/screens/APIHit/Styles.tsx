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
    },
    searchBar: {
        marginVertical: vw(10),
        padding: vw(5),
        fontSize: vw(20),
        width: '90%',
        borderWidth: vw(2),
        borderRadius: vw(5)
    }
})
export default Styles;