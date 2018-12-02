import actionTypes from "../../constants/actionTypes";
import axios from "axios";
import API from "../../constants/api";
import { gameMovesActions } from '../gameMoves';
import GOT_CONST from "../../constants/gotConstants";

// action creator
const registerPlayerStart = () => ({
  type: actionTypes.APP_DATA.REGISTER_PLAYER_START
});

// action cretor
const registerPlayerSuccess = (response) => ({
  type:actionTypes.APP_DATA.REGISTER_PLAYER_SUCCESS,
  appData: response.data
});

const registerPlayerFailed = (error) => ({
  type: actionTypes.APP_DATA.REGISTER_PLAYER_FAILED,
  error: error
});

const getMoveData = (response, gameMode) => {
  const { game, player } = response.data;
  let { playerId } = player;

  // in join mode, the first had will be by the game creator.
  if (gameMode === GOT_CONST.GAME_MODE.JOIN) {
    playerId = game.participants[0];
  }

  const moveData = {
    'moveId': player.playerId.replace ('P-', 'M-'),
    'gameId': game.gameId,
    'playerId': playerId,
    'input': parseInt (game.startGameWith),
    'isStartNumber': !!game.startGameWith,
    'playWith': parseInt (game.startGameWith)
  }
  return moveData;
}

export const appDataActions = {
  registerPlayer (payload) {
    return (dispatch) => {
      dispatch (registerPlayerStart ());

      return axios ({
        url: API.REGISTER_PLAYER,
        data: payload,
        method: 'post'
      }).then (response => {
        dispatch (registerPlayerSuccess (response.data));
        dispatch (gameMovesActions.makeAMove (getMoveData (response.data, payload.gameMode)));
      }).catch (error => {
        dispatch (registerPlayerFailed (error.response));
      });
    }
  }
}