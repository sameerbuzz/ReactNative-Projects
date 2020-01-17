import * as React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
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

    pad = (num: number) => {
        return ("0" + num).slice(-2);
    }
    getTimeFromDate = (timestamp: number) => {
        var date = new Date(timestamp * 1000);
        var hours = date.getHours();
        var minutes = date.getMinutes();
        var seconds = date.getSeconds();
        return this.pad(hours) + ":" + this.pad(minutes)
    }

    public render() {
        const { item } = this.props
        const { user } = this.props.item
        console.log(item)
        return (
            <View style={Styles.mainFlatView}>
                <View>
                    <Image source={{ uri: item.avatar }} style={Styles.imgProfile} />
                </View>
                <TouchableOpacity style={Styles.txt}
                    activeOpacity={1}
                    onPress={() => this.props.openChat(this.props.uid === user.id ? user._id : user.id, user._name)}>
                    <View style={Styles.msgView}>
                        <Text style={Styles.nameStyle}>{this.props.uid === user.id ? user._name : user.name}</Text>
                        <Text style={Styles.lastMsg}>{item.lastMsg}</Text>
                    </View>
                    <View style={Styles.timeView}>
                        <Text style={Styles.timeTxt}>{this.getTimeFromDate(item.createdAt)}</Text>
                    </View>
                </TouchableOpacity>
            </View>
        );
    }
}
