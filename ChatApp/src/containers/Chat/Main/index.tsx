import { connect } from 'react-redux'
import Main from './Main';
import { showingFooter, hideFooter, addImagesToBuffer, removeImagesFromBuffer, clearImageBuffer, changeCurrentImage } from '../../../modules/Chat/Main/Action';

const mapDispatchToProps = (dispatch: Function) => ({
  showingFooter: () => dispatch(showingFooter()),
  hideFooter: () => dispatch(hideFooter()),
  addImagesToBuffer: (data: any) => dispatch(addImagesToBuffer(data)),
  removeImagesFromBuffer: (callback: Function) => dispatch(removeImagesFromBuffer(callback)),
  clearImageBuffer: () => dispatch(clearImageBuffer()),
  changeCurrentImage: (value: string, callback: Function) => dispatch(changeCurrentImage(value, callback)),
})

const mapStateToProps = (state: any) => {
  const { user } = state.ChatList
  const { showFooter, images, currentImg } = state.Main
  // console.warn('state ', showFooter)
  return {
    user, showFooter, images, currentImg
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Main);