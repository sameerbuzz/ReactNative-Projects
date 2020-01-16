import { StyleSheet } from 'react-native';
import { vw, vh } from '../../../constants';
const Styles = StyleSheet.create({
    mainView: {
        flex: 1,
        borderWidth: vh(2),
        margin: vh(10),
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: 'white',
    },
    txt: {
        padding: vh(10),

    },
})
export default Styles;