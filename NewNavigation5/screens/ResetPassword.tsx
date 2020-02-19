import React, { PureComponent } from 'react'
import {Text, View} from 'react-native'
import Styles from './Styles'
interface Props {
    
}

export default class ResetPassword extends PureComponent<Props> {
    render() {
        return (
            <View style={Styles.mainView}>
                <Text>ResetPassword</Text>
                </View>
        )
    }
}
