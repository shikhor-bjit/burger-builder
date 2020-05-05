import './Auth.css';
import React, {Component} from 'react';
import Input from "../../components/UI/Input/Input";
import Button from "../../components/UI/Button/Button";

class Auth extends Component {
    state = {}

    render() {
        return (
            <div className={'Auth'}>
                <Input inputlable={'Email'}
                       placeholder={'Enter Your Email'}/>
                <Input inputlable={'password'}
                       placeholder={'Enter Your Password'}/>

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