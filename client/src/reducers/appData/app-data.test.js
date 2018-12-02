import { appData,initialState } from '.';
import actionTypes from '../../constants/actionTypes';
import gameServer from '../../mockData/gameServer';

describe ('App Data Reducer', () => {
  it ('should return initial state by default', () => {
    expect (appData (undefined, {})).toEqual (initialState);
  });

  it ('should handle REGISTER_PLAYER_START action', () => {
    const startAction = {
      type: actionTypes.APP_DATA.REGISTER_PLAYER_START
    }

    const expectedState = {
      ...initialState,
      registeringPlayer: true
    }

    expect (appData (undefined, startAction)).toEqual (expectedState);

  });

  it ('should handle REGISTER_PLAYER_SUCCESS action', () => {
    const data = gameServer.appData.data;

    const successAction = {
      type: actionTypes.APP_DATA.REGISTER_PLAYER_SUCCESS,
      appData: data
    };

    const expectedState = {
      ...initialState,
      registeringPlayer: false,
      data: data,
      thisPlayerId: data.player.playerId,
      thisGameId: data.game.gameId,
      opponent: data.opponent

    }
    expect (appData (undefined, successAction)).toEqual (expectedState);
  });

  it ('should handle REGISTER_PLAYER_FAILED action', () => {
    const failedAction = {
      type: actionTypes.APP_DATA.REGISTER_PLAYER_FAILED,
      error: gameServer.appData.error
    };

    const expectedState = {
      ...initialState,
      registeringPlayer: false,
      registerPlayerFailed: true,
      registerError : gameServer.appData.error 
    };

    expect (appData (undefined, failedAction)).toEqual (expectedState);
  });
});