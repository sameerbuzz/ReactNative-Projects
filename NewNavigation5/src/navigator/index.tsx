import { connect } from 'react-redux'
import Navigator from './Navigator';

const mapStateToProps = (state: any) => {
  const { token } = state.SignIn;
  return {
    token
  }
}

export default connect(
  mapStateToProps,
)(Navigator);