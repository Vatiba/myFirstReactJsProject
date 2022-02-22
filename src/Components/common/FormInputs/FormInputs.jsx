import React from 'react'
import styles from './FormInputs.module.css';
import { TextField, TextareaAutosize, Checkbox, Typography, Box } from '@material-ui/core';


export function FormTextarea({input, meta, placeholder}) {
    let hasError = Boolean(meta.touched && meta.error);
    return (
        <TextField
            {...input}
            label={placeholder}
            multiline
            rows={4}
            variant="outlined"
            helperText={hasError ? meta.error : null}
            error={hasError}
            style={{width: '100%'}}
        />
    )
}

export function FormInput({input, meta, placeholder, type}) {
    let hasError = Boolean(meta.touched && meta.error);
    return (
        <TextField
            {...input}
            type={type}
            label={placeholder}
            variant="outlined"
            helperText={hasError ? meta.error : null}
            error={hasError}
            
        />
    )
}

export const FormCheckbox = ({input, meta, type, ...props}) => {
    let hasError = meta.touched && meta.error;
    return (
        <>
            <Checkbox
                {...input}
                color="primary"
                inputProps={{ 'aria-label': 'secondary checkbox' }}
                style={{display: 'inline-block'}}
            />
            {hasError ?
            <Typography variant='body1' color="error" >{meta.error}</Typography>
            :
            undefined
            }
        </>
    )
}