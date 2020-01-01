import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import Tts from 'react-native-tts';
import Styles from './Styles';
import RNTextDetector from "react-native-text-detector";
import myPicker from '../components/ImagePickerFn.js';

export default class TextToSpeech extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: null,
            source: null
        };
    }

    detectText = async () => {
        console.warn('ok 2')
        try {
            const options = {
                quality: 0.8,
                base64: true,
                skipProcessing: true,
            };
            //   const { uri } = await this.camera.takePictureAsync(options);
            const visionResp = await RNTextDetector.detectFromUri(this.state.source);
            console.warn('visionResp', visionResp);
            

            var vals = visionResp.map(function(a) {return a.text;});
            console.warn('vals ', vals[0])

            this.setState({
                text: vals[0]
            })

        } catch (e) {
            console.warn(e);
        }
    };

    openCamera = () => {
        console.warn('ok 1')
        myPicker.getCamera(response => {
            this.setState({
                source: response
            })
        })
    }

    speech = (text) => {
        Tts.speak(text)
    }

    render() {
        return (
            <View style={Styles.mainView}>
                <TouchableOpacity
                    style={Styles.btn}
                    onPress={() => this.openCamera()}
                >
                    <Text style={Styles.textStyle}>Click Image</Text>
                </TouchableOpacity>
                <TextInput
                    selectTextOnFocus={true}
                    ref={(input) => { this.textInput = input; }}
                    placeholder='Enter data here'
                    style={Styles.txtIn}
                    value={this.state.text}
                    // onChangeText={(text) => this.setState({ data: text })}
                    // onSubmitEditing={() => this.speech(this.state.data)}
                />
                <TouchableOpacity
                    style={Styles.btn}
                    // onPress={() => this.speech(this.state.data)}
                    onPress={() => this.detectText()}
                >
                    <Text style={Styles.textStyle}>Detect</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={Styles.btn}
                    onPress={() => this.speech(this.state.text)}
                >
                    <Text style={Styles.textStyle}>Read</Text>
                </TouchableOpacity>
            </View>
        );
    }
}
