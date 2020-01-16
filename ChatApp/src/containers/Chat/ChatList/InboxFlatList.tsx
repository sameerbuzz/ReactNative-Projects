import * as React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import Styles from './Styles';

export interface AppProps {
    item: any,
    openChat: Function,
    uid: string,
}

export interface AppState {
}

export default class AppComponent extends React.Component<AppProps, AppState> {
    constructor(props: AppProps) {
        super(props);
        this.state = {
        };
    }

    public render() {
        return (
            <View style={[Styles.mainView, { borderColor: 'black' }]}>
                <TouchableOpacity style={Styles.txt} onPress={() => this.props.openChat(this.props.uid === this.props.item.user.id ? this.props.item.user._id : this.props.item.user.id, this.props.item.user._name)}>
                    <Text>{this.props.uid === this.props.item.user.id ? this.props.item.user._name : this.props.item.user.name}</Text>
                    <Text>{this.props.item.lastMsg}</Text>
                </TouchableOpacity>
            </View>
        );
    }
}
