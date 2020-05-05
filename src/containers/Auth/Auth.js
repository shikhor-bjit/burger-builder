import './Auth.css';
import React, {Component} from 'react';
import Input from "../../components/UI/Input/Input";
import Button from "../../components/UI/Button/Button";
import Aux from "../../components/hoc/Aux";

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
                value: ''
            },
            password: {
                label: 'Password',
                elementType: 'input',
                elementConfig: {
                    type: 'password',
                    placeholder: 'Enter Your Password'
                },
                value: ''
            }
        }
    }

    onInputFieldValueChangeHandler = (event, fieldName) => {
        const value = event.target.value;
        const loginForm = {...this.state.loginForm};

        const updatedField = {...loginForm[fieldName]};
        updatedField.value = value;

        this.setState({
            ...this.state,
            loginForm: {
                ...loginForm,
                [fieldName]: {
                    ...updatedField
                }
            }
        });

        console.log(this.state.loginForm)
    }

    render() {
        const loginForm = {...this.state.loginForm};
        const inputFields = (
            <Aux>
                {
                    Object.keys(this.state.loginForm)
                        .map(
                            (name, i) => {
                                return (
                                    <Input
                                        key={name + i}
                                        type={loginForm[name].elementConfig.type}
                                        inputlable={loginForm[name].label ? loginForm[name].label : name}
                                        name={name}
                                        value={loginForm[name].value}
                                        onChange={(event) => this.onInputFieldValueChangeHandler(event, name)}
                                        placeholder={loginForm[name].elementConfig.placeholder}/>
                                );
                            }
                        )
                }
            </Aux>
        );
        return (
            <div className={'Auth'}>
                {inputFields}
                <div style={{display: "flex", justifyContent: "center"}}>
                    <Button type={'Danger'}>CANCEL</Button>
                    <Button type={'Success'}>SUBMIT</Button>
                </div>
            </div>
        );
    }
}

Auth.propTypes = {};

export default Auth;