import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';
import rootReducer from '../models/root.reducer';
import DevTools from '../devtools/index';
import callApi from '../middleware/callapi';

export default function configureStore(initialState) {
    const store = createStore(
        rootReducer,
        initialState,
        compose(
            applyMiddleware(thunk, callApi, createLogger()),
            DevTools.instrument()
        )
    );

    return store; //返回加强版的createStore
}