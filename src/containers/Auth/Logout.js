import './Auth.css';
import React, {useContext, useEffect} from 'react';
import {AuthContext} from "../../context/AuthContext/AuthContext";
import {Redirect} from "react-router";

const Logout = () => {
    const {updateToken} = useContext(AuthContext);

    useEffect(() => {
        updateToken(null);
        localStorage.removeItem('token');
    }, []);

    return (
        <Redirect to={'/burger-builder/authenticate'}/>
    )
}

Logout.propTypes = {};

export default Logout;