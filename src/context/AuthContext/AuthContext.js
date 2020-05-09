import React, {useContext} from "react";

export const AuthContext = React
    .createContext({token: '', updateToken: null});

export const useAuth = () => useContext(AuthContext);