import { StyleSheet } from 'react-native';
import { vw, vh, Color } from '../../../constants';
const Styles = StyleSheet.create({
    outerMainView: {
        flex: 1,
        backgroundColor: 'white',
        paddingTop: vh(30)
    },
    header: {
        alignItems: 'flex-end',
    },
    addBtn: {
        padding: vh(15),
    },
    addImg: {
        height: vh(30),
        width: vh(30),
    },
    chatTxt: {
        paddingLeft: vw(15),
        fontFamily: 'SFUIDisplay-Heavy',
        fontSize: vw(25),
        paddingBottom: vh(20)
    },
    noChatView: {
        flex: 1,
        paddingTop: vh(100),
        alignItems: 'center',
    },
    noChatTxt: {
        paddingTop: vh(50.5),
        fontSize: vw(22.5),
        fontFamily: 'SFUIDisplay-Semibold'
    },
    mainFlatView: {
        flex: 1,
        borderColor: Color.greyish,
        padding: vw(15),
        flexDirection: 'row'
    },
    imgProfile: {
        backgroundColor: Color.placeholderGrey,
        height: vw(60),
        width: vw(60),
        borderRadius: vw(30)
    },
    mainView: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        padding: vh(15),
    },
    txt: {
        flexDirection: 'row',
        padding: vh(10),
        alignItems: 'center'
    },
    msgView: {
        height: '100%',
        width: '75%',
        justifyContent: 'space-between'
    },
    nameStyle: {
        fontFamily: 'SFUIDisplay-Heavy',
        fontSize: vw(18.5),
    },
    lastMsg: {
        fontSize: vw(16),
        fontFamily: 'SFUIDisplay-Semibold'
    },
    timeView: {
        height: '100%',
        width: '25%',
        justifyContent: 'space-between'
    },
    timeTxt: {
        fontFamily: 'SFUIDisplay-Regular',
        fontSize: vw(14),
        color: Color.tealBlue
    },
    separator: {
        height: vh(1),
        width: '100%',
        backgroundColor: Color.greyish,
      },
    flatStyle: {
        flex: 1,
        backgroundColor: 'white',
        position: 'absolute',
        top: vh(85),
        right: 0,
        left: 0,
        bottom: 0,
        borderRadius: vw(10),
        borderBottomWidth: vh(1),
        borderColor: Color.greyish
    },
    indicator: {
        position: 'absolute',
        top: vh(400),
        left: vw(180)
    },
})
export default Styles;