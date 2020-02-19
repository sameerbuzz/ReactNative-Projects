import * as React from 'react';
import { View, Text, TouchableOpacity, NativeModules, Platform, ActivityIndicator, ScrollView, Alert } from 'react-native';
import { ImagePickerFn } from '../../../components';
import LinearGradient from 'react-native-linear-gradient'
import { Color } from '../../../constants';
import Styles from './Styles';
import { Dropdown } from 'react-native-material-dropdown';

export interface AppProps {
    navigate?: any,
}

export interface AppState {
    imageSource: string,
    textResult: any,
    status: boolean,
    animate: boolean,
    language: number,
    translatedText: any,
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
            language: 11,
            translatedText: null,
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
                language: this.state.language,
            }, (source: any) => {
                resolve(source)
            });
        })
        this.setState({
            translatedText: result,
            animate: false
        })
    }

    languageAlert = () => {
        Alert.alert(
            'Alert!',
            `Please select other Language`,
            [
                { text: 'OK', onPress: () => console.log('OK Pressed') },
            ],
            { cancelable: false },
        )
    }

    public render() {

        let data = [
            { value: 'Afrikaans' }, { value: 'Arabic' }, { value: 'Belarusian' }, { value: 'Bulgarian' }, { value: 'Bengali' },
            { value: 'Catalan' }, { value: 'Czech' }, { value: 'Welsh' }, { value: 'Danish' }, { value: 'German' },
            { value: 'Greek' }, { value: 'English' }, { value: 'Esperanto' }, { value: 'Spanish' }, { value: 'Estonian' },
            { value: 'Persian' }, { value: 'Finnish' }, { value: 'French' }, { value: 'Irish' }, { value: 'Galician' },
            { value: 'Gujarati' }, { value: 'Hebrew' }, { value: 'Hindi' }, { value: 'Croatian' }, { value: 'Haitian' },
            { value: 'Hungarian' }, { value: 'Indonesian' }, { value: 'Icelandic' }, { value: 'Italian' }, { value: 'Japanese' },
            { value: 'Georgian' }, { value: 'Kannada' }, { value: 'Korean' }, { value: 'Lithuanian' }, { value: 'Latvian' },
            { value: 'Macedonian' }, { value: 'Marathi' }, { value: 'Malay' }, { value: 'Maltese' }, { value: 'Dutch' },
            { value: 'Norwegian' }, { value: 'Polish' }, { value: 'Portuguese' }, { value: 'Romanian' }, { value: 'Russian' },
            { value: 'Slovak' }, { value: 'Slovenian' }, { value: 'Albanian' }, { value: 'Swedish' }, { value: 'Swahili' },
            { value: 'Tamil' }, { value: 'Telugu' }, { value: 'Thai' }, { value: 'Tagalog' }, { value: 'Turkish' },
            { value: 'Ukranian' }, { value: 'Urdu' }, { value: 'Vietnamese' }, { value: 'Chinese' }
        ];

        return (
            <View style={Styles.MainView}>
                <ActivityIndicator size='large' color={Color.newViolet} animating={this.state.animate} style={Styles.indicator} />
                <View style={Styles.firstHalfView}>
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
                            <TouchableOpacity onPress={() => this.setState({ status: !this.state.status, textResult: null, translatedText: null, language: 11 })} style={Styles.cardView} >
                                <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }} colors={colors} style={Styles.cardView}>
                                    <Text style={Styles.cardText}>Try Another</Text>
                                </LinearGradient>
                            </TouchableOpacity>
                            {this.state.textResult !== null ? <ScrollView style={Styles.resultTextView} showsVerticalScrollIndicator={false}><Text style={Styles.resultText} >{this.state.textResult}</Text></ScrollView> : null}
                        </View>
                    }
                </View>
                <View style={Styles.halfView}>
                    {!this.state.status &&
                        <View>
                            <Dropdown
                                label='Language'
                                data={data}
                                onChangeText={(text: String, index: number) => { this.setState({ language: index }) }}
                            />
                            <TouchableOpacity onPress={() => { this.state.language === 11 ? this.languageAlert() : this.setState({ animate: true }, () => this.translate()) }} style={Styles.cardView} >
                                <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }} colors={colors} style={Styles.cardView}>
                                    <Text style={Styles.cardText}>Translate</Text>
                                </LinearGradient>
                            </TouchableOpacity>
                            {this.state.translatedText !== null ? <ScrollView style={Styles.resultTextView} showsVerticalScrollIndicator={false}><Text style={Styles.resultText} >{this.state.translatedText}</Text></ScrollView> : null}
                        </View>
                    }
                </View>
            </View>
        );
    }
}
