import React, { ReactElement } from 'react'
import { Text, View, Button } from 'react-native'
import Styles from './Styles'

interface Props {
    
}

function SignUp({ navigation }: any): ReactElement {
    return (
        <View style={Styles.mainView}>
            <Text>SignUp</Text>
            <Button
                title="Go to Home"
                onPress={() => navigation.navigate('HomeNavigator')}
            />
        </View>
    )
}

export default SignUp

