import React, {PureComponent} from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  View,
  Image,
  Text,
  Dimensions,
} from 'react-native';
import {RNCamera} from 'react-native-camera';
import {vh, Images} from '../../constants';

const iPhoneX = Dimensions.get('window').height >= 812;

export interface AppProps {
  onPress: Function;
  closeModal: Function;
}

export default class ExampleApp extends PureComponent<AppProps, any> {
  constructor(props: AppProps) {
    super(props);
    this.state = {
      img: '',
      toggle: true,
      flash: true,
    };
  }
  render() {
    return (
      <View style={styles.container}>
        {this.state.toggle ? (
          <RNCamera
            style={styles.preview}
            type={RNCamera.Constants.Type.back}
            flashMode={
              this.state.flash
                ? RNCamera.Constants.FlashMode.on
                : RNCamera.Constants.FlashMode.off
            }
            captureAudio={false}>
            {({camera}) => {
              return (
                <View style={styles.mainCameraView}>
                  <View style={styles.modalBack}>
                    <TouchableOpacity
                      activeOpacity={0.8}
                      onPress={() => this.props.closeModal()}
                      style={{padding: vh(30)}}>
                      <Image source={Images.close} style={styles.btns} />
                    </TouchableOpacity>
                    <TouchableOpacity
                      activeOpacity={0.8}
                      onPress={() => this.setState({flash: !this.state.flash})}
                      style={{padding: vh(30)}}>
                      <Text style={{color: 'white'}}>
                        {this.state.flash ? 'Flash ON' : 'Flash OFF'}
                      </Text>
                    </TouchableOpacity>
                  </View>

                  <TouchableOpacity
                    activeOpacity={0.8}
                    onPress={() =>
                      this.takePicture(camera, (img: string) => {
                        this.setState({
                          img: img,
                          toggle: !this.state.toggle,
                        });
                      })
                    }
                    style={styles.capture}>
                    <View style={styles.clickBtn}>
                      <View style={styles.innerBtn}>
                        <View style={styles.innerWhiteBtn} />
                      </View>
                    </View>
                  </TouchableOpacity>
                </View>
              );
            }}
          </RNCamera>
        ) : (
          <View style={styles.container}>
            <Image
              source={{uri: this.state.img.uri}}
              style={{flex: 1, width: '100%'}}
            />
            <View style={styles.imgView}>
              <TouchableOpacity
                activeOpacity={0.8}
                style={styles.btnView}
                onPress={() => this.setState({toggle: !this.state.toggle})}>
                <Image source={Images.close} style={styles.btns} />
              </TouchableOpacity>
              <TouchableOpacity
                activeOpacity={0.8}
                style={styles.btnView}
                onPress={() => this.props.onPress(this.state.img)}>
                <Image source={Images.check} style={styles.btns2} />
              </TouchableOpacity>
            </View>
          </View>
        )}
      </View>
    );
  }

  takePicture = async function(
    camera: {
      takePictureAsync: (arg0: {quality: number}) => any;
    },
    callback: Function,
  ) {
    const options = {quality: 0.5};
    const data = await camera
      .takePictureAsync(options)
      .then((value: any) => {
        callback(value);
      })
      .catch((e: any) => {});
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  mainCameraView: {
    flex: 1,
    width: '100%',
    justifyContent: 'flex-end',
  },
  preview: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  capture: {
    backgroundColor: '#fff',
    borderRadius: vh(40),
    alignSelf: 'center',
    margin: 20,
  },
  clickBtn: {
    backgroundColor: 'white',
    height: vh(80),
    width: vh(80),
    borderRadius: vh(40),
    alignItems: 'center',
    justifyContent: 'center',
  },
  innerBtn: {
    backgroundColor: 'black',
    height: vh(70),
    width: vh(70),
    borderRadius: vh(35),
    alignItems: 'center',
    justifyContent: 'center',
  },
  innerWhiteBtn: {
    backgroundColor: 'white',
    height: vh(60),
    width: vh(60),
    borderRadius: vh(30),
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalBack: {
    position: 'absolute',
    top: iPhoneX ? vh(30) : 0,
    left: 0,
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'black',
  },
  imgView: {
    position: 'absolute',
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: vh(20),
    bottom: 0,
    backgroundColor: 'black',
  },
  btnView: {
    padding: vh(20),
  },
  acceptBtns: {
    height: vh(40),
    width: vh(40),
  },
  btns: {
    height: vh(20),
    width: vh(20),
    tintColor: 'white',
  },
  btns2: {
    height: vh(20),
    width: vh(25),
    tintColor: 'white',
  },
});
