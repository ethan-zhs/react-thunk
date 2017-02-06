import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../models/root.reducer';
import callApi from '../middleware/callapi';

export default function configureStore(initialState) {
    const store = createStore(
        rootReducer,
        initialState,
        compose(
            applyMiddleware(thunk, callApi)
        )
    );

    return store; //返回加强版的createStore
}