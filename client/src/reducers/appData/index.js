/**
 * @fileoverview Reducer: To handle app data actions.
 * Contains information about current player and current game.
 */

import actionTypes from "../../constants/actionTypes";

export const initialState = {
  registeringPlayer: false,
  thisPlayerId: '',
  thisGameId: '',
  data: {},
  registerError: {},
  registerPlayerFailed: false
};

export const appData = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.APP_DATA.REGISTER_PLAYER_START:
     return {
       ...state,
       registeringPlayer: true
     };

    case actionTypes.APP_DATA.REGISTER_PLAYER_SUCCESS:
      return {
        ...state,
        registeringPlayer: false,
        thisPlayerId: action.appData.player.playerId,
        thisGameId: action.appData.game.gameId,
        data: action.appData,
        opponent: action.appData.opponent
      };
    
    case actionTypes.APP_DATA.REGISTER_PLAYER_FAILED:
      return {
        ...state,
        registerError: action.error,
        registerPlayerFailed: true,
        registeringPlayer: false,
      };
    default:
      return state;
  }
};
