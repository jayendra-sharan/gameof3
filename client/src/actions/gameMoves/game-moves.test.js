import configureMockStore from 'redux-mock-store';
import MockedSocket from 'socket.io-mock';
import actionTypes from '../../constants/actionTypes';
import { gameMovesActions } from '.';
import gameServer from '../../mockData/gameServer';

const mockStore = configureMockStore ();

describe ('Game Moves', () => {
  let store;
  beforeEach (() => {
    store = mockStore ({ gameMoves: []});
  });

  afterEach (() => {
    store = null;
  });

  it ('should create ADD_A_MOVE action on successful player registeration', () => {
    const expectedActions = {
        type: actionTypes.GAME_MOVES.ADD_A_MOVE,
        moveData: gameServer.gameMoves.moveData
      };

    expect (gameMovesActions.makeAMove (gameServer.gameMoves.moveData)).toEqual (expectedActions);
  });
});

