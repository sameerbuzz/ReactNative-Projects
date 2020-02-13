import * as React from 'react';
import { View, Text, TouchableOpacity, NativeModules, Platform } from 'react-native';
import { ImagePickerFn } from '../../../components';

export interface AppProps {
    navigate?: any,
}

export interface AppState {
    imageSource: string,
    textResult: any,
}

export default class AppComponent extends React.Component<AppProps, AppState> {
    constructor(props: AppProps) {
        super(props);
        this.state = {
            imageSource: '',
            textResult: null
        };
    }

    imagePicker = () => {
        ImagePickerFn.getSinglePic((response: any) => {
            this.setState({
                imageSource: Platform.OS === 'ios' ? "file:///" + response.path : response.path
            }, () => this.getText())
        })
    }

    getText = async () => {
        let result = await new Promise((resolve, reject) => {
            NativeModules.TextRecognition.getSourceImage({
                imageSource: this.state.imageSource,
            }, (source: any) => {
                console.warn('okk');
                
                resolve(source)

            });
        })
        this.setState({
            textResult: result
        })
    }

    public render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <TouchableOpacity onPress={() => this.imagePicker()} >
                    <Text>Click Here</Text>
                </TouchableOpacity>
                <Text>{this.state.textResult}</Text>
            </View>
        );
    }
}
