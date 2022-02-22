import React from 'react';
import PropTypes from 'prop-types';

import { connect } from "react-redux";
import { initializeApp } from "../../../Redux/appReducer";

import { Box, Grid, Button, makeStyles } from '@material-ui/core';
import PermScanWifiOutlinedIcon from '@material-ui/icons/PermScanWifiOutlined';


const useStyles = makeStyles((theme) => ({
  large: {
    width: theme.spacing(15),
    height: theme.spacing(15),
  },
}));

const NoInternetConnection = (props) => {
    const classes = useStyles();
    const argument = props.args ? props.args : [];
    return (
        <Grid container direction="column" alignItems="center" justifyContent="center">
            <PermScanWifiOutlinedIcon color="primary" className={`${classes.large} ${classes.mainColor}`} />
            <Box pt={2}>
                <Button variant="contained" color="primary" onClick={ () => {props.reset(...argument)} } >Reset</Button>
            </Box>
        </Grid>
    );
};

NoInternetConnection.propTypes = {
    reset: PropTypes.func.isRequired,
}

export default NoInternetConnection;