import { connect } from 'react-redux'
import ChatList from './ChatList';
import { updateUser, isOnline } from '../../../modules/ChatList/Action';

const mapDispatchToProps = (dispatch: Function) => ({
  updateUser: (user: any) => dispatch(updateUser(user)),
  isOnline: () => dispatch(isOnline()),

})

const mapStateToProps = (state: any) => {
  const { uid, email } = state.SignIn
  const { user, isOnline } = state.ChatList;
  return {
    user, uid, email, isOnline
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ChatList);