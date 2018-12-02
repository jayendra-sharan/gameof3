import { combineReducers, createStore, applyMiddleware } from 'redux';
import createSocketMiddleware from 'redux-socket.io';
import thunk from 'redux-thunk';
import io from 'socket.io-client';

import { createLogger } from 'redux-logger';
import { gameData } from './reducers/gameData';
import { appData } from './reducers/appData';
import { gameMoves } from "./reducers/gameMoves";
import API from './constants/api';

const socket = io (API.SOCKET_API);
const socketMiddleware = createSocketMiddleware (socket, 'SOCKET/');

const rootReducers = combineReducers ({
  gameData,
  appData,
  gameMoves
});

const isDevelopment = (env) => {
  return env === 'development';
}

export const configureStore = (env) => {
  const middlewares = [ thunk, socketMiddleware ];
  if (isDevelopment (env)) {
    middlewares.push (createLogger ());
  }

  return createStore (
    rootReducers,
    applyMiddleware (...middlewares)
  )
};
