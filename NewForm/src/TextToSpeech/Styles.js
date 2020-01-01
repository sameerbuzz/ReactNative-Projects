import { StyleSheet } from 'react-native';

const Styles = StyleSheet.create({
    mainView: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    txtIn: {
        alignItems:'center',
        justifyContent: 'center',
        width: '75%',
        borderWidth: 2,
        borderRadius: 5,
        fontSize: 20,
        textAlign: 'center',
        padding: 20,
        marginBottom: 20
    },
    btn: {
        backgroundColor: '#1cad9a',
        padding: 10,
        paddingHorizontal: 30,
        borderRadius: 5
    },
    textStyle: {
        color: 'white'
    },
})

export default Styles;