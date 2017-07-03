import React from 'react';
import ReactDOM from 'react-dom';
import { Router, hashHistory } from 'react-router';
import routes from './config/routes';

import jquery from 'jquery';
import metismenu from 'metismenu';
import bootstrap from 'bootstrap';

import './../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './../node_modules/font-awesome/css/font-awesome.css'
import './../node_modules/animate.css/animate.min.css'
import './../public/styles/style.css'

import promiseMiddleware from 'redux-promise-middleware';

import thunk  from 'redux-thunk'
import reducer from './reducers'
import { Provider } from 'react-redux';
import { applyMiddleware, createStore, compose } from 'redux';

const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      shouldHotReload: true,
    }) : compose;

const middleware = [thunk,promiseMiddleware()]
const enhancer  = composeEnhancers(applyMiddleware(...middleware))
const store = createStore(reducer, enhancer);
const mountApp = document.getElementById('root');


ReactDOM.render(
        <Provider store={store}>
            <Router history={hashHistory}>
                {routes}
            </Router> 
        </Provider>,
    mountApp
);
