import * as React from 'react';
import { View, Text, TouchableOpacity, Image, Alert, ActivityIndicator } from 'react-native';
import { GiftedChat, Bubble, Composer, InputToolbar, Time, Day } from 'react-native-gifted-chat';

// custom imports
import FirebaseServices from '../../../utils/FirebaseServices';
import { Images, Strings, vw, vh, VectorIcons, Color } from '../../../constants';
import Styles from './Styles';
import PicModal from '../PicModal/PicModal'
import { ImagePickerFn } from '../../../components';

var counter: number = 1
var imgCounter: number = 0

interface AppProps {
  navigation?: any,
  user: any,
  showFooter: boolean,
  updateFooter: Function,
  addImagesToBuffer: Function,
  images: any,
  removeImagesFromBuffer: Function
}

interface AppState {
  messages: any,
  lastMsg: string,
  modalVisible: boolean,
  isTyping: boolean,
  allGroupUsers: Array<any>,
  loadState: boolean,
  multipleSource: Array<string>,
  source: string,
  openFooter: boolean,
  sendingSource: string,
}

export default class AppComponent extends React.PureComponent<AppProps, AppState> {
  giftedChatRef: any
  constructor(props: AppProps) {
    super(props);
    this.state = {
      messages: [],
      lastMsg: '',
      modalVisible: false,
      isTyping: false,
      allGroupUsers: [],
      loadState: false,
      multipleSource: [],
      source: '',
      openFooter: false,
      sendingSource: '',
    };
  }

  componentDidMount() {

    // reset counter
    counter = 1

    // fetching all members of group, if type is group
    if (this.props.navigation.getParam('type') === 'group') {
      FirebaseServices.fetchGroupUsers(this.props.navigation.getParam('roomID'), this.setGroupUsers)
    } else {
      // Loading msgs-------------
      this.refOn()
    }

    // fetching typing status
    if (this.props.navigation.getParam('type') === 'normal') {
      FirebaseServices.fetchTyping(this.props.navigation.getParam('roomID'), this.props.navigation.getParam('reciverId'), this.setTyping)
    }
  }

  get user() {
    if (this.props.navigation.getParam('type') === 'normal') {
      return {
        _id: this.props.user.key,
        _name: this.props.user.displayName,
        avatar: this.props.user.photoURL,
        id: this.props.navigation.getParam('reciverId'),
        name: this.props.navigation.getParam('receiverName'),
        ravatar: this.props.navigation.getParam('reciverAvatar'),
        email: this.props.user.email,
        roomID: this.props.navigation.getParam('roomID'),
        type: 'normal',
      }
    } else if (this.props.navigation.getParam('type') === 'group') {
      return {
        _id: this.props.user.key,
        _name: this.props.user.displayName,
        avatar: this.props.user.photoURL,
        id: this.props.navigation.getParam('roomID'),
        name: this.props.navigation.getParam('receiverName'),
        ravatar: this.props.navigation.getParam('reciverAvatar'),
        email: this.props.user.email,
        roomID: this.props.navigation.getParam('roomID'),
        type: 'group',
      }
    }
  }

  refOn = () => {
    FirebaseServices.refOn(counter, this.props.navigation.getParam('roomID'), this.props.navigation.getParam('type'), this.props.navigation.getParam('type') === 'normal' ? [] : this.state.allGroupUsers, (message: any) => {
      if (message.length !== 20 * counter) {
        this.setState({ loadState: false })
      } else {
        this.setState({ loadState: true })
      }
      this.setState({
        messages: message,
        lastMsg: message,
      })
    })
  }

  setGroupUsers = (userList: any) => {
    var arr = userList.AllUsers.map((obj: { key: string; }) => obj.key)
    arr = arr.concat(userList.creator.key)
    this.setState({
      allGroupUsers: arr
    }, () => this.refOn())
  }

  setTyping = (data: any) => {
    if (data !== null) {
      this.setState({ isTyping: data.isTyping })
    }
  }

  multipleImagePicker = () => {
    ImagePickerFn.getMultiplePic((response: Array<any>) => {
      var i= 0
      response.map(res => {
        i++
        var obj = { img: res, roomID: this.props.navigation.getParam('roomID'), userID: this.props.user.key }
        console.warn('adding ... ', i)
        this.props.addImagesToBuffer(obj)
        if (obj.roomID === this.props.navigation.getParam('roomID') && obj.userID === this.props.user.key) {
          this.setState({
            source: obj.img
          }, () => {
            this.props.updateFooter()
            this.refOn()
            console.warn('uploading... ',i)
            this.uploadImage()
          })

        }
      })
      // console.warn(response.length === i)
      // response.length === i ? this.uploading() : null
      // console.warn('img => ',this.props.images)
      // this.setState({
      //   multipleSource: response
      // }, () => { this.props.updateFooter(), this.refOn(), this.uploadImage(this.state.multipleSource) })
    })

  }

  // uploading = () => {
  //   console.warn('here')
  //   this.props.updateFooter()
  //   this.refOn()
  //   this.uploadImage()
  // }

  // singleImagePicker = () => {
  //   ImagePickerFn.getSinglePic((response: any) => {
  //     this.setState({
  //       source: response.path
  //     }, () => { this.props.updateFooter(), this.refOn(), this.uploadImage(this.state.source) })
  //   })
  // }

  uploadImage = () => {
    // console.warn('uploading ', obj)
    this.props.images.map((obj: any) => {
      if (obj.roomID === this.props.navigation.getParam('roomID') && obj.userID === this.props.user.key) {
        FirebaseServices.uploadMsgPic(obj.img, (url: string, name: string) => {
          console.warn('getting ... ')
          this.setState({
            sendingSource: url
          }, () => { this.props.updateFooter(), this.giftedChatRef.onSend({ text: '' }, true), this.props.removeImagesFromBuffer() })
        })
      }

    })

  }

  customBubble = (props: any) => {
    return (
      <Bubble
        {...props}
        //@ts-ignore
        wrapperStyle={{
          left: Styles.bubbleLeft,
          right: Styles.bubbleRight
        }}
      />
    );
  }

  renderSend = () => {
    const msg = this.giftedChatRef.state.text || '';
    return (
      <View>
        <TouchableOpacity style={Styles.sendBtn} activeOpacity={1} onPress={() => {
          if (msg.trim().length > 0) {
            this.giftedChatRef.onSend({ text: msg.trim() }, true);
          } else if (this.state.sendingSource !== '') {
            this.giftedChatRef.onSend({ text: msg.trim() }, true);
          } else { return }
        }}>
          <Image source={Images.send} />
        </TouchableOpacity>
      </View>
    )
  }

  renderComposer = (props: any) => {
    return (
      <Composer
        {...props}
        placeholder={Strings.typeMsg}
        textInputStyle={Styles.inputContainer}
      />
    )
  }

  renderInputToolbar = (props: any) => {
    return (
      <InputToolbar
        {...props}
        containerStyle={Styles.footerStyle}
        primaryStyle={Styles.primaryStyle}
      />
    )
  }

  renderTime = (props: any) => {
    return (
      <Time
        {...props}
        timeTextStyle={{
          left: Styles.timeText,
          right: Styles.timeText
        }}
      />
    )
  }

  renderDay = (props: any) => {
    return (
      <Day
        {...props}
        wrapperStyle={Styles.dayStyle}
        textStyle={Styles.dayText}
      />
    )
  }

  renderChatFooter = () => {
    return (
      <View style={Styles.chatFooter} />
    )
  }

  typingIndicator = (text: string) => {
    if (text !== '') {
      FirebaseServices.trueTypingIndicator(this.props.navigation.getParam('roomID'), this.props.user.key)
    }
  }

  loadMsgs = () => {
    counter = counter + 1
    this.refOn()
  }

  renderFooter = () => {
    return (
      this.props.showFooter ?
        <View style={Styles.imageFooter}>
          <Image source={{ uri: this.state.source }} style={Styles.sendingImg} />
          <ActivityIndicator animating={true} size='large' color={Color.chatGreen} style={Styles.indicator} />
        </View>
        :
        <></>
    )

  }

  componentWillUnmount() {
    FirebaseServices.refOff()
  }

  public render() {
    const pic = this.props.navigation.getParam('reciverAvatar')
    return (
      <>
        <View style={Styles.chatHeader}>
          <View style={Styles.leftHeaderView}>
            <TouchableOpacity style={Styles.headerView} onPress={() => this.props.navigation.pop(2)} activeOpacity={1}>
              <Image source={Images.backBtn} style={Styles.headerBack} />
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={1} style={Styles.headerImgView} onPress={() => this.setState({ modalVisible: true })}>
              <Image source={pic === '' ? Images.imgPlaceholder : { uri: pic }} style={Styles.headerImg} />
            </TouchableOpacity>
            <Text style={Styles.headerName}>{this.props.navigation.getParam('receiverName')}</Text>
            {this.state.isTyping ? <Text style={Styles.headerName}>  ({Strings.typing})</Text> : null}
          </View>
          <View style={Styles.rightHeaderView}>
            <VectorIcons.FontAwesome
              name='camera'
              size={vw(30)}
              color={Color.tealBlue}
              onPress={() => {
                Alert.alert(
                  'Pick photo from...',
                  '',
                  [
                    { text: 'Gallery', onPress: () => this.multipleImagePicker() },
                    { text: 'Cancel', onPress: () => console.log('cancelled') },
                  ],
                  { cancelable: true },
                )
              }}
            />
          </View>
        </View>
        <GiftedChat
          minComposerHeight={vh(45)}
          maxComposerHeight={vh(75)}
          ref={(ref) => { this.giftedChatRef = ref; }}
          messages={this.state.messages}
          onSend={(messages) => FirebaseServices.send(messages, this.state.sendingSource)}
          user={this.user}
          showAvatarForEveryMessage={false}
          renderAvatarOnTop={true}
          showUserAvatar={true}
          renderBubble={this.customBubble}
          renderSend={this.renderSend}
          renderComposer={this.renderComposer}
          renderInputToolbar={this.renderInputToolbar}
          renderTime={this.renderTime}
          renderDay={this.renderDay}
          renderChatFooter={this.renderChatFooter}
          loadEarlier={this.state.loadState}
          onLoadEarlier={this.loadMsgs}
          onInputTextChanged={(text: string) => this.typingIndicator(text)}
          renderFooter={this.renderFooter}
        />
        {
          this.state.modalVisible &&
          <PicModal
            image={pic === '' ? Images.imgPlaceholder : { uri: pic }}
            visible={this.state.modalVisible}
            handleAction={() => this.setState({ modalVisible: false })}
          />
        }
      </>
    )
  }
}
