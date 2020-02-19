import React, { ReactElement } from 'react'
import { Text, View, Button } from 'react-native'
import Styles from './Styles'
interface Props {
    
}

function SignIn({ navigation }: any): ReactElement {
    return (
        <View style={Styles.mainView}>
            <Text>SignIn</Text>
            <Button
                title="Go to Home"
                onPress={() => navigation.navigate('SIGNUP')}
            />
        </View>
    )
}

export default SignIn

