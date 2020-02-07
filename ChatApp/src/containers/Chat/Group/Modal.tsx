import React from 'react';
import { View, Image, Modal, TouchableOpacity, TextInput, Text } from 'react-native';
import Styles from './Styles'
import { ImagePickerFn } from '../../../components';
import { Color, Strings, Images, vh } from '../../../constants';

interface AppProps {
    visible?: boolean,
    handleAction: Function,
    image?: any,
    gpName: Function,
}

interface AppState {
    source: string,
    bgBorder: number,
    gpName: string,
}

export default class AppComponent extends React.Component<AppProps, AppState> {
    constructor(props: AppProps) {
        super(props);
        this.state = {
            source: '', bgBorder: 0, gpName: ''
        };
    }

    imagePicker = () => {
        ImagePickerFn.getSinglePic((response: any) => {
            this.setState({
                source: response.path
            })
        })
        
    }

    public render() {
        return (
            <Modal
                animationType='slide'
                transparent={true}
                visible={this.props.visible}
            >
                <TouchableOpacity activeOpacity={1} onPress={() => this.props.handleAction()} style={Styles.container}>
                    <TouchableOpacity activeOpacity={1} style={Styles.modalBody}>
                        <TouchableOpacity style={Styles.imgStyle} onPress={() => this.imagePicker()} activeOpacity={1}>
                            {this.state.source === '' ? <Image source={Images.imgPlaceholder} resizeMode='cover' style={Styles.imageStyle} /> :
                                <Image source={{uri: this.state.source} } resizeMode='cover' style={Styles.imageStyle} />}
                            <Image source={Images.edit} style={Styles.edit} />
                        </TouchableOpacity>
                        <TextInput
                            placeholder={Strings.gpName}
                            style={[Styles.input, { borderColor: this.state.bgBorder === 1 ? Color.tealBlue : Color.greyish }]}
                            onChangeText={(text: string) => {this.props.gpName(text), this.setState({gpName: text})}}
                            returnKeyType="done"
                            autoCorrect={false}
                            keyboardType='default'
                            onFocus={() => this.setState({ bgBorder: 1 })}
                            onBlur={() => this.setState({ bgBorder: 0 })}
                        />
                        <View style={Styles.modalBtnView}>
                            <TouchableOpacity style={Styles.modalBtn} activeOpacity={1} onPress={() => this.props.handleAction()} ><Text style={Styles.btnTextStyle2}>{Strings.cancel}</Text></TouchableOpacity>
                            <TouchableOpacity style={Styles.modalBtn} activeOpacity={1} onPress={() => {this.state.gpName === '' ? null : this.props.image(this.state.source)}} ><Text style={[Styles.btnTextStyle, this.state.gpName === '' ? {color: Color.placeholderGrey}: {color: Color.tealBlue}]}>{Strings.createGrp}</Text></TouchableOpacity>
                        </View>
                    </TouchableOpacity>
                </TouchableOpacity>
            </Modal>
        )
    }
}