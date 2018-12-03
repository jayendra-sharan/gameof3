/**
 * @fileoverview Actions used in the application.
 */
const actionTypes = {  
  'GAME_SERVER': {
    'FETCH_GAME_COUNT_START': 'FETCH_GAME_COUNT_START',
    'FETCH_GAME_COUNT_SUCCESS': 'FETCH_GAME_COUNT_SUCCESS',
    'FETCH_GAME_COUNT_FAILED': 'FETCH_GAME_COUNT_FAILED',
    'SOCKET_EMIT_GAME_COUNT': 'SOCKET/EMIT_GAME_COUNT'
  },
  'APP_DATA': {
    'REGISTER_PLAYER_START': 'REGISTER_PLAYER_START',
    'REGISTER_PLAYER_SUCCESS': 'REGISTER_PLAYER_SUCCESS',
    'REGISTER_PLAYER_FAILED': 'REGISTER_PLAYER_FAILED'
  },
  'GAME_MOVES': {
    'ADD_A_MOVE': 'ADD_A_MOVE',
    'SOCKET_EMIT_MOVE': 'SOCKET/EMIT_MOVE',
    'SOCKET_M_EMIT_MOVE': 'SOCKET/M_EMIT_MOVE'
  }
}

export default actionTypes;
