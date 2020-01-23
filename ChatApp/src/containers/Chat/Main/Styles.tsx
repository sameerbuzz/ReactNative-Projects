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
        borderRadius: vh(5),
    },
    dayText: {
        fontSize: vh(11),
        fontFamily: 'SFUIDisplay-Regular',
        color: Color.greyishBrown
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
        backgroundColor: 'blue',
        borderTopWidth: 0,
        alignItems: 'center',
        justifyContent: 'center',
        height: vw(65),
    },
    inputContainer: {
        borderRadius: vw(5),
        height: vw(45),
        alignItems: 'center',
        backgroundColor: 'red',
        paddingTop: vw(10),
        paddingLeft: vw(10),
        paddingRight: vw(10),
        paddingBottom: vw(10),
        fontSize: vw(15),
        fontFamily: 'SFUIDisplay-Regular',
    },
    primaryStyle: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    sendBtn: {
        backgroundColor: Color.tealBlue,
        height: vw(45),
        width: vw(45),
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: vw(5),
        marginHorizontal: vh(7.5),
    },

})
export default Styles;