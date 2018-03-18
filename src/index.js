import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import ReduxPromise from 'redux-promise';


import App from './components/app';
import reducers from './reducers';

//const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore); //I commented this to use devtools

ReactDOM.render(
  <Provider store={createStore(reducers, composeWithDevTools(applyMiddleware(ReduxPromise)))}>
    <App />
  </Provider>
  , document.querySelector('.container'));
