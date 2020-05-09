import './App.css';
import React, {Component} from 'react';
import Layout from "../components/Layout/Layout";
import {AuthContext} from "../context/AuthContext/AuthContext";

class App extends Component {
    state = {
        token: localStorage.getItem('token'),
        updateToken: (token) => {
            this.setState({token: token});
        }
    }

    render = () => {
        return (
            <AuthContext.Provider value={
                {
                    token: this.state.token,
                    updateToken: this.state.updateToken
                }
            }>
                <div className="App">
                    <Layout/>
                </div>
            </AuthContext.Provider>
        )
    }
}

export default App;
