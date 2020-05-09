import React, {useEffect} from "react";
import {Redirect, Route} from "react-router-dom";
import {useAuth} from "../../context/AuthContext/AuthContext";

function PrivateRoute({component: Component, ...rest}) {
    const {token, updateToken} = useAuth();

    useEffect(() => {
        updateToken(localStorage.getItem('token'));
    }, []);

    return (
        <Route {...rest} render={
            props => {
                return token
                    ? (<Component {...props} />)
                    : (<Redirect
                            to={{
                                pathname: "/burger-builder/authenticate",
                                state: {referer: props.location}
                            }}/>
                    )
            }
        }
        />
    );
}

export default PrivateRoute;