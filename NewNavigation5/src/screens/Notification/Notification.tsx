import React from 'react';
import { View, Text } from 'react-native';
import FirebaseServices from '../../utils/FirebaseServices';

export interface AppProps {
}

export default class App extends React.PureComponent<AppProps, any> {
    constructor(props: AppProps) {
        super(props);
        FirebaseServices.checkPermission()
    }

    componentDidMount() {
        FirebaseServices.readForegroundNotification()
        FirebaseServices.readBackgroundNotification()
    }

    public render() {
        return (
            <View>
                <Text>App Component</Text>
            </View>
        );
    }
}

