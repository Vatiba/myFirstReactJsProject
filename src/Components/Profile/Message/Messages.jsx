import React, { useState } from 'react';
import s from './Messages.module.css';

import { Box, Grid, IconButton, Tooltip, Typography } from '@material-ui/core';

import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import ThumbUpAltOutlinedIcon from '@material-ui/icons/ThumbUpAltOutlined';


const LikeButton = ({click, id, incrementLike, decrementLike}) => {
    return (
        <IconButton onClick={() => {click ? decrementLike(id) : incrementLike(id)}}>
            {
                click ?
                <ThumbUpAltIcon color="primary" />
                :
                <ThumbUpAltOutlinedIcon color="primary" />
            }
        </IconButton>
    )
}


export default function Messages(props) {

    let [click, setClicked] = useState(false);

    const incrementLike = (id) => {
        setClicked(true);
        props.incrementLike(id);
    }


    const decrementLike = (id) => {
        setClicked(false);
        props.decrementLike(id)
    }

    return (
        // <div className={s.usersAvatar}>
        //     <img className={s.imgAvatar} src="https://imagine-lab.enpc.fr/wp-content/uploads/EuDMTYL9805PPka2gquKHS7qh.png" alt="userAvatar" />
        //     <div>
        //         {props.userMessage}
        //     </div>
        //     <div className={s.imgLike}>
        //         <img onClick={() => {addLike(props.id)}} src="https://cdn.iconscout.com/icon/free/png-256/like-button-1703233-1447042.png" alt="like" />
        //         <div>{props.likeCount}</div>
        //     </div>
        // </div>
        <Box paddingY={2}>
            <Grid container alignItems="center">
                <Grid item>
                    <img className={s.imgAvatar} src="https://imagine-lab.enpc.fr/wp-content/uploads/EuDMTYL9805PPka2gquKHS7qh.png" alt="userAvatar" />
                </Grid>
                <Grid item>{props.userMessage}</Grid>
                <Grid item>
                    <Tooltip title="Like">
                        <Box>
                            <LikeButton click={click} incrementLike={incrementLike} decrementLike={decrementLike} id={props.id}/>
                        </Box>
                    </Tooltip>
                </Grid>
                <Grid item>
                    <Typography>{props.likeCount}</Typography>
                </Grid>
            </Grid>
        </Box>
    )
}
