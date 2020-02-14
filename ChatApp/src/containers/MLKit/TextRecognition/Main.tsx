import * as React from 'react';
import { View, Text, TouchableOpacity, NativeModules, Platform, ActivityIndicator, ScrollView } from 'react-native';
import { ImagePickerFn } from '../../../components';
import LinearGradient from 'react-native-linear-gradient'
import { Color } from '../../../constants';
import Styles from './Styles';

export interface AppProps {
    navigate?: any,
}

export interface AppState {
    imageSource: string,
    textResult: any,
    status: boolean,
    animate: boolean,
}

const colors = [Color.newLightViolet, Color.newViolet]

export default class AppComponent extends React.Component<AppProps, AppState> {
    constructor(props: AppProps) {
        super(props);
        this.state = {
            imageSource: '',
            textResult: null,
            status: true,
            animate: false,
        };
    }

    imagePicker = () => {
        ImagePickerFn.getSinglePic((response: any) => {
            this.setState({
                animate: true,
                imageSource: Platform.OS === 'ios' ? "file:///" + response.path : response.path
            }, () => this.getText())
        })
    }

    imagePickerCam = () => {
        ImagePickerFn.getCamera((response: any) => {
            this.setState({
                animate: true,
                imageSource: Platform.OS === 'ios' ? "file:///" + response : response
            }, () => this.getText())
        })
    }

    getText = async () => {
        let result = await new Promise((resolve, reject) => {
            NativeModules.TextRecognition.getSourceImage({
                imageSource: this.state.imageSource,
            }, (source: any) => {
                resolve(source)
            });
        })
        this.setState({
            textResult: result,
            status: !this.state.status,
            animate: false
        })
    }

    translate = async () => {
        let result = await new Promise((resolve, reject) => {
            NativeModules.TextRecognition.translate({
                imageSource: this.state.textResult,
            }, (source: any) => {
                resolve(source)
            });
        })
        console.warn('text ', result);
    }

    public render() {
        return (
            <View style={Styles.MainView}>
                <ActivityIndicator size='large' color={Color.newViolet} animating={this.state.animate} style={Styles.indicator} />
                {this.state.status &&
                    <View>
                        <TouchableOpacity onPress={() => this.imagePicker()} >
                            <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }} colors={colors} style={Styles.cardView}>
                                <Text style={Styles.cardText}>Open Gallery</Text>
                            </LinearGradient>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => this.imagePickerCam()} >
                            <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }} colors={colors} style={Styles.cardView}>
                                <Text style={Styles.cardText}>Open Camera</Text>
                            </LinearGradient>
                        </TouchableOpacity>
                    </View>}
                {!this.state.status &&
                    <View>
                        <TouchableOpacity onPress={() => this.setState({ status: !this.state.status, textResult: '' })} style={Styles.cardView} >
                            <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }} colors={colors} style={Styles.cardView}>
                                <Text style={Styles.cardText}>Try Another</Text>
                            </LinearGradient>
                        </TouchableOpacity>
                        {this.state.textResult !== '' ? <ScrollView><Text style={Styles.resultText} >{this.state.textResult}</Text></ScrollView> : null}
                        <TouchableOpacity onPress={() => this.translate()} style={Styles.cardView} >
                            <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }} colors={colors} style={Styles.cardView}>
                                <Text style={Styles.cardText}>Translate</Text>
                            </LinearGradient>
                        </TouchableOpacity>
                    </View>
                }
            </View>
        );
    }
}
