import * as React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';

export interface AppProps {
}

export default class AppComponent extends React.Component<AppProps, any> {
    constructor(props: AppProps) {
        super(props);
    }


    p(promise: any) {
        debugger
        return promise.then((res: any) => [null, res]).catch((err: any) => [err]);
    }

    someFunction = (myArray: Array<number>) => {

        myArray.map((myValue) => {
            console.log('myval ',myValue);
            debugger
            this.p(new Promise(() => {
                debugger
                 console.log(myValue)
                }))
        });
        // return Promise.all(promises);
    }

    public render() {
        return (
            <View>
                <TouchableOpacity onPress={() => this.someFunction([1, 2, 3, 4, 5])}>
                    <Text>Click</Text>
                </TouchableOpacity>
            </View>
        );
    }
}
