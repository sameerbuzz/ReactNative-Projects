import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  NativeModules,
  Platform,
  ActivityIndicator,
  ScrollView,
  Alert,
  Clipboard,
  SafeAreaView,
  TextInput,
  StatusBar,
} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import SplashScreen from 'react-native-splash-screen';

// custom imports
import {ImagePickerFn} from '../../components';
import LinearGradient from 'react-native-linear-gradient';
import {Color, vh} from '../../constants';
import Styles from './Styles';
import {Dropdown} from 'react-native-material-dropdown';

const colors = [Color.newLightViolet, Color.newViolet];
const data = [
  {value: 'Afrikaans'},
  {value: 'Arabic'},
  {value: 'Belarusian'},
  {value: 'Bulgarian'},
  {value: 'Bengali'},
  {value: 'Catalan'},
  {value: 'Czech'},
  {value: 'Welsh'},
  {value: 'Danish'},
  {value: 'German'},
  {value: 'Greek'},
  {value: 'English'},
  {value: 'Esperanto'},
  {value: 'Spanish'},
  {value: 'Estonian'},
  {value: 'Persian'},
  {value: 'Finnish'},
  {value: 'French'},
  {value: 'Irish'},
  {value: 'Galician'},
  {value: 'Gujarati'},
  {value: 'Hebrew'},
  {value: 'Hindi'},
  {value: 'Croatian'},
  {value: 'Haitian'},
  {value: 'Hungarian'},
  {value: 'Indonesian'},
  {value: 'Icelandic'},
  {value: 'Italian'},
  {value: 'Japanese'},
  {value: 'Georgian'},
  {value: 'Kannada'},
  {value: 'Korean'},
  {value: 'Lithuanian'},
  {value: 'Latvian'},
  {value: 'Macedonian'},
  {value: 'Marathi'},
  {value: 'Malay'},
  {value: 'Maltese'},
  {value: 'Dutch'},
  {value: 'Norwegian'},
  {value: 'Polish'},
  {value: 'Portuguese'},
  {value: 'Romanian'},
  {value: 'Russian'},
  {value: 'Slovak'},
  {value: 'Slovenian'},
  {value: 'Albanian'},
  {value: 'Swedish'},
  {value: 'Swahili'},
  {value: 'Tamil'},
  {value: 'Telugu'},
  {value: 'Thai'},
  {value: 'Tagalog'},
  {value: 'Turkish'},
  {value: 'Ukranian'},
  {value: 'Urdu'},
  {value: 'Vietnamese'},
  {value: 'Chinese'},
];

const Main = () => {
  const [textResult, setTextResult] = useState('');
  const [status, setStatus] = useState(true);
  const [textStatus, setTextStatus] = useState(false);
  const [animate, setAnimate] = useState(false);
  const [language, setLanguage] = useState(11);
  const [translatedText, setTranslatedText] = useState('');

  useEffect(() => {
    SplashScreen.hide();
  }, []);

  const imagePicker = async () => {
    let result = await new Promise((resolve, reject) => {
      ImagePickerFn.getSinglePic((response: any) => {
        resolve(response.path);
      });
    });
    getText(Platform.OS === 'ios' ? 'file:///' + result : result);
  };

  const imagePickerCam = async () => {
    let result = await new Promise((resolve, reject) => {
      ImagePickerFn.getCamera((response: any) => {
        resolve(response.path);
      });
    });
    getText(Platform.OS === 'ios' ? 'file:///' + result : result);
  };

  const getText = async (imageSource: any) => {
    setAnimate(true);
    let result: string = await new Promise((resolve, reject) => {
      NativeModules.TextRecognition.getSourceImage(
        {
          imageSource: imageSource,
        },
        (source: string) => {
          resolve(source);
        },
      );
    });
    setTextResult(result);
    result === ''
      ? (languageAlert('Unable to Fetch Text\nPlease provide Clear Picture'),
        setAnimate(false))
      : (setStatus(!status), setAnimate(false));
  };

  const translate = async () => {
    let result: string = await new Promise((resolve, reject) => {
      NativeModules.TextRecognition.translate(
        {
          imageSource: textResult,
          language: language,
        },
        (source: string) => {
          resolve(source);
        },
      );
    });
    setTranslatedText(result);
    setAnimate(false);
  };

  const languageAlert = (text?: string) => {
    Alert.alert(
      'Alert!',
      text === undefined ? `Please select other Language` : text,
      [{text: 'OK', onPress: () => console.log('OK Pressed')}],
      {cancelable: false},
    );
  };
  if (status) {
    return (
      <KeyboardAwareScrollView
        bounces={false}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={Styles.MainView}>
        <View style={Styles.MainView}>
          <StatusBar backgroundColor="white" barStyle="dark-content" />
          <ActivityIndicator
            size="large"
            color={Color.newViolet}
            animating={animate}
            style={Styles.indicator}
          />
          {textStatus ? (
            <View style={Styles.mainTextView}>
              <View style={Styles.textView}>
                <ScrollView bounces={false}>
                  <TextInput
                    multiline={true}
                    style={Styles.textInputStyle}
                    value={textResult}
                    onChangeText={(text: string) => setTextResult(text)}
                  />
                </ScrollView>
              </View>
              <View style={{flexDirection: 'row'}}>
                <TouchableOpacity
                  activeOpacity={0.8}
                  onPress={() => setTextStatus(false)}
                  style={Styles.cardView2}>
                  <LinearGradient
                    start={{x: 0, y: 0}}
                    end={{x: 1, y: 1}}
                    colors={colors}
                    style={Styles.cardView2}>
                    <Text style={Styles.cardText}>Cancel</Text>
                  </LinearGradient>
                </TouchableOpacity>
                <TouchableOpacity
                  activeOpacity={0.8}
                  onPress={() => {
                    textResult === ''
                      ? languageAlert('Please Enter some Text')
                      : (setTextStatus(false), setStatus(!status));
                  }}
                  style={Styles.cardView2}>
                  <LinearGradient
                    start={{x: 0, y: 0}}
                    end={{x: 1, y: 1}}
                    colors={colors}
                    style={Styles.cardView2}>
                    <Text style={Styles.cardText}>Enter</Text>
                  </LinearGradient>
                </TouchableOpacity>
              </View>
            </View>
          ) : (
            <View>
              <TouchableOpacity
                activeOpacity={0.8}
                onPress={() => setTextStatus(true)}>
                <LinearGradient
                  start={{x: 0, y: 0}}
                  end={{x: 1, y: 1}}
                  colors={colors}
                  style={Styles.cardView}>
                  <Text style={Styles.cardText}>Write Text</Text>
                </LinearGradient>
              </TouchableOpacity>
              <TouchableOpacity
                activeOpacity={0.8}
                onPress={() => imagePicker()}>
                <LinearGradient
                  start={{x: 0, y: 0}}
                  end={{x: 1, y: 1}}
                  colors={colors}
                  style={Styles.cardView}>
                  <Text style={Styles.cardText}>Open Gallery</Text>
                </LinearGradient>
              </TouchableOpacity>
              <TouchableOpacity
                activeOpacity={0.8}
                onPress={() => imagePickerCam()}>
                <LinearGradient
                  start={{x: 0, y: 0}}
                  end={{x: 1, y: 1}}
                  colors={colors}
                  style={Styles.cardView}>
                  <Text style={Styles.cardText}>Open Camera</Text>
                </LinearGradient>
              </TouchableOpacity>
              <Text style={Styles.sameer}>@ SAMEER BHARDWAJ</Text>
            </View>
          )}
        </View>
      </KeyboardAwareScrollView>
    );
  } else {
    return (
      <SafeAreaView style={Styles.MainView}>
        <StatusBar backgroundColor="white" barStyle="dark-content" />
        <ActivityIndicator
          size="large"
          color={Color.newViolet}
          animating={animate}
          style={Styles.indicator}
        />
        <View style={Styles.firstHalfView}>
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => {
              setStatus(!status),
                setTextResult(''),
                setTranslatedText(''),
                setLanguage(11);
            }}
            style={Styles.cardView2}>
            <LinearGradient
              start={{x: 0, y: 0}}
              end={{x: 1, y: 1}}
              colors={colors}
              style={Styles.cardView2}>
              <Text style={Styles.cardText}>Try Another</Text>
            </LinearGradient>
          </TouchableOpacity>
          {textResult !== null ? (
            <View style={Styles.resultTextView}>
              <ScrollView showsVerticalScrollIndicator={false}>
                <Text
                  onLongPress={() => {
                    Clipboard.setString(textResult),
                      Platform.OS === 'android'
                        ? NativeModules.TextRecognition.getToast()
                        : null;
                  }}
                  style={Styles.resultText}>
                  {textResult}
                </Text>
              </ScrollView>
            </View>
          ) : null}
        </View>
        <View style={Styles.halfView}>
          <Dropdown
            label="Language"
            data={data}
            itemCount={8}
            onChangeText={(text: String, index: number) => {
              {
                setLanguage(index);
              }
            }}
          />
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => {
              language === 11
                ? languageAlert()
                : (setAnimate(true), translate());
            }}
            style={Styles.cardView2}>
            <LinearGradient
              start={{x: 0, y: 0}}
              end={{x: 1, y: 1}}
              colors={colors}
              style={Styles.cardView2}>
              <Text style={Styles.cardText}>Translate</Text>
            </LinearGradient>
          </TouchableOpacity>
          {translatedText !== null ? (
            <View style={Styles.resultTextView}>
              <ScrollView showsVerticalScrollIndicator={false}>
                <Text
                  onLongPress={() => {
                    Clipboard.setString(translatedText),
                      Platform.OS === 'android'
                        ? NativeModules.TextRecognition.getToast()
                        : null;
                  }}
                  style={Styles.resultText}>
                  {translatedText}
                </Text>
              </ScrollView>
            </View>
          ) : null}
        </View>
      </SafeAreaView>
    );
  }
};
export default Main;
