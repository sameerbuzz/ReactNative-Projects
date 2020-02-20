import React, { ReactElement } from 'react'
import { Text, View, Button, TextInput } from 'react-native'
import Styles from '../Styles'
import { useDispatch } from "react-redux";
import { updateToken } from '../../modules/SignIn/Action';

function SignIn({ navigation }: any): ReactElement {

    // const { uid, email, password } = useSelector((state: {
    //     SignIn: any
    // }) => ({
    //     uid: state.SignIn.uid,
    //     email: state.SignIn.email,
    //     password: state.SignIn.password
    // }));
    const dispatch = useDispatch()
    React.useEffect(() => {
        dispatch(updateToken(Math.random().toString()))
    }, [])
    return (
        <View style={Styles.mainView}>
            <Text>Sign In</Text>
            <Button
                title="Go to Home"
                onPress={() => { navigation.navigate('HomeNavigator') }}
            />
        </View>
    )
}

export default SignIn

