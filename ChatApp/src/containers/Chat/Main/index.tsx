import { connect } from 'react-redux'
import Main from './Main';
import {updateEmail, login} from '../../../modules/Chat/SignIn/Action';

const mapDispatchToProps = (dispatch: Function) => ({
  updateEmail : (text : string) => {dispatch(updateEmail(text))}
})
  
const mapStateToProps = (state: any) => {
    const { uid } = state.Reducer;
    return {
      uid
    }
  }
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(Main);