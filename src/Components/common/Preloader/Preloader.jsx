import React from 'react'
import preloader from '../../../assets/images/opentime_from_png_20fps.gif';
import styles from './Preloader.module.css';

import { Grid } from '@material-ui/core';


export default function Preloader() {
    return (
        <Grid container justifyContent="center" alignItems="center">
            <img src={preloader} width="500" alt="Preloader"/>
        </Grid>
    )
}
