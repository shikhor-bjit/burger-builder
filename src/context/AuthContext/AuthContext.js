import React, {useContext} from "react";

export const AuthContext = React
    .createContext({token: '', updateToken: () => {}});

export const useAuth = () => useContext(AuthContext);