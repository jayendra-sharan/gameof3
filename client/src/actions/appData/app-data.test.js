import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import moxios from 'moxios';
import actionTypes from '../../constants/actionTypes';
import gameServer from '../../mockData/gameServer';
import { appDataActions } from '.';

const middlewares = [ thunk ]
const mockStore = configureMockStore (middlewares);

describe ('App Data', () => {
  let store;

  beforeEach (() => {
    store = mockStore ({ appData: {}});
    moxios.install ();
  });

  afterEach (() => {
    store = null;
    moxios.uninstall ();
  });

  it ('should create REGISTER_PLAYER_SUCCESS action after successfully submitting the form', () => {
    moxios.wait (() => {
      const request = moxios.requests.mostRecent ();
      request.respondWith ({
        status: 200,
        response: gameServer.appData
      });
    });

    const expectedActions = [
      { type: actionTypes.APP_DATA.REGISTER_PLAYER_START },
      { type: actionTypes.APP_DATA.REGISTER_PLAYER_SUCCESS, appData: gameServer.appData.data },
      { type: actionTypes.GAME_MOVES.ADD_A_MOVE, moveData: gameServer.gameMoves.moveData }
    ];

    return store.dispatch (appDataActions.registerPlayer ()).then (() => {
      expect (store.getActions ()).toEqual (expectedActions);
    });
  });
})