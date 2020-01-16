import { connect } from 'react-redux'
import SignUp from './SignUp';
import { updateUid, updateEmail } from '../../../modules/Chat/SignIn/Action';

const mapDispatchToProps = (dispatch: Function) => {
  return {
    updateEmail: (email: string) => dispatch(updateEmail(email)),
    updateUid: (uid: string) => dispatch(updateUid(uid))
  }
}

const mapStateToProps = (state: any) => {
  const { uid, email } = state.SignIn;
  return {
    uid, email
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignUp);