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

export default class AppComponent extends React.PureComponent<AppProps, AppState> {
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
        const compare = this.props.uid === user.id
        return (
            <View style={Styles.mainFlatView}>
                <View>
                    <Image source={{ uri: compare ? user.avatar : user.ravatar }} style={Styles.imgProfile} />
                </View>
                <TouchableOpacity style={Styles.txt}
                    activeOpacity={1}
                    onPress={() => this.props.openChat(compare ? user._id : user.id, compare ? user._name : user.name, compare ? user.avatar : user.ravatar, user.roomID)}>
                    <View style={Styles.msgView}>
                        <Text style={Styles.nameStyle}>{compare ? user._name : user.name}</Text>
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
