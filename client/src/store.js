import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { gameData } from './reducers/gameData';
import { appData } from './reducers/appData';
import { gameMoves } from "./reducers/gameMoves";

const rootReducers = combineReducers ({
  gameData,
  appData,
  gameMoves
});

const isDevelopment = (env) => {
  return env === 'development';
}

export const configureStore = (env) => {
  const middlewares = [ thunk ]
  if (isDevelopment (env)) {
    middlewares.push (createLogger ());
  }

  return createStore (
    rootReducers,
    applyMiddleware (...middlewares)
  )
};
