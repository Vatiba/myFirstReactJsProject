import { connect } from 'react-redux'
import MyPostInfo from './MyPostInfo'
import { updateStatus } from '../../../Redux/profileReducer';

let mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile,
        status: state.profilePage.status,
    }
}

export default connect(mapStateToProps, { updateStatus })(MyPostInfo)