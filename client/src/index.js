/**
 * @fileoverview App loader on with store.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import { configureStore } from './store';
import * as serviceWorker from './serviceWorker';
import ConnectedApp from './components/app/ConnectedApp';
import './styles/main.scss';

ReactDOM.render(
  <Provider store = {configureStore (process.env.NODE_ENV)}>
    <ConnectedApp />
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
