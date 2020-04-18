import React, { Component } from 'react'
import { Text, View } from 'react-native'

let arr: any[]
export default class IDNow extends Component {

    add = () => {
        arr = [1, 2, 3, 4]
        console.warn('arr ', arr);

    }

    addAgain = () => {
        let newArr = [0]
        arr.pop()
        console.warn('arr again ', arr);
        arr = newArr.concat(arr)
        console.warn('arr once again ', arr);
    }

    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text onPress={() => this.add()}> add </Text>
                <Text onPress={() => this.addAgain()}> add again </Text>
            </View>
        )
    }
}
