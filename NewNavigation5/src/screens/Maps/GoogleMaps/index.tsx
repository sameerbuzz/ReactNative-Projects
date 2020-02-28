import { connect } from 'react-redux'
import MyMap from './MyMap';
import { updateMarkers } from '../../../modules/Maps/Action';

const mapDispatchToProps = (dispatch: Function) => {
  return {
    updateMarkers: (data: string) => dispatch(updateMarkers(data))
  }
}

const mapStateToProps = (state: any) => {
  const { marker } = state.MyMaps
  return {
   marker
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MyMap);