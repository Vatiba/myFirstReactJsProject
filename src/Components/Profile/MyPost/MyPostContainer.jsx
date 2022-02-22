import { connect } from 'react-redux';
import { reset } from 'redux-form';

import { incrementLikeCreater, decrementLikeCreater, addPostCreater } from './../../../Redux/profileReducer';
import MyPost from './MyPost';

const mapStateToProps = (state) => {
    return {
        profilePage: state.profilePage,
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        addPost: (newPost) => {
            dispatch(reset('post'))
            dispatch(addPostCreater(newPost));
        },
        incrementLike: (id) => {
            dispatch(incrementLikeCreater(id));
        },
        decrementLike: (id) => {
            dispatch(decrementLikeCreater(id));
        },
    }
}




export default connect(mapStateToProps, mapDispatchToProps)(MyPost);