import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { reducer } from './redux/user-reducer'
import thunk from 'redux-thunk'
import logger from './redux/logger'
import { applyMiddleware } from 'redux'
const store = createStore(reducer, applyMiddleware(thunk, logger))

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
