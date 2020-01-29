import { connect } from 'react-redux'
import Group from './Group';
import { } from '../../../modules/Chat/ChatList/Action';

const mapDispatchToProps = (dispatch: Function) => ({

})

const mapStateToProps = (state: any) => {
    const { user } = state.ChatList;
    return {
        user
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Group);