const actionTypes = {  
  'GAME_SERVER': {
    'FETCH_GAME_COUNT_START': 'FETCH_GAME_COUNT_START',
    'FETCH_GAME_COUNT_SUCCESS': 'FETCH_GAME_COUNT_SUCCESS',
    'FETCH_GAME_COUNT_FAILED': 'FETCH_GAME_COUNT_FAILED'
  },
  'APP_DATA': {
    'REGISTER_PLAYER_START': 'REGISTER_PLAYER_START',
    'REGISTER_PLAYER_SUCCESS': 'REGISTER_PLAYER_SUCCESS',
    'REGISTER_PLAYER_FAILED': 'REGISTER_PLAYER_FAILED'
  },
  'GAME_MOVES': {
    'ADD_A_MOVE': 'ADD_A_MOVE'
  }
}

export default actionTypes;
