import { connect } from 'react-redux'
import BottomNavigation from './BottomNavigation';
import { showView } from './Action';

const mapDispatchToProps = (dispatch: Function) => ({
    showView: () => dispatch(showView()),

})

const mapStateToProps = (state: any) => {
  const { view } = state.Nav
  return {
    view
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BottomNavigation);