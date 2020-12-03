import React, {useState, useEffect} from 'react';
import {View, TouchableOpacity, Image, ToastAndroid} from 'react-native';
// @ts-ignore
import Tts from 'react-native-tts';
import Styles from './Styles';
import {Color, vh, Images} from '../../constants';

interface Props {
  setAudioModal: Function;
  audioText: String;
  language: String;
  defaultText: String;
}

const PlayAudio = (props: Props) => {
  const {setAudioModal, audioText, language, defaultText} = props;
  const [play, setPlay] = useState(false);
  const [defaultAudioText, setdefaultAudioText] = useState(audioText);

  useEffect(() => {
    const listener = Tts.addEventListener('tts-finish', (event: any) =>
      setPlay(false),
    );
    return () => {
      listener;
    };
  }, [play]);

  useEffect(() => {
    Tts.voices().then((voices: any) => console.log(voices));
    Tts.setDefaultLanguage(language)
      .then()
      .catch((e: any) => {
        ToastAndroid.show(e.toString(), ToastAndroid.SHORT);
        Tts.setDefaultLanguage('en-US');
        setdefaultAudioText(defaultText);
      });
  }, []);

  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <TouchableOpacity
        activeOpacity={0.8}
        style={Styles.closeView}
        onPress={() => {
          Tts.stop();
          setAudioModal(false);
        }}>
        <Image source={Images.close} style={{height: vh(20), width: vh(20)}} />
      </TouchableOpacity>
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          width: '100%',
          alignItems: 'center',
          justifyContent: 'space-evenly',
        }}>
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => {
            setPlay(!play);
            play ? Tts.stop() : Tts.speak(defaultAudioText);
          }}>
          <Image
            source={play ? Images.stop : Images.play_button}
            style={{
              height: vh(100),
              width: vh(100),
              tintColor: Color.newViolet,
            }}
          />
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => {
            setPlay(true);
            Tts.stop();
            Tts.speak(defaultAudioText);
          }}>
          <Image
            source={Images.refresh}
            style={{
              height: vh(100),
              width: vh(100),
              tintColor: Color.newViolet,
            }}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default PlayAudio;
