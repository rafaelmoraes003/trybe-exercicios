//importe o método applyMiddleware 
import { applyMiddleware, createStore } from 'redux';
//importe o redux-thunk
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducer from '../reducers';

//aplique o middleware
const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;
