import { StyleSheet } from 'react-native';
import { vh, vw, Color } from '../../../constants'
const Styles = StyleSheet.create({
    chatHeader: {
        backgroundColor: 'white',
        flexDirection: 'row',
        paddingTop: vh(30),
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    leftHeaderView: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    rightHeaderView: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: vw(10)
    },
    headerView: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: vw(20),
        justifyContent: 'center',
    },
    headerBack: {
        height: vh(20),
        width: vh(20)
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
        fontSize: vw(20)
    },
    dayStyle: {
        backgroundColor: Color.day,
        paddingHorizontal: vw(13),
        paddingVertical: vh(8), 
        borderRadius: vh(5),
    },
    dayText: {
        fontSize: vw(13),
        fontFamily: 'SFUIDisplay-Regular',
        color: Color.greyishBrown
    },
    bubbleLeft: {
        backgroundColor: 'white', 
        marginBottom: vw(5),
    },
    bubbleRight: {
        backgroundColor: Color.chatGreen, 
        marginBottom: vw(5),
    },
    timeText: {
        fontSize: vw(12),
        fontFamily: 'SFUIDisplay-Regular',
    },
    chatFooter: {
        height: vh(20),
        width: '100%',
    },
    footerStyle: {
        backgroundColor: 'transparent',
        borderTopWidth: 0,
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: vh(25),
        maxHeight: vh(80),
        paddingVertical: vh(1)
    },
    inputContainer: {
        borderRadius: vh(5),
        height: vh(45),
        alignItems: 'center',
        backgroundColor: 'white',
        paddingTop: vh(10),
        paddingLeft: vh(10),
        paddingRight: vh(10),
        fontSize: vw(18),
        fontFamily: 'SFUIDisplay-Regular',
    },
    primaryStyle: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    sendBtn: {
        backgroundColor: Color.tealBlue,
        height: vh(45),
        width: vh(45),
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: vh(5),
        marginHorizontal: vh(7.5),
    },
    imageFooter: {
        backgroundColor: Color.chatGreen,
        width: vh(140),
        height: vh(100),
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: vw(185),
        borderRadius: vh(15),
        padding: vw(4),
    },
    sendingImg: {
        height: '100%',
        width: '100%',    
        borderRadius: vh(15)   
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