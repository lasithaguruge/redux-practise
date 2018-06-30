import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import userReducer from './reducers/userReducer';

const store = createStore(userReducer, [], applyMiddleware(logger))

export default store;