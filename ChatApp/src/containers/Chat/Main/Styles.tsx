import { StyleSheet } from 'react-native';
import { vh, vw, Color } from '../../../constants'
const Styles = StyleSheet.create({
    chatHeader: {
        backgroundColor: 'white',
        flexDirection: 'row',
        paddingTop: vh(30),
        alignItems: 'center',
    },
    headerView: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: vw(20),
        justifyContent: 'center',
    },
    headerImgView: {
        padding: vw(10),
        paddingLeft: 0,
    },
    headerImg: {
        height: vw(40),
        width: vw(40),
        borderRadius: vw(20)
    },
    headerName: {
        fontFamily: 'SFUIDisplay-Semibold',
        fontSize: vw(15)
    },
    // inputContainer: {
    //     flexDirection: 'row',
    //     width: '80%',
    //     height: vh(45),
    //     margin: vh(7.5),
    //     borderRadius: vh(5),
    //     alignItems: 'center',
    //     justifyContent: 'flex-start',
    //     backgroundColor: 'red'
    // },
    inputText: {
        fontSize: vh(15),
        fontFamily: 'SFUIDisplay-Regular',
    },
    sendView: {
        padding: vh(7.5),
        paddingLeft: 0
    },
    sendBtn: {
        backgroundColor: Color.tealBlue,
        height: vh(45),
        width: vh(45),
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: vh(5)
    },

})
export default Styles;