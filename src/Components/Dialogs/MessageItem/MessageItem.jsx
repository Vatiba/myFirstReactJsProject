import React from 'react';
import s from './../Dialogs.module.css';

import { Box, Grid, Avatar, Typography, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  bgLightGreen: {
    backgroundColor: 'rgba(104, 179, 107, 0.3)',
    borderColor: 'rgba(104, 179, 107, 0.3)',
  },
}));

const MessageItem = (props) => {
    const classes = useStyles();

    const ownMessage = props.message.name == 'Me';

    return (
        <Grid container justifyContent={!ownMessage ? "flex-end" : "flex-start"}>
            <Box pb={3}>
                <Grid container alignItems="center" spacing={1}>
                    {
                        ownMessage ? 
                        <Grid item>
                            <Avatar alt="avatar" src="https://imagine-lab.enpc.fr/wp-content/uploads/EuDMTYL9805PPka2gquKHS7qh.png" />
                        </Grid>
                        :
                        null
                    }
                    <Grid item>
                        <Box p={1} 
                        className={ownMessage ? classes.bgLightGreen : ''}
                        border={2} borderRadius={12}
                        borderColor={!ownMessage ? 'grey.500' : ''}>
                            <Typography variant="body2">{props.message.message}</Typography>
                        </Box>
                    </Grid>

                    {
                        ownMessage ? 
                        null
                        :
                        <Grid item>
                            <Avatar alt="avatar" src="https://imagine-lab.enpc.fr/wp-content/uploads/EuDMTYL9805PPka2gquKHS7qh.png" />
                        </Grid>
                    }
                </Grid>
            </Box>
        </Grid>
    )
}

export default MessageItem;