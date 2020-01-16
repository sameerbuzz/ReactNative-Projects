import { connect } from 'react-redux'
import Main from './Main';
import { } from '../../../modules/Chat/SignIn/Action';

const mapDispatchToProps = (dispatch: Function) => ({

})

const mapStateToProps = (state: any) => {
  const { user } = state.ChatList;
  return {
    user
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Main);