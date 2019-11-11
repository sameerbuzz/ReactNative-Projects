import { StyleSheet } from 'react-native';
import { width, height, totalSize } from 'react-native-dimension';
import colorPick from './color';
const styles = StyleSheet.create({

    // UIDemo1 -------------------
    header: {
        flex: 7,
        backgroundColor: colorPick.darkGreen,
    },
    topImgView: { 
        flex: 1, 
        flexDirection: 'row', 
        alignItems: 'center', 
        margin: width(4), 
        marginTop: 0,
    },
    imgOne: { 
        backgroundColor: 'white', 
        height: 60, 
        width: 60, 
        borderRadius: 30 
    },
    imgTwo: { 
        backgroundColor: colorPick.darkGreen, 
        height: 55, 
        width: 55, 
        borderRadius: 27, 
        margin: 2.8 
    },
    topImg: { 
        height: 50, 
        width: 50, 
        borderRadius: 25, 
        margin: 2.3 
    },
    topTextView: { 
        justifyContent: 'space-evenly', 
        alignItems: 'flex-start', 
        padding: width(4), 
    },
    topTextFont: { 
        color: 'white', 
        fontSize: totalSize(2.5), 
        fontWeight: 'bold' 
    },
    topDesc: { 
        color: 'white', 
        fontSize: totalSize(1.8) 
    },
    whiteView: {
        flex: 6,
        backgroundColor: 'white',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: height(12),
        },
        shadowOpacity: 0.58,
        shadowRadius: 16.00,
        elevation: 24,
    },
    cloudImg: {

    },
    healthView: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: height(2),
    },
    healthFont: { 
        fontSize: totalSize(2.5), 
        fontWeight: "500", 
        margin: totalSize(2) 
    },
    cardBtn: {
        backgroundColor: colorPick.darkGreen,
        padding: width(1.5),
        borderRadius: 20,
        margin: width(3),
        marginTop: height(2),
    },
    cardBtnFont: { 
        color: 'white', 
        fontSize: totalSize(1.5) 
    },
    rowStyle: { 
        flexDirection: 'row', 
        justifyContent: 'space-between',
    },
    balance: {
        color: '#CAA398',
        fontWeight: 'bold',
        paddingBottom: height(1),
        fontSize: totalSize(1.6)
    },
    digits: {
        color: colorPick.darkGreen,
        fontWeight: '500',
        fontSize: totalSize(2.2)
    },
    relativeView: { 
        alignItems: 'center', 
        paddingTop: height(1) 
    },
    relativeImg: { 
        height: totalSize(6), 
        width: totalSize(6), 
        borderRadius: totalSize(3) 
    },
    relativeTitle: { 
        position: 'absolute', 
        top: totalSize(5.6) 
    },
    relativeTick: { 
        height: totalSize(2), 
        width: totalSize(2) 
    },
    relativeFont: { 
        fontSize: totalSize(1.7), 
        paddingTop: totalSize(1.5) 
    },
    addPic: { 
        height: totalSize(9), 
        width: totalSize(9) 
    },
    addFont: {
        fontSize: totalSize(1.8), 
        position: 'absolute', 
        top: totalSize(8.2), 
        left: totalSize(2.8)
    },
    historyStyle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10,
    },
    seeAll: {
        color: 'black',
        textDecorationLine: 'underline',
        fontWeight: '200'
    },
    lastCard: {
        height: height(50),
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
    },
    lastCardFont: {
        padding: 20,
        fontWeight: '500',
        fontSize: 15,
    },
    pinkHealth: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: height(10),
        },
        shadowOpacity: 0.58,
        shadowRadius: 16.00,
        elevation: 24,
    },
    footer: {
        backgroundColor: colorPick.darkGreen, 
        height: height(6), 
        justifyContent: 'center', 
        alignItems: 'center'
    },
    footerText : {
        color: 'white', 
        fontWeight: 'bold', 
        fontSize: 20
    },

})

export default styles;