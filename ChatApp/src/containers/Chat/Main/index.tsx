import { connect } from 'react-redux'
import Main from './Main';
import { } from '../../../modules/Chat/SignIn/Action';

const mapDispatchToProps = (dispatch: Function) => ({

})

const mapStateToProps = (state: any) => {
  const { user, isOnline } = state.ChatList;
  return {
    user, isOnline
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Main);