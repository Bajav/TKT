import {compose,applyMiddleware, createStore} from 'redux';
import {logger} from 'redux-logger';
import { rootReducer } from './rootreducer.store';

const middleWares = [logger];
const composedEnhances = compose(applyMiddleware(...middleWares));
export const store = createStore(rootReducer,undefined,composedEnhances);