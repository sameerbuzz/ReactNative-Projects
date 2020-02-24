import React, { ReactElement } from 'react'
import { Text, View, Button, TextInput } from 'react-native'
import Styles from '../Styles'
import { useDispatch } from "react-redux";
import { updateToken } from '../../modules/SignIn/Action';

function SignIn({ navigation }: any): ReactElement {
    const dispatch = useDispatch()
    React.useEffect(() => {
        
    }, [])
    return (
        <View style={Styles.mainView}>
            <Text>Sign In</Text>
            <Button
                title="Go to Home"
                onPress={() => {dispatch(updateToken(Math.random().toString())) }}
            />
        </View>
    )
}

export default SignIn

