import actionTypes from "../../constants/actionTypes";

export const initialState = {
  moves: [],
  winner: ''
};

export const gameMoves = (state = initialState, action) => {
  let winner = '';
  switch (action.type) {
    case actionTypes.GAME_MOVES.ADD_A_MOVE:
      return {
        ...state,
        moves: [
          ...state.moves,
          action.moveData
        ]
      };
    case actionTypes.GAME_MOVES.SOCKET_M_EMIT_MOVE:
      if (action.moveData.playWith === 1) {
        winner = action.moveData.playerId
      }
      return {
        ...state,
        moves: updateOrAddInArray (state.moves, action.moveData),
        winner
      };
    default:
      return state;
  }
}

const updateOrAddInArray = (list, item) => {
  let matchFound = false;
  list = list.map (move => {
    if (move.moveId === item.moveId) {
      matchFound = true;
      move = {
        ...move,
        moveId: item.newMoveId
      };
    }
    return move;
  });

  if (!matchFound) {
    list.push (item);
  }
  return list;
}
