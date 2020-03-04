import * as React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import Styles from './Styles';

export interface AppProps {
    data: any,
    getCoordinates: Function
}

export default class TransportFlatList extends React.PureComponent<AppProps, any> {
    constructor(props: AppProps) {
        super(props);
    }

    public render() {
        return (
            <View style={Styles.transportView}>
                <TouchableOpacity onPress={() => {}}>
                    <Text style={Styles.transportText}>{this.props.data.title} </Text>
                </TouchableOpacity>
            </View>
        );
    }
}
