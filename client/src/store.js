import { combineReducers, createStore, applyMiddleware } from 'redux';
import createSocketMiddleware from 'redux-socket.io';
import thunk from 'redux-thunk';
import io from 'socket.io-client';

import { createLogger } from 'redux-logger';
import { gameData } from './reducers/gameData';
import { appData } from './reducers/appData';
import { gameMoves } from "./reducers/gameMoves";
import API from './constants/api';

const rootReducers = combineReducers ({
  gameData,
  appData,
  gameMoves
});

const isDevelopment = (env) => {
  return env === 'development';
}

const createSocketConnection = (env) => {
  const url = isDevelopment (env) ? API.SOCKET_API : window.location.origin;
  return io (url);
} 

const getSocketMiddleware = (socket) => createSocketMiddleware (socket, 'SOCKET/');

export const configureStore = (env) => {
  const socket = createSocketConnection (env);
  const middlewares = [ thunk, getSocketMiddleware (socket) ];

  if (isDevelopment (env)) {
    middlewares.push (createLogger ());
  }

  return createStore (
    rootReducers,
    applyMiddleware (...middlewares)
  )
};
