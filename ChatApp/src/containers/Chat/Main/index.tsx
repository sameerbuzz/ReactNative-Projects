import { connect } from 'react-redux'
import Main from './Main';
import { showingFooter, hideFooter, addImagesToBuffer, removeImagesFromBuffer, clearImageBuffer, changeCurrentImage,uploadAndSend, addVideo, uploadAndSendVideo, removeVideo } from '../../../modules/Main/Action';

const mapDispatchToProps = (dispatch: Function) => ({
  showingFooter: () => dispatch(showingFooter()),
  hideFooter: () => dispatch(hideFooter()),
  addImagesToBuffer: (data: any) => dispatch(addImagesToBuffer(data)),
  removeImagesFromBuffer: (callback: Function) => dispatch(removeImagesFromBuffer(callback)),
  clearImageBuffer: () => dispatch(clearImageBuffer()),
  changeCurrentImage: (value: string, callback: Function) => dispatch(changeCurrentImage(value, callback)),
  uploadAndSend: (roomID: string, userID: string, ref: any, callback: Function) => dispatch(uploadAndSend(roomID, userID, ref, callback)),
  addVideo: (data: any) => dispatch(addVideo(data)),
  uploadAndSendVideo: (roomID: string, userID: string, ref: any, callback: Function) => dispatch(uploadAndSendVideo(roomID, userID, ref, callback)),
  removeVideo: (callback: Function) => dispatch(removeVideo(callback)),
})

const mapStateToProps = (state: any) => {
  const { user } = state.ChatList
  const { showFooter, images, currentImg, sendingURL, videoURL, currentVideo, sendingVideoURL } = state.Main
  // console.warn('state ', showFooter)
  return {
    user, showFooter, images, currentImg, sendingURL, videoURL, currentVideo, sendingVideoURL
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Main);