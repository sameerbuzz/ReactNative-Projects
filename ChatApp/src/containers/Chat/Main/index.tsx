import { connect } from 'react-redux'
import Main from './Main';
import { updateFooter, addImagesToBuffer, removeImagesFromBuffer } from '../../../modules/Chat/Main/Action';

const mapDispatchToProps = (dispatch: Function) => ({
  updateFooter: () => dispatch(updateFooter()),
  addImagesToBuffer: (data: any) => dispatch(addImagesToBuffer(data)),
  removeImagesFromBuffer: () => dispatch(removeImagesFromBuffer()),
})

const mapStateToProps = (state: any) => {
  const { user } = state.ChatList
  const { showFooter, images } = state.Main
  // console.warn('state ', showFooter)
  return {
    user, showFooter, images
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Main);