import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'semantic-ui-css/semantic.min.css';
import App from './App';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';

const userReducer = (state = [], action) => {
    switch (action.type) {
        case 'ADD':
            return [
                ...state,
                action.payload
            ]
        default:
            return state;
    }
}

const store = createStore(userReducer, [], applyMiddleware(logger))

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, document.getElementById('root'));
