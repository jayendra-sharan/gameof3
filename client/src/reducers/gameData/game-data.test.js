import { gameData, initialState } from '.';
import actionTypes from '../../constants/actionTypes';

import gameServer from '../../mockData/gameServer';

describe ('Game Data Reducer', () => {

  it ('should return initial state by default', () => {
    expect (gameData (undefined, {})).toEqual (initialState);
  })

  it ('it should handle FETCH_COUNT_START action', () => {
    const startAction = {
      type: actionTypes.GAME_SERVER.FETCH_GAME_COUNT_START
    }

    const expectedState = {
      ...initialState,
      fetchingAvailableGameCount: true
    }

    expect (gameData (undefined, startAction)).toEqual (expectedState);
  });

  it ('it should handle FETCH_COUNT_SUCCESS action', () => {
    const successAction = {
      type: actionTypes.GAME_SERVER.FETCH_GAME_COUNT_SUCCESS,
      gameCount: gameServer.gameCount.data
    }

    const expectedState = {
      ...initialState,
      fetchingAvailableGameCount: false,
      availableGameCount: gameServer.gameCount.data.availableGameCount,
      availableGameCountManual: gameServer.gameCount.data.availableGameCountManual,
      availableGameCountAuto: gameServer.gameCount.data.availableGameCountAuto
    }

    expect (gameData (undefined, successAction)).toEqual (expectedState);
  });

  it ('it should handle FETCH_COUNT_FAILED action', () => {
    const failedAction = {
      type: actionTypes.GAME_SERVER.FETCH_GAME_COUNT_FAILED,
      error: gameServer.gameCount.error
    }

    const expectedState = {
      ...initialState,
      fetchingAvailableGameCount: false,
      fetchAvailableGameCountFailed: true,
      fetchError: gameServer.gameCount.error
    }
    expect (gameData (undefined, failedAction)).toEqual (expectedState);
  });
});