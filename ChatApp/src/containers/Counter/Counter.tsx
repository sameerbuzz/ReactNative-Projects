import * as React from 'react';
import { View, Text, NativeModules, Button, NativeEventEmitter } from 'react-native';
import NativeMethods from './NativeMethods';

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

    public render() {
        // console.warn(NativeModules.Counter)
        // console.warn(NativeModules.Counter.increment());
        NativeMethods.counterVal((val: string) => {this.setState({counter: val })})
        return (
            <View>
                <Text>Counter {this.state.counter}</Text>
                <Button title='Increment' onPress={() => NativeMethods.increment()} />
                <Button title='Decrement' onPress={() => NativeMethods.decrement()} />
            </View>
        );
    }
}
