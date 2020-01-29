import { StyleSheet } from 'react-native';
import { vw, vh, Color } from '../../../constants';
const Styles = StyleSheet.create({
    outerMainView: {
        flex: 1,
        backgroundColor: 'white',
        paddingTop: vh(30),
        alignItems: 'center'
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        width: '100%',
        padding: vw(10)
    },
    backBtn: {
        paddingHorizontal: vw(10),
        marginRight: vw(20),
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
    indicator: {
        position: 'absolute',
        alignItems: 'center',
        justifyContent: 'center',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
    },
    selectedStyle: {
        opacity: 0.5,
        backgroundColor: Color.fadedTealBlue
    },
    txt: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
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
    checkMark: {
        position: 'absolute',
        top: vw(20),
        left: vw(20),
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
        top: vh(80),
        right: 0,
        left: 0,
        bottom: 0,
        borderRadius: vw(10),
        borderBottomWidth: vh(1),
        borderColor: Color.greyish
    },
    gradient: {
        height: vw(50),
        width: vw(50),
        borderRadius: vw(25),
        alignItems: 'center',
        justifyContent: 'center'
    },
    btn: {
        position: 'absolute',
        bottom: vw(50),
        right: vw(50),
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        padding: vw(10)
    },
    btnText: {
        color: 'white',
        fontSize: vw(30),
        fontFamily: 'SFUIDisplay-Bold'
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Color.modalBlack,
    },
    modalBody: {
        width: '80%',
        alignItems: 'center',
        backgroundColor: 'white',
        justifyContent: 'center',
        borderRadius: vw(10),
        paddingTop: vh(20)
    },
    imageStyle: {
        height: vh(140),
        width: vh(140),
        borderRadius: vh(70),
    },
    edit: {
        position: 'absolute',
        bottom: 0,
        right: 0,
        height: vh(40),
        width: vh(40),
    },
    imgStyle: {
        height: vh(140),
        width: vh(140),
        alignItems: 'center',
        marginBottom: vh(20),
    },
    disableStyle: {
        opacity: 0.2
    },
    input: {
        padding: vw(15.5),
        marginBottom: vh(20),
        fontSize: vw(17),
        backgroundColor: Color.greyish,
        borderRadius: vh(5),
        fontFamily: 'SFUIDisplay-Regular',
        width: '80%',
        borderWidth: vh(1)
    },
    modalBtnView: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        width: '100%'
    },
    modalBtn: {
        paddingVertical: vw(20)
    },
    btnTextStyle: {
        fontSize: vw(16),
        fontFamily: 'SFUIDisplay-Semibold'
    },
    btnTextStyle2: {
        color: Color.placeholderGrey,
        fontSize: vw(16),
        fontFamily: 'SFUIDisplay-Semibold'
    },
})
export default Styles;