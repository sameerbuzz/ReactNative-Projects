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
  BackHandler,
  Image,
  Modal,
} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import LinearGradient from 'react-native-linear-gradient';
import {Dropdown} from 'react-native-material-dropdown';

// custom imports
import {ImagePickerFn} from '../../components';
import {Color, vh, Images} from '../../constants';
import Styles from './Styles';
import PlayAudio from './PlayAudio';
import CameraModal from './CameraModal';

const colors = [Color.newLightViolet, Color.newViolet];

const Main = () => {
  const [textResult, setTextResult] = useState('');
  const [status, setStatus] = useState(true);
  const [textStatus, setTextStatus] = useState(false);
  const [animate, setAnimate] = useState(false);
  const [language, setLanguage] = useState(11);
  const [translatedText, setTranslatedText] = useState('');
  const [audioModal, setAudioModal] = useState(false);
  const [audioTextType, setAudioTextType] = useState('');
  const [audioText, setAudioText] = useState('');
  const [cameraModalOpen, setCameraModalOpen] = useState(false);
  const [backHandlerClickCount, setbackHandlerClickCount] = useState(0);

  useEffect(() => {
    SplashScreen.hide();
    // BackHandler.addEventListener('hardwareBackPress', () => {
    //   setbackHandlerClickCount(backHandlerClickCount + 1),
    //     backHandlerClickCount < 2
    //       ? NativeModules.TextRecognition.getToast()
    //       : BackHandler.exitApp();
    // });
    // if (backHandlerClickCount > 0) {
    //   setTimeout(() => {
    //     setbackHandlerClickCount(0);
    //   }, 2000);
    // }
  }, []);

  const imagePicker = async () => {
    let result = await new Promise((resolve, reject) => {
      ImagePickerFn.getSinglePic((response: any) => {
        resolve(response.path);
      });
    });
    setAnimate(true);
    getText(Platform.OS === 'ios' ? 'file:///' + result : result);
  };

  const getText = async (imageSource: any) => {
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
      <SafeAreaView style={Styles.MainView}>
        <StatusBar backgroundColor={Color.newViolet} barStyle="light-content" />
        <ActivityIndicator
          size="large"
          color={'red'}
          animating={animate}
          style={Styles.indicator}
        />
        {textStatus ? (
          <View style={Styles.mainTextView}>
            <View style={Styles.textView}>
              <ScrollView bounces={false}>
                <TextInput
                  autoFocus={true}
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
          <View style={{alignItems: 'center', marginTop: vh(100)}}>
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
            <TouchableOpacity activeOpacity={0.8} onPress={() => imagePicker()}>
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
              onPress={() => setCameraModalOpen(true)}>
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
        <Modal
          animationType="slide"
          transparent={true}
          visible={cameraModalOpen}
          onRequestClose={() => setCameraModalOpen(false)}>
          <CameraModal
            closeModal={() => setCameraModalOpen(false)}
            onPress={(image: any) => {
              setCameraModalOpen(false);
              setAnimate(true);
              getText(
                Platform.OS === 'ios' ? 'file:///' + image.uri : image.uri,
              );
            }}
          />
        </Modal>
      </SafeAreaView>
    );
  } else {
    return (
      <SafeAreaView style={Styles.MainView}>
        <StatusBar backgroundColor={Color.newViolet} barStyle="light-content" />
        <ActivityIndicator
          size="large"
          color={Color.newViolet}
          animating={animate}
          style={Styles.indicator}
        />
        <View style={Styles.firstHalfView}>
          <View style={Styles.headingView}>
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
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => {
                setAudioTextType(textResult);
                setAudioModal(true);
                setAudioText('en-US');
              }}>
              <Image source={Images.volume} style={Styles.volView} />
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => {
                Clipboard.setString(textResult),
                  Platform.OS === 'android'
                    ? NativeModules.TextRecognition.getToast()
                    : null;
              }}>
              <Image source={Images.copy} style={Styles.volView} />
            </TouchableOpacity>
          </View>
          {textResult !== null ? (
            <View style={Styles.resultTextView}>
              <ScrollView showsVerticalScrollIndicator={false}>
                <Text style={Styles.resultText}>{textResult}</Text>
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
          <View style={Styles.headingView}>
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
            {translatedText === '' ? null : (
              <>
                <TouchableOpacity
                  activeOpacity={0.8}
                  onPress={() => {
                    setAudioTextType(translatedText);
                    setAudioModal(true);
                    setAudioText(data[language].lanuage);
                  }}>
                  <Image source={Images.volume} style={Styles.volView} />
                </TouchableOpacity>
                <TouchableOpacity
                  activeOpacity={0.8}
                  onPress={() => {
                    Clipboard.setString(translatedText),
                      Platform.OS === 'android'
                        ? NativeModules.TextRecognition.getToast()
                        : null;
                  }}>
                  <Image source={Images.copy} style={Styles.volView} />
                </TouchableOpacity>
              </>
            )}
          </View>
          {translatedText !== null ? (
            <View style={Styles.resultTextView}>
              <ScrollView showsVerticalScrollIndicator={false}>
                <Text style={Styles.resultText}>{translatedText}</Text>
              </ScrollView>
            </View>
          ) : null}
        </View>
        <Modal
          animationType="slide"
          transparent={true}
          visible={audioModal}
          onRequestClose={() => setAudioModal(false)}>
          <PlayAudio
            setAudioModal={() => setAudioModal(false)}
            audioText={audioTextType}
            language={audioText}
            defaultText={textResult}
          />
        </Modal>
      </SafeAreaView>
    );
  }
};
export default Main;

const data = [
  {value: 'Afrikaans', lanuage: 'en-ZA'},
  {value: 'Arabic', lanuage: 'ar-SA'},
  {value: 'Belarusian', lanuage: 'be-BY'},
  {value: 'Bulgarian', lanuage: 'bg-BG'},
  {value: 'Bengali', lanuage: 'bn-IN'},
  {value: 'Catalan', lanuage: 'ca-ES'},
  {value: 'Czech', lanuage: 'cs-CZ'},
  {value: 'Welsh', lanuage: 'cy-GB'},
  {value: 'Danish', lanuage: 'da-DK'},
  {value: 'German', lanuage: 'de-DE'},
  {value: 'Greek', lanuage: 'el-GR'},
  {value: 'English', lanuage: 'en-US'},
  {value: 'Esperanto', lanuage: 'eo'},
  {value: 'Spanish', lanuage: 'es-ES'},
  {value: 'Estonian', lanuage: 'et-EE'},
  {value: 'Persian', lanuage: 'fa-IR'},
  {value: 'Finnish', lanuage: 'fi-FI'},
  {value: 'French', lanuage: 'fr-FR'},
  {value: 'Irish', lanuage: 'ga-IE'},
  {value: 'Galician', lanuage: 'gl-ES'},
  {value: 'Gujarati', lanuage: 'gu-IN'},
  {value: 'Hebrew', lanuage: 'he-IL'},
  {value: 'Hindi', lanuage: 'hi-IN'},
  {value: 'Croatian', lanuage: 'hr-HR'},
  {value: 'Haitian', lanuage: 'fr-HT'},
  {value: 'Hungarian', lanuage: 'hu-HU'},
  {value: 'Indonesian', lanuage: 'id-ID'},
  {value: 'Icelandic', lanuage: 'is-IS'},
  {value: 'Italian', lanuage: 'it-IT'},
  {value: 'Japanese', lanuage: 'ja-JP'},
  {value: 'Georgian', lanuage: 'ka-GE'},
  {value: 'Kannada', lanuage: 'kn-IN'},
  {value: 'Korean', lanuage: 'ko-KR'},
  {value: 'Lithuanian', lanuage: 'lt-LT'},
  {value: 'Latvian', lanuage: 'lv-LV'},
  {value: 'Macedonian', lanuage: 'mk-MK'},
  {value: 'Marathi', lanuage: 'mr-IN'},
  {value: 'Malay', lanuage: 'ms-MY'},
  {value: 'Maltese', lanuage: 'mt-MT'},
  {value: 'Dutch', lanuage: 'nl-NL'},
  {value: 'Norwegian', lanuage: 'nb-NO'},
  {value: 'Polish', lanuage: 'pl-PL'},
  {value: 'Portuguese', lanuage: 'pt-BR'},
  {value: 'Romanian', lanuage: 'ro-RO'},
  {value: 'Russian', lanuage: 'ru-RU'},
  {value: 'Slovak', lanuage: 'sk-SK'},
  {value: 'Slovenian', lanuage: 'sl-SI'},
  {value: 'Albanian', lanuage: 'sq-AL'},
  {value: 'Swedish', lanuage: 'sv-SE'},
  {value: 'Swahili', lanuage: 'sw-KE'},
  {value: 'Tamil', lanuage: 'ta-IN'},
  {value: 'Telugu', lanuage: 'te-IN'},
  {value: 'Thai', lanuage: 'th-TH'},
  {value: 'Tagalog', lanuage: 'tl-PH'},
  {value: 'Turkish', lanuage: 'tr-TR'},
  {value: 'Ukranian', lanuage: 'uk-UA'},
  {value: 'Urdu', lanuage: 'ur-PK'},
  {value: 'Vietnamese', lanuage: 'vi-VN'},
  {value: 'Chinese', lanuage: 'zh-CN'},
];
