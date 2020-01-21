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
        fontSize: vh(15)
    },
    dayStyle: {
        backgroundColor: Color.day,
        paddingHorizontal: vw(13),
        paddingVertical: vh(8), 
        borderRadius: vh(5)
    },
    bubbleLeft: {
        backgroundColor: 'white', 
        marginBottom: vh(5),
    },
    bubbleRight: {
        backgroundColor: Color.chatGreen, 
        marginBottom: vh(5),
    },
    timeText: {
        fontSize: vh(10),
        fontFamily: 'SFUIDisplay-Regular',
    },
    footerStyle: {
        backgroundColor: 'transparent',
        borderTopWidth: 0,
        paddingRight: vh(7.5),
        alignItems: 'center',
        justifyContent: 'center',
        height: vh(45),
    },
    inputContainer: {
        borderRadius: vh(5),
        height: vh(45),
        alignItems: 'center',
        backgroundColor: 'white',
        paddingTop: vw(10),
        paddingLeft: vw(10),
        paddingRight: vw(10),
        paddingBottom: vw(10),
        fontSize: vw(15),
        fontFamily: 'SFUIDisplay-Regular',
    },
    primaryStyle: {
        alignItems: 'center',
    },
    sendBtn: {
        backgroundColor: Color.tealBlue,
        height: vh(45),
        width: vh(45),
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: vh(5),
        marginLeft: vh(7.5),
    },

})
export default Styles;