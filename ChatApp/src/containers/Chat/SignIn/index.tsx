import { connect } from 'react-redux'
import SignIn from './SignIn';
import {login,updateEmail} from '../../../modules/Chat/SignIn/Action';

const mapDispatchToProps = (dispatch : Function) => {
  return{
    updateEmail : (email: string) => dispatch(updateEmail(email))
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
  )(SignIn);