import React, { ReactElement, useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, NativeModules, Platform, ActivityIndicator, ScrollView, Alert, Clipboard, SafeAreaView } from 'react-native';
import { ImagePickerFn } from '../../components';
import LinearGradient from 'react-native-linear-gradient'
import { Color } from '../../constants';
import Styles from './Styles';
import { Dropdown } from 'react-native-material-dropdown';

const colors = [Color.newLightViolet, Color.newViolet]
const data = [
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

function Main({ navigation }: any): ReactElement {

    const [textResult, setTextResult] = useState()
    const [status, setStatus] = useState(true)
    const [animate, setAnimate] = useState(false)
    const [language, setLanguage] = useState(11)
    const [translatedText, setTranslatedText] = useState()

    const imagePicker = async () => {
        let result = await new Promise((resolve, reject) => {
            ImagePickerFn.getSinglePic((response: any) => {
                resolve(response.path)
            })
        })
        setAnimate(true)
        getText(Platform.OS === 'ios' ? "file:///" + result : result)
    }

    const imagePickerCam = async () => {
        let result = await new Promise((resolve, reject) => {
            ImagePickerFn.getCamera((response: any) => {
                resolve(response.path)
            })
        })
        setAnimate(true)
        getText(Platform.OS === 'ios' ? "file:///" + result : result)

    }

    const getText = async (imageSource: any) => {
        let result = await new Promise((resolve, reject) => {
            NativeModules.TextRecognition.getSourceImage({
                imageSource: imageSource
            }, (source: string) => {
                resolve(source)
            });
        })
        setTextResult(result)
        setStatus(!status)
        setAnimate(false)
    }

    const translate = async () => {
        let result = await new Promise((resolve, reject) => {
            NativeModules.TextRecognition.translate({
                imageSource: textResult,
                language: language,
            }, (source: string) => {
                resolve(source)
            });
        })
        setTranslatedText(result)
        setAnimate(false)
    }

    const languageAlert = () => {
        Alert.alert(
            'Alert!',
            `Please select other Language`,
            [
                { text: 'OK', onPress: () => console.log('OK Pressed') },
            ],
            { cancelable: false },
        )
    }
    if (status) {
        return (
            <View style={Styles.MainView}>
                <ActivityIndicator size='large' color={Color.newViolet} animating={animate} style={Styles.indicator} />
                <View>
                    <TouchableOpacity onPress={() => imagePicker()} >
                        <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }} colors={colors} style={Styles.cardView}>
                            <Text style={Styles.cardText}>Open Gallery</Text>
                        </LinearGradient>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => imagePickerCam()} >
                        <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }} colors={colors} style={Styles.cardView}>
                            <Text style={Styles.cardText}>Open Camera</Text>
                        </LinearGradient>
                    </TouchableOpacity>
                </View>
            </View>
        )
    } else {
        return (
            <SafeAreaView style={Styles.MainView}>
                <ActivityIndicator size='large' color={Color.newViolet} animating={animate} style={Styles.indicator} />
                <View style={Styles.firstHalfView}>
                    <TouchableOpacity onPress={() => { setStatus(!status), setTextResult(null), setTranslatedText(null), setLanguage(11) }} style={Styles.cardView2} >
                        <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }} colors={colors} style={Styles.cardView2}>
                            <Text style={Styles.cardText}>Try Another</Text>
                        </LinearGradient>
                    </TouchableOpacity>
                    {textResult !== null ?
                        <ScrollView style={Styles.resultTextView} showsVerticalScrollIndicator={false}>
                            <Text onLongPress={() => { Clipboard.setString(textResult), Platform.OS === 'android' ? NativeModules.TextRecognition.getToast() : null }}
                                style={Styles.resultText} >{textResult}</Text>
                        </ScrollView> : null}
                </View>
                <View style={Styles.halfView}>
                    <Dropdown
                        label='Language'
                        data={data}
                        onChangeText={(text: String, index: number) => { { setLanguage(index) } }}
                    />
                    <TouchableOpacity onPress={() => { language === 11 ? languageAlert() : setAnimate(true), translate() }} style={Styles.cardView2} >
                        <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }} colors={colors} style={Styles.cardView2}>
                            <Text style={Styles.cardText}>Translate</Text>
                        </LinearGradient>
                    </TouchableOpacity>
                    {translatedText !== null ?
                        <ScrollView style={Styles.resultTextView} showsVerticalScrollIndicator={false}>
                            <Text onLongPress={() => { Clipboard.setString(translatedText), Platform.OS === 'android' ? NativeModules.TextRecognition.getToast() : null }}
                                style={Styles.resultText} >{translatedText}</Text>
                        </ScrollView> : null}
                </View>
            </SafeAreaView>
        )
    }
}
export default Main;