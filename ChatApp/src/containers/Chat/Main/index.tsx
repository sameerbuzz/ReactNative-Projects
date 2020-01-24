import { connect } from 'react-redux'
import Main from './Main';
import { isTyping } from '../../../modules/Chat/Main/Action';

const mapDispatchToProps = (dispatch: Function) => ({
  isTyping: () => dispatch(isTyping()),
})

const mapStateToProps = (state: any) => {
  const { isTyping } = state.Main;
  const {user} = state.ChatList
  return {
    isTyping, user
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Main);