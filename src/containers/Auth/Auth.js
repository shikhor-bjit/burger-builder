import './Auth.css';
import React, {Component} from 'react';
import Aux from "../../components/hoc/Aux";
import {Field, Form, Formik} from "formik";
import Button from "../../components/UI/Button/Button";

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
                initialValue: ''
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
                initialValue: ''
            }
        }
    }

    onSubmit = values => console.log(values);

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
        const initialValues = {};
        const loginForm = this.state.loginForm;
        Object.keys(loginForm)
            .forEach(key => initialValues[key] = loginForm[key].initialValue);

        return (
            <div className={'Auth'}>
                <Formik
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
                </Formik>
            </div>
        );
    }
}

Auth.propTypes = {};

export default Auth;