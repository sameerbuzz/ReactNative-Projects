import { StyleSheet } from 'react-native';
import { vh, vw, Color } from '../../../constants'
const Styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Color.modalBlack,
    },
    modalBody: {
        width: '100%',
        height: '50%',
        alignItems: 'center',
        backgroundColor: 'white'
    },
    pic: {
        width: '100%',
        height: '100%',
    },

})
export default Styles;