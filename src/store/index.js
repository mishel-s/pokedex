import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducers from '../reducers';
import { composeWithDevTools } from 'redux-devtools-extension';

export default function configureStore() {
    return createStore(rootReducers, composeWithDevTools(
        applyMiddleware(thunk)
    ));
}