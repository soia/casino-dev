import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';

const loggerMiddleware = createLogger();

const store = createStore(
    applyMiddleware(
        thunkMiddleware,
        loggerMiddleware,
    ),
);

export default store;
