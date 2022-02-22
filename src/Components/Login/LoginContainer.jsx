import React, { Component } from 'react'
import { connect } from 'react-redux';
import LoginForm from './LoginForm'
import { login } from '../../Redux/authReducer'
import { Redirect } from 'react-router-dom';

class Login extends React.Component {
    submit = (formData) => {
        this.props.login(formData.email, formData.password, formData.rememberMe);
    }
    render() {
        if(this.props.isAuth) {
            return <Redirect to="/profile" />
        }
        return (
            <LoginForm onSubmit={this.submit} />
        )
    }
}
const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth
    }
}

export default connect(mapStateToProps, { login })(Login);