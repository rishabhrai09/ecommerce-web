import {createStore,applyMiddleware} from 'redux';
import {persistStore} from 'redux-persist'
import logger from 'redux-logger';
import  createSagaMiddleware from 'redux-saga'

import rootReducer from './root-reducer';
import rootSaga from './root-saga'
const sagaMiddlewares = createSagaMiddleware();
 const middleware = [logger,sagaMiddlewares];
//  if(process.env.NODE_ENV ===`developement`){
    
//      middlewares.push(logger)
//  }

 export const store =createStore(rootReducer,applyMiddleware(...middleware));
 sagaMiddlewares.run(rootSaga)
 
 export  const persistor = persistStore(store);
export default {store,persistor}