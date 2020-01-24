import * as React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import Styles from './Styles';
import { Images } from '../../../constants';

export interface AppProps {
    item: any,
    openChat: Function,
    uid: string,
    openModal: any,
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
        var date = new Date(timestamp);
        var hours = date.getHours();
        var minutes = date.getMinutes();
        return this.pad(hours) + ":" + this.pad(minutes)
    }

    selectPic = (img: string) => {
        var pic
        img === '' ? pic = Images.imgPlaceholder : pic = { uri: img }
        return pic
    }

    public render() {
        const { item } = this.props
        const { user } = this.props.item
        const compare = this.props.uid === user.id
        return (
            <View style={Styles.mainFlatView}>
                <View>
                    <TouchableOpacity onPress={() => this.props.openModal(compare ? this.selectPic(user.avatar) : this.selectPic(user.ravatar))}>
                        <Image source={compare ? this.selectPic(user.avatar) : this.selectPic(user.ravatar)}
                            style={Styles.imgProfile} />
                    </TouchableOpacity>
                </View>
                <TouchableOpacity style={Styles.txt}
                    activeOpacity={1}
                    onPress={() => this.props.openChat(compare ? user._id : user.id, compare ? user._name : user.name, compare ? user.avatar : user.ravatar, user.roomID)}>
                    <View style={Styles.msgView}>
                        <Text style={Styles.nameStyle}>{compare ? user._name : user.name}</Text>
                        <Text style={Styles.lastMsg} numberOfLines={1} >{item.lastMsg}</Text>
                    </View>
                    <View style={Styles.timeView}>
                        <Text style={Styles.timeTxt}>{this.getTimeFromDate(item.createdAt)}</Text>
                    </View>
                </TouchableOpacity>
            </View>
        );
    }
}
