import { connect } from 'react-redux'
import Home from './Home';
import { updateUid, updateEmail, updatePassword } from '../../modules/Action';

const mapDispatchToProps = (dispatch: Function) => {
  return {
    updateEmail: (email: string) => dispatch(updateEmail(email)),
    updatePassword: (password: string) => dispatch(updatePassword(password)),
    updateUid: (uid: string) => dispatch(updateUid(uid))
  }
}

const mapStateToProps = (state: any) => {
  const { uid, email, password } = state.SignIn;
  return {
    uid, email, password
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);