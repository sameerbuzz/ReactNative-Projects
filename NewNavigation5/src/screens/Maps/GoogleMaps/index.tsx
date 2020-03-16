import { connect } from 'react-redux'
import MyMap from './MyMap';
import { updateMarkers, updateSearch } from '../../../modules/Maps/Action';

const mapDispatchToProps = (dispatch: Function) => {
  return {
    updateMarkers: (data: string) => dispatch(updateMarkers(data)),
    updateSearch: (coordinates: any, place: string) => dispatch(updateSearch(coordinates, place))
  }
}

const mapStateToProps = (state: any) => {
  const { marker, recentSearch } = state.MyMaps
  return {
   marker, recentSearch
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MyMap);