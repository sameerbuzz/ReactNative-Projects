import { connect } from 'react-redux'
import ChatList from './ChatList';
import { updateUser } from '../../../modules/Chat/ChatList/Action';

const mapDispatchToProps = (dispatch: Function) => ({
  updateUser: (user: any) => dispatch(updateUser(user)),
})

const mapStateToProps = (state: any) => {
  const { uid, email } = state.SignIn
  const { user } = state.ChatList;
  return {
    user, uid, email
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ChatList);