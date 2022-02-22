import React from 'react';
import Messages from '../Message/Messages';
import { Field, reduxForm } from 'redux-form';
import s from './../Profile.module.css';
import { maxLengthCreater, required } from '../../../utilities/validators';
import { FormTextarea } from '../../common/FormInputs/FormInputs';

import { Box, Typography, Button } from '@material-ui/core';

let maxLengt15 = maxLengthCreater(15);

let PostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit} style={{ width: "100%" }}>
            <Field name="news" placeholder='New post' component={FormTextarea} validate={[required, maxLengt15]} />
            <Box py={1}>
                <Button variant="contained" color="primary" type="submit">Add post</Button>
            </Box>
        </form>
    )
}

PostForm = reduxForm({
    form: 'post'
})(PostForm)

const MyPost = (props) => {

    function submit(formData){
        props.addPost(formData.news);
    }


    return (
        // <div className={s.wrapper}>
        //     <h2>My posts</h2>
        //     <div className={s.myPost}>
        //         <PostForm onSubmit={submit} />
        //     </div>
        //     {
        //         props.profilePage.posts.map((message) => <Messages
        //             key={message.id}
        //             id={message.id}
        //             userMessage={message.userMessage}
        //             likeCount={message.likeCount}
        //             addLike={props.addLike} />)
        //     }
        // </div>
        <Box paddingY={3}>
            <Typography variant="h5">My posts</Typography>
            <Box paddingY={2}>
                <PostForm onSubmit={submit} />
            </Box>
            {
                props.profilePage.posts.map((message) => <Messages
                    key={message.id}
                    id={message.id}
                    userMessage={message.userMessage}
                    likeCount={message.likeCount}
                    incrementLike={props.incrementLike}
                    decrementLike={props.decrementLike} />)
            }
        </Box>
    )
}


export default MyPost;