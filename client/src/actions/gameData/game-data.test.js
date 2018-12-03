import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import moxios from 'moxios';
import actionTypes from '../../constants/actionTypes';
import gameServer from '../../mockData/gameServer';
import { gameDataActions } from '.';

const middlewares = [ thunk ]
const mockStore = configureMockStore (middlewares);

describe ('Game Data', () => {
  let store;
  beforeEach (() => {
    moxios.install ();
    store = mockStore ({ gameData: {}});
  });

  afterEach (() => {
    moxios.uninstall ();
    store = null;
  });

  it ('should create FETCH_GAME_COUNT_SUCCESS action after successful api call', () => {
    moxios.wait (() => {
      const request = moxios.requests.mostRecent ();
      request.respondWith ({
        status: 200,
        response: gameServer.gameCount
      });
    });

    const expectedActions = [
      { type: actionTypes.GAME_SERVER.FETCH_GAME_COUNT_START },
      { type: actionTypes.GAME_SERVER.FETCH_GAME_COUNT_SUCCESS, gameCount: gameServer.gameCount.data }
    ];
    
    return store.dispatch (gameDataActions.fetchGameCount ()).then (() => {
      expect (store.getActions ()).toEqual (expectedActions);
    });
  });
})