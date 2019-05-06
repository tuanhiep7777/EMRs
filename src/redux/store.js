import { createStore, applyMiddleware } from 'redux';
import reducer from './reducers/index';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import thunk from 'redux-thunk';

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));
export default store;