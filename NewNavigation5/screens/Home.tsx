import React, { ReactElement } from 'react'
import { Text, View, Button } from 'react-native'
import Styles from './Styles'
interface Props {
    
}

function SignIn({ navigation }: any): ReactElement {
    return (
        <View style={Styles.mainView}>
            <Text>Home</Text>
            <Button
                title="Go to Sign In"
                onPress={() => navigation.pop()}
            />
        </View>
    )
}

export default SignIn

