import actionTypes from "../../constants/actionTypes";


export const initialState = {
  availableGameCount: 0,
  fetchingAvailableGameCount: false,
  fetchAvailableGameCountFailed: false,
  fetchError: {}
}

export const gameData = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GAME_SERVER.FETCH_GAME_COUNT_START:
      return {
        ...state,
        fetchingAvailableGameCount: true
      };
    
    case actionTypes.GAME_SERVER.FETCH_GAME_COUNT_SUCCESS:
      return {
        ...state,
        fetchingAvailableGameCount: false,
        availableGameCount: action.gameCount.availableGameCount
      };
    case actionTypes.GAME_SERVER.FETCH_GAME_COUNT_FAILED:
      return {
        ...state,
        fetchingAvailableGameCount: false,
        fetchAvailableGameCountFailed: true,
        fetchError: action.error
      }
    default:
      return state;
  }
}
