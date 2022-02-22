import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { maxLengthCreater, required } from '../../utilities/validators';
import { FormInput, FormCheckbox } from '../common/FormInputs/FormInputs';
import styles from '../common/FormInputs/FormInputs.module.css'
import { Box, Typography, Grid, Button } from '@material-ui/core';

let maxLength5 = maxLengthCreater(5);

const FormLogin = (props) => {
    return (
        <Box paddingLeft={{ md: 3, }}>

            <Typography variant="h4" gutterBottom>Login</Typography>

                
            <form onSubmit={props.handleSubmit}>
                <Box pb={2}>
                    <Field type="text" placeholder="Login" name="email" component={FormInput} validate={[required, maxLength5]} />
                </Box>
                <Box pb={2}>
                    <Field type="password" placeholder="Password" name="password" validate={[required]} component={FormInput} />
                </Box>
                <Box pb={2}>
                    <Field type="checkbox" name="rememberMe" component={FormCheckbox} />
                    <Typography display="inline">Remember me</Typography>
                </Box>
                <Box>
                    <Typography className={styles.textRed}>{props.error}</Typography>
                </Box>
                <Button variant="contained" color="primary" type="submit">Login</Button>
            </form>
            

        </Box>
    )
}


const LoginForm = reduxForm({
    form: 'login'
})(FormLogin);

export default LoginForm;