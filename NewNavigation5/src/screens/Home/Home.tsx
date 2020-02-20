import React, { ReactElement } from 'react'
import { Text, View, Button, TextInput } from 'react-native'
import Styles from '../Styles'
import { useDispatch, useSelector } from "react-redux";
import { updateUid, updateEmail, updatePassword } from '../../modules/Home/Action';

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
    }, [])
    return (
        <View style={Styles.mainView}>
            <Text>Home</Text>
            <TextInput placeholder='enter email' onChangeText={(text: string) => { dispatch(updateEmail(text)) }} value={email} />
            <TextInput placeholder='enter password' onChangeText={(text: string) => { dispatch(updatePassword(text)) }} value={password} />
            <TextInput placeholder='enter uid' onChangeText={(text: string) => { dispatch(updateUid(text)) }} value={uid} />
            <Text>{token}</Text>
            {/* <Button
                title="Go to Sign In"
                onPress={() => navigation.pop()}
            /> */}
        </View>
    )
}

export default Home

