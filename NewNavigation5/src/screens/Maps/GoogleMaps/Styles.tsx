import { StyleSheet, Platform } from 'react-native';
import { vw, vh, Color } from '../../../constants';
const Styles = StyleSheet.create({
    container: {
        ...StyleSheet.absoluteFillObject,
        height: '100%',
        width: '100%',
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    map: {
        ...StyleSheet.absoluteFillObject,
    },
    mainView: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    searchBarView: {
        position: 'absolute',
        top: Platform.OS === 'ios' ? vh(30) : vh(10),
        left: vw(10),
        right: vw(10),
        backgroundColor: 'white',
        borderRadius: vw(5),
        paddingVertical: Platform.OS === 'ios' ? vh(10) : 0,
        paddingHorizontal: vw(10),
        zIndex: 98,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    searchBar: {
        backgroundColor: 'white',
        paddingHorizontal: vw(10),
        paddingVertical: Platform.OS === 'ios' ? vh(10) : 0,
        borderRadius: vw(5),
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        width: vw(395),
    },
    searchBarFlat: {
        position: 'absolute',
        top: vh(80),
        left: vw(10),
        right: vw(10),
        backgroundColor: 'white',
        borderRadius: vw(5),
        zIndex: 99,
    },
    searchText: {
        fontSize: vw(18),
        width: vw(350),
    },
    separator: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        height: vw(0.7),
        backgroundColor: 'lightgrey',
        marginHorizontal: vw(30)
    },
    modalStyle: {
        height: '50%',
        width: '100%',
        backgroundColor: 'white',
        bottom: 0,
        top: vh(350),
        alignItems: 'center',
        justifyContent: 'center'
    },
    markerFields: {
        margin: vw(10),
        padding: vw(5),
        fontSize: vw(15),
        borderBottomWidth: vw(2),
        width: '80%'
    },
    dialogboxStyle: {
        alignItems: 'center',
        justifyContent: 'center',
        width: vw(300),
        height: vh(220),
        borderRadius: vh(20),
        backgroundColor: 'white'
    },
    containerStyle: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'transparent'
    },
    createButton: {
        padding: vw(5),
        backgroundColor: 'lightblue',
        borderRadius: vw(5),
        width: vw(100),
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: vw(10)
    },
    bottomButtonView: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: vh(20)
    },
    mainViewFlat: {
        padding: vw(10),
        backgroundColor: 'white',
        alignItems: 'center',
        borderRadius: vw(5),    
    },
    findRouteView: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: 'white',
        paddingHorizontal: vw(20),
        paddingVertical: Platform.OS === 'ios' ? vw(10) : 0,
        zIndex: 99,
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    findRouteText: {
        fontSize: vw(18),
        width: vw(250),
        paddingRight: vw(10)
    },
    directionBtn: {
        backgroundColor: Color.mapBlue,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: vw(2),
        height: vw(40),
        marginTop: vw(10)
    },
    directionTxt: {
        color: 'white',
        padding: vw(10)
    },
    clearBtn: {
        paddingHorizontal: vw(5)
    },
    transportView: {
        padding: vw(10),
        paddingHorizontal: vw(13),
        alignItems: 'center',
        borderWidth: vw(1)
    },
    transportText: {
        fontSize: vw(18),
        width: '100%',
    },
    bottomDirectionView: { 
        flexDirection: 'row' ,
        alignItems: 'center',
        justifyContent: 'space-between',
        marginVertical: vh(10)
    }
})

export default Styles