import * as React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Styles from './Styles';
import { Color } from '../../../constants';

export interface AppProps {
    data: any,
    getPath: Function,
    time: Array<any>,
    currentVehicle: string
}

let legArr: any
export default class TransportFlatList extends React.PureComponent<AppProps, any> {
    constructor(props: AppProps) {
        super(props);
    }

    public render() {
        const t = this.props.time[0].summary.travelTimeInSeconds
        const d = this.props.time[0].summary.lengthInMeters
        let time = t
        let tunit = 'sec'
        t >= 60 ? (t / 60 >= 60 ? (time = (t / 3600).toFixed(2), tunit = 'hr') : (time = (t / 60).toFixed(2), tunit = 'min')) : null
        let distance = d
        let dunit = 'm'
        d >= 1000 ? (distance = (d / 1000).toFixed(2), dunit = 'km') : null
        const textColor = this.props.currentVehicle === this.props.data.title

        return (
            <View style={[Styles.transportView, textColor ? { backgroundColor: 'white', borderColor: Color.mapBlue } : { backgroundColor: Color.mapBlue, borderColor: 'white' }]}>
                <TouchableOpacity activeOpacity={0.8} onPress={() => this.props.getPath(this.props.data.title)}>
                    <Text style={[Styles.transportText, { color: textColor ? Color.mapBlue : 'white' }]}>{this.props.data.title} </Text>
                    <Text style={[Styles.transportText, { color: textColor ? Color.mapBlue : 'white' }]}>{time} {tunit} </Text>
                    <Text style={[Styles.transportText, { color: textColor ? Color.mapBlue : 'white' }]}>{distance} {dunit} </Text>
                </TouchableOpacity>
            </View>
        );
    }
}
