import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';
import * as serviceWorker from './serviceWorker';
import {Provider} from 'react-redux';
import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import burgerBuilder from "./store/reducers/burgerBuilder";
import logger from "./store/logger";
import thunk from "redux-thunk";
import {BrowserRouter} from 'react-router-dom';

const rootReducers = combineReducers({
    builder: burgerBuilder
});
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
    rootReducers,
    // composeEnhancers(applyMiddleware(logger, thunk))
    composeEnhancers(applyMiddleware(thunk))
);

const app = (
    <BrowserRouter>
        <App/>
    </BrowserRouter>
);

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            {app}
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);

serviceWorker.unregister();
