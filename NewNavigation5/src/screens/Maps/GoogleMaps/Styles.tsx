import { StyleSheet, Platform } from 'react-native';
import { vw, vh } from '../../../constants';
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
    searchBar: {
        position: 'absolute',
        top: vw(10),
        left: vw(10),
        right: vw(10),
        borderRadius: vw(5),
        backgroundColor: 'white',
        paddingHorizontal: vw(10),
        paddingVertical: Platform.OS === 'ios' ? vw(10) : 0,
        zIndex: 99,
    },
    searchBarFlat: {
        position: 'absolute',
        top: Platform.OS === 'ios' ? vh(55) : vh(70),
        left: vw(10),
        right: vw(10),
        backgroundColor: 'white',
        borderRadius: vw(5),
        zIndex: 99,
    },
    searchText: {
        fontSize: vw(18)
    },
    separator: {
        flex: 1,
        justifyContent: 'center',
        height: vw(0.7),
        backgroundColor: 'grey',
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
    }
})

export default Styles