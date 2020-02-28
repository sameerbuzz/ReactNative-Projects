import React, { ReactElement } from 'react'
import { Text, View, Button, TextInput } from 'react-native'
import Styles from '../Styles'
import { useDispatch, useSelector } from "react-redux";
import { updateUid, updateEmail, updatePassword } from '../../modules/Home/Action';
import {updateToken} from '../../modules/SignIn/Action'

function Home({ navigation }: any): ReactElement {

    const { uid, email, password, token } = useSelector((state: {
        Home: any, SignIn: any
    }) => ({
        uid: state.Home.uid,
        email: state.Home.email,
        password: state.Home.password,
        token: state.SignIn.token
    }));
    const dispatch = useDispatch()
    React.useEffect(() => {
        // console.warn('email ', email, ' password ', password, ' uid ', uid)
        // console.warn('token ',token, token === '');
        
    }, [])
    return (
        <View style={Styles.mainView}>
            <Text>Home</Text>
            <TextInput placeholder='enter email' onChangeText={(text: string) => { dispatch(updateEmail(text)) }} value={email} />
            <TextInput placeholder='enter password' onChangeText={(text: string) => { dispatch(updatePassword(text)) }} value={password} />
            <TextInput placeholder='enter uid' onChangeText={(text: string) => { dispatch(updateUid(text)) }} value={uid} />
            <Text>{token}</Text>
            <Button
                title="Refresh Token"
                onPress={() => dispatch(updateToken(''))}
            />
        </View>
    )
}

export default Home

// 'use strict';
 
// import React, { Component } from 'react';
 
// import {
//   AppRegistry,
//   StyleSheet,
//   Text,
//   TouchableOpacity,
//   Linking,
// } from 'react-native';
 
// import QRCodeScanner from 'react-native-qrcode-scanner';
 
// export default class Home extends Component {
//   onSuccess = (e: any) => {
//     Linking
//       .openURL(e.data)
//       .catch(err => console.error('An error occured', err));
//   }
//   render() {
//     return (
//       <QRCodeScanner
//         onRead={this.onSuccess}
//         // flashMode={QRCodeScanner.Constants.FlashMode.torch}      
//         topContent={
//           <Text style={styles.centerText}>
//             Go to <Text style={styles.textBold}>wikipedia.org/wiki/QR_code</Text> on your computer and scan the QR code.
//           </Text>
//         }
//         bottomContent={
//           <TouchableOpacity style={styles.buttonTouchable}>
//             <Text style={styles.buttonText}>OK. Got it!</Text>
//           </TouchableOpacity>
//         }
//       />
//     );
//   }
// }
 
// const styles = StyleSheet.create({
//   centerText: {
//     flex: 1,
//     fontSize: 18,
//     padding: 32,
//     color: '#777',
//   },
//   textBold: {
//     fontWeight: '500',
//     color: '#000',
//   },
//   buttonText: {
//     fontSize: 21,
//     color: 'rgb(0,122,255)',
//   },
//   buttonTouchable: {
//     padding: 16,
//   },
// });

