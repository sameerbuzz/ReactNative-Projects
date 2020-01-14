import { connect } from 'react-redux'
import ChatList from './ChatList';
import {} from '../../../modules/Chat/SignIn/Action';

const mapDispatchToProps = (dispatch: Function) => ({
  
})
  
const mapStateToProps = (state: any) => {
    const { uid, email } = state.SignIn;
    return {
      uid, email
    }
  }
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(ChatList);