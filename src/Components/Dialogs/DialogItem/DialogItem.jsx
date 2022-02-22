import React from 'react';
import s from './../Dialogs.module.css';
import { NavLink } from 'react-router-dom';

import { makeStyles, Box, Avatar, Grid, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  small: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
}));

const DialogItem = (props) => {
    const classes = useStyles();
    return (
        // <div className={s.dialog}>
        //     <NavLink to={"/dialogs/" + props.id}>{props.name}</NavLink>
        // </div>
        <Box pb={3}>
            <NavLink to={"/messages/" + props.id} style={{color: 'inherit'}}>
                <Grid container alignItems="center" spacing={1}>
                    <Grid item>
                        <Avatar component="span"  src={!props.img ? 'https://imagine-lab.enpc.fr/wp-content/uploads/EuDMTYL9805PPka2gquKHS7qh.png' : props.img} />
                    </Grid>
                    <Grid item>
                        <Typography variant="body2" display="inline">{props.name}</Typography>
                    </Grid>
                </Grid>
            </NavLink>
        </Box>
    )
}

export default DialogItem;