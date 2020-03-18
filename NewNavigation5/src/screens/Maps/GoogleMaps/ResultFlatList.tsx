import * as React from 'react';
import { View, Text, TouchableOpacity, CheckBox } from 'react-native';
import Styles from './Styles';

export interface AppProps {
    data: any,
    check: Array<any>,
    getCoordinates: Function
}

export default class ResultFlatList extends React.PureComponent<AppProps, any> {
    constructor(props: AppProps) {
        super(props);
    }

    public render() {
        let address: any
        const { data } = this.props
        const { position } = this.props.data
        console.log('add ', this.props.data, this.props.check.length === 0);
        this.props.check.length === 0 ?
            address = data.address
            :
            address = data.address.freeformAddress
        console.log(position);
        

        return (
            <TouchableOpacity
                activeOpacity={0.8}
                style={Styles.mainViewFlat}
                onPress={() => {
                    // console.warn('heyy ',position, address);
                    
                    this.props.getCoordinates( position, address)
                }}>
                <Text numberOfLines={1} style={Styles.searchText}>{address} </Text>
            </TouchableOpacity>
        );
    }
}
