import * as React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Styles from './Styles';

export interface AppProps {
    dataAddress: any,
    dataPosition: any,
    getCoordinates: Function
}

export default class ResultFlatList extends React.PureComponent<AppProps, any> {
    constructor(props: AppProps) {
        super(props);
    }

    public render() {
        return (
            <TouchableOpacity
                activeOpacity={0.8}
                style={Styles.mainViewFlat}
                onPress={() => {
                    this.props.getCoordinates(this.props.dataPosition, this.props.dataAddress)
                }}>
                <Text numberOfLines={1} style={Styles.searchText}>{this.props.dataAddress} </Text>
            </TouchableOpacity>
        );
    }
}
