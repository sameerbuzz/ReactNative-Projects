import * as React from 'react';
import { View, Text, TouchableOpacity, Image, FlatList, ActivityIndicator } from 'react-native';
import Styles from './Styles'
import FlatlistData from './FlatlistData'
import LinearGradient from 'react-native-linear-gradient'
import { Strings, Color, Images, vh } from '../../../constants';
import Modal from './Modal'
import FirebaseServices from '../../../utils/FirebaseServices'

const colors = [Color.weirdGreen, Color.tealBlue]

interface AppProps {
    navigation?: any,
    user: any,
}

interface AppState {
    list: Array<any>,
    show: boolean,
    selectedList: Array<any>,
    groupPic: string,
    groupName: string,
    animate: boolean,
}

export default class AppComponent extends React.Component<AppProps, AppState> {
    constructor(props: AppProps) {
        super(props);
        this.state = {
            list: this.props.navigation.getParam('list'),
            show: false, selectedList: [], groupPic: '',
            groupName: '', animate: false,
        };
    }

    headerItems = () => {
        return (
            <View style={Styles.txt}>
                <Text>Add Participants</Text>
            </View>
        )
    }

    FlatListItemSeparator = () => {
        return (
            <View
                style={Styles.separator}
            />
        );
    }

    uploadImage = (text: string) => {
        this.setState({ animate: true })
        if (!!text) {
            FirebaseServices.uploadPic(this.state.groupName, text, (uri: string) => {
                if (uri !== null) {
                    this.setState({ groupPic: uri }, () => this.createGroup())
                }
            })
        } else {
            this.createGroup()
        }
    }

    createGroup = () => {
        FirebaseServices.creatingGroup(this.state.groupName, this.state.selectedList, this.state.groupPic, this.props.user, (data: any) => {
            this.setState({ animate: false, show: false })
            this.props.navigation.navigate('ChatMain', { type: 'group', roomID: this.state.groupName, receiverName: this.state.groupName, reciverAvatar: this.state.groupPic })
        })
    }

    renderItems = (rowData: any) => {
        const { key, item } = rowData
        return (
            <FlatlistData
                item={item}
                openChat={() => this.setState({ show: true })}
                selectedList={(state: string, list: any) => {
                    var temp = this.state.selectedList
                    if (state === 'select') {
                        temp.push(list)
                        this.setState({ selectedList: temp })

                    } else if ('unselect') {
                        temp = temp.filter(obj => obj.key !== list.key)
                        this.setState({ selectedList: temp })

                    }
                }}
            />
        )
    }

    public render() {
        return (
            <View style={Styles.outerMainView}>
                <ActivityIndicator animating={this.state.animate} size={"large"} style={Styles.indicator} color={Color.tealBlue} />
                <View style={Styles.header}>
                    <TouchableOpacity style={Styles.backBtn} onPress={() => this.props.navigation.pop()}>
                        <Image source={Images.backBtn} />
                    </TouchableOpacity>
                    <Text>{Strings.newGp}</Text>
                </View>
                <FlatList
                    alwaysBounceVertical={false}
                    style={Styles.flatStyle}
                    ListHeaderComponent={this.headerItems}
                    ItemSeparatorComponent={this.FlatListItemSeparator}
                    data={this.state.list}
                    renderItem={this.renderItems}
                />
                {
                    this.state.show &&
                    <Modal
                        gpName={(text: string) => this.setState({ groupName: text })}
                        visible={this.state.show}
                        image={(text: string) => this.uploadImage(text)}
                        handleAction={() => this.setState({ show: false })}
                    />
                }
                <TouchableOpacity style={Styles.btn} activeOpacity={1} onPress={() => this.setState({ show: !this.state.show })} disabled={this.state.selectedList.length === 0 ? true : false}>
                    <LinearGradient start={{ x: 1, y: 1 }} end={{ x: 0, y: 0 }} colors={colors} style={[Styles.gradient, this.state.selectedList.length === 0 ? Styles.disableStyle : null]}>
                        <Text style={Styles.btnText}>+</Text>
                    </LinearGradient>
                </TouchableOpacity>
            </View>
        );
    }
}
