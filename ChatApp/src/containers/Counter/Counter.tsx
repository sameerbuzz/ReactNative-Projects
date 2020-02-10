import * as React from 'react';
import { View, StyleSheet, Text, NativeModules, Button, NativeEventEmitter } from 'react-native';

export interface AppProps {
}

export interface AppState {
    counter: string
}

// instantiate the event emitter
const CounterEvents = new NativeEventEmitter(NativeModules.Counter)

export default class AppComponent extends React.Component<AppProps, AppState> {
    constructor(props: AppProps) {
        super(props);
        this.state = {
            counter: '0'
        };
    }

    componentDidMount() {
        // subscribe to event
        CounterEvents.addListener(
            "onIncrement",
            res => console.warn("onIncrement event", res)
        )
    }

    decrement = async () => {
        try {
            const res = await NativeModules.Counter.decrement()
            console.warn(res)
        } catch (e) {
            console.warn(e.message, e.code)
        }
        this.counterVal()
    }

    increment = async () => {
        try {
            const res = await NativeModules.Counter.inc()
            console.warn(res)
        } catch (e) {
            console.warn(e.message, e.code)
        }
        this.counterVal()
    }

    counterVal = () => {
        NativeModules.Counter.getCount((value: string, number: string, name: string) => {
            this.setState({ counter: value })
        })
    }

    public render() {
        // console.warn(NativeModules.Counter)
        console.warn(NativeModules.Counter.increment());
        // NativeModules.Counter.getCount((value: string, number: string, name: string) => {
        //     console.warn("count is " + value, number, name)
        // })
        return (
            <View>
                <Text>Counter {this.state.counter}</Text>
                <Button title='Increment' onPress={() => this.increment()} />
                <Button title='Decrement' onPress={() => this.decrement()} />
            </View>
        );
    }
}
