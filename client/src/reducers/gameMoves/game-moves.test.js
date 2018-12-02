import { initialState, gameMoves } from '.';
import actionTypes from '../../constants/actionTypes';
import gameServer from '../../mockData/gameServer';

describe ('Game Moves Reducer', () => {
  it ('should return the initial state by default', () => {
    expect (gameMoves (undefined, {})).toEqual (initialState);
  });

  it ('should handle the ADD_A_MOVE action', () => {
    const addAMoveAction = {
      type: actionTypes.GAME_MOVES.ADD_A_MOVE,
      moveData: gameServer.gameMoves.moveData
    }

    const expectedState = {
      ...initialState,
      moves: [
        ...initialState.moves,
        gameServer.gameMoves.moveData
      ]
    };

    expect (gameMoves (undefined, addAMoveAction)).toEqual (expectedState);
  });
});