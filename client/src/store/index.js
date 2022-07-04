import{creaStore, applyMiddleware} from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension'
import thunk from 'redux-thunk';
import rootReducer from '../reducer';
export const store=creaStore(rootReducer,composeWithDevTools(applyMiddleware(thunk)))