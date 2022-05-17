// Importe o método applyMiddleware
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
// Importe o redux-thunk
import thunk from 'redux-thunk';
import gallery from '../reducers/gallery';

// Aplique o middleware
const store = createStore(gallery, composeWithDevTools(applyMiddleware(thunk)));

export default store;
