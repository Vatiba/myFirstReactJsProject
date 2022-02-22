import { connect } from 'react-redux';
import { compose } from 'redux';
import { addMessageCreater } from '../../Redux/dialogReducer';
import withAuthRedirect from '../HOC/withAuthRedirect';
import { withRouter } from 'react-router-dom';
import Dialogs from './Dialogs';

const mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addMessage: (newMessage, dialogId) => {
            dispatch(addMessageCreater(newMessage, dialogId));
        },
    }
}


export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect,
    withRouter,
)(Dialogs)