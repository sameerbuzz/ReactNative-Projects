import * as React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import Styles from './Styles';

export interface AppProps {
    data: any,
    getCoordinates: Function
}

export default class ResultFlatList extends React.PureComponent<AppProps, any> {
    constructor(props: AppProps) {
        super(props);
    }

    public render() {
        const address = this.props.data.address.freeformAddress
        const { position } = this.props.data
        return (
            <View style={Styles.mainViewFlat}>
                <TouchableOpacity onPress={() => this.props.getCoordinates(position, address)}>
                    <Text numberOfLines ={1} style={Styles.searchText}>{address} </Text>
                </TouchableOpacity>
            </View>
        );
    }
}
