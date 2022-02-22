import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom';
import s from './../Profile.module.css';
import { makeStyles, Box, Avatar, Grid, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  large: {
    width: theme.spacing(20),
    height: theme.spacing(20),
  },
}));

// React.memo help to make update of component if props of this component changed.
const MyPostInfo = React.memo((props) => {
    const classes = useStyles();

    let [editMode, setEditMode] = useState(false);
    let [status, setStatus] = useState(props.status);


    const toggleEditMode = () => {
        setEditMode(!editMode)
        if (editMode){
            props.updateStatus(status);
        }
    }

    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value);
    }

    useEffect(() => {
        setStatus(props.status);
    }, [props.status]);


    return (
        <Box p={1} >
            <Grid container >
                <Grid item container xs={12} sm={5} md={4} lg={3} justifyContent="center">
                    <Avatar className={classes.large} src={!props.profile.photos.large ? "https://imagine-lab.enpc.fr/wp-content/uploads/EuDMTYL9805PPka2gquKHS7qh.png" : props.profile.photos.large} />
                </Grid>
                <Grid item container direction="column" xs={12} sm={7} md={8} lg={9}  >
                    <Box paddingTop={{xs: 4, sm: 0}}>
                        <Typography variant="h4">{props.profile.fullName}</Typography>
                        <Box p={1} />
                        <Typography variant="h6">About me: {!props.profile.aboutMe ? 'No' : props.profile.aboutMe}</Typography>
                        <Typography variant="h6">Looking for job: {props.profile.lookingForAJob ? 'Yes' : 'No'}</Typography>
                        <Typography variant="h6">Looking for job description: {!props.profile.lookingForAJobDescription ? 'No' : props.profile.lookingForAJobDescription}</Typography>
                        <Typography variant="h6">Web Site: {!props.profile.contacts.website ? 'No' : <a href={`http://${props.profile.contacts.website}`}>{props.profile.contacts.website}</a>}</Typography>


                        <div>
                            <Typography>Status: 
                            {!editMode ?
                                <span onDoubleClick={() => { toggleEditMode() }}>
                                 {!props.status ? '-----' : props.status}
                                </span>
                                :
                                <input onChange={(e) => { onStatusChange(e) }}
                                    onBlur={() => { toggleEditMode() }}
                                    autoFocus={true} type="text"
                                    value={status} />
                            }
                            </Typography>
                            

                        </div>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    )

});


export default MyPostInfo;