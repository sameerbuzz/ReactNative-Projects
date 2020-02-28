import { connect } from 'react-redux'
import Navigator from './Navigator';

const mapStateToProps = (state: any) => {
  const { token } = state.SignIn;
  const { modalVisible } = state.MyMaps
  return {
    token, modalVisible
  }
}

export default connect(
  mapStateToProps,
)(Navigator);