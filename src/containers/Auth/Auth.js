import './Auth.css';
import React, {Component} from 'react';
import Aux from "../../components/hoc/Aux";
import {Field, Form, Formik} from "formik";
import Button from "../../components/UI/Button/Button";
import axios from 'axios';
import Spinner from "../../components/UI/Spinner/Spinner";
import {Redirect} from "react-router";
import {AuthContext} from "../../context/AuthContext/AuthContext";

class Auth extends Component {
    state = {
        loginForm: {
            email: {
                label: 'Email',
                elementType: 'input',
                elementConfig: {
                    type: 'email',
                    placeholder: 'Enter Your Email'
                },
                validationHandler: value => {
                    if (value.trim().length === 0)
                        return '* Email Required';
                },
                initialValue: 'user@bb.com'
            },
            password: {
                label: 'Password',
                elementType: 'input',
                elementConfig: {
                    type: 'password',
                    placeholder: 'Enter Your Password'
                },
                validationHandler: value => {
                    if (value.trim().length === 0)
                        return '* Password Required';
                },
                initialValue: 'awesomeuser'
            }
        },
        loading: false,
        redirect: false
    }

    static contextType = AuthContext;

    onSubmit = values => {
        this.setState({loading: true});
        const url = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBpPcBC_CkREoXA5lM4yd1qrek9i1rAU8U';

        values["returnSecureToken"] = true;//~ this line is a must. this line cost about 2 hours
        //~ to figure out, why my requests got unauthorized response though i was using returned token
        axios.post(url, values)
            .then(response => {
                this.context.updateToken(response.data['idToken']);
                localStorage.setItem('token', response.data['idToken']);
                this.setState({loading: false, redirect: true});
            })
            .catch(error => {
                this.setState({loading: false, redirect: false});
            })
    }

    prepareFormikFields(errors, touched) {
        const loginForm = this.state.loginForm;
        return Object.keys(loginForm)
            .map((name, i) => {
                    return (
                        <Aux key={name + i}>
                            <p>{loginForm[name].label ? loginForm[name].label : name}</p>
                            <Field name={name}
                                   type={loginForm[name].elementConfig.type}
                                   placeholder={loginForm[name].elementConfig.placeholder}
                                   validate={loginForm[name].validationHandler}/>
                            {
                                errors[name] && touched[name]
                                    ? <div className={'FieldError'}>{errors[name]}</div>
                                    : null
                            }
                        </Aux>
                    );
                }
            )
    }

    render() {
        let redirectTo = (this.props.location.state && this.props.location.state.referer) || '/burger-builder';
        const initialValues = {};
        const loginForm = this.state.loginForm;
        Object.keys(loginForm)
            .forEach(key => initialValues[key] = loginForm[key].initialValue);

        const content = this.state.redirect
            ? <Redirect to={redirectTo}/>
            : this.state.loading
                ? <Spinner/>
                : <Formik
                    initialValues={initialValues}
                    onSubmit={this.onSubmit}>
                    {({errors, touched}) => (
                        <Form>
                            {this.prepareFormikFields(errors, touched)}
                            <div style={{display: "flex", justifyContent: "center"}}>
                                <Button type={'Success'}>LOGIN</Button>
                            </div>
                        </Form>
                    )}
                </Formik>;

        return (<div className={'Auth'}> {content} </div>);
    }
}

Auth.propTypes = {};

export default Auth;