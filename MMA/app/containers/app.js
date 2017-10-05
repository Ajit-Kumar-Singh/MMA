import React, { Component } from 'react';
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import {createLogger} from 'redux-logger';
import { Provider } from 'react-redux';
import {navReducer} from './MeetMyAge'
import reducer from '../reducers';
import MeetMyAge from './MeetMyAge';

const loggerMiddleware = createLogger();

const createStoreWithMiddleware = applyMiddleware(
  thunkMiddleware,
  loggerMiddleware
)(createStore);

const store = createStoreWithMiddleware(reducer);

export default class App extends Component {
    render() {
        return (
            <Provider store={store}>
               <MeetMyAge/>
            </Provider>
        );
    }
}
