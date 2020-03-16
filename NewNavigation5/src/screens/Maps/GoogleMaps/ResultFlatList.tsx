import * as React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
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
            <TouchableOpacity
                activeOpacity={0.8}
                style={Styles.mainViewFlat}
                onPress={() => {
                    debugger
                    this.props.getCoordinates(position, address)
                }}>
                <Text numberOfLines={1} style={Styles.searchText}>{address} </Text>
            </TouchableOpacity>
        );
    }
}
