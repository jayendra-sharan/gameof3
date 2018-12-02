import actionTypes from "../../constants/actionTypes";

export const initialState = {
  moves: []
};

export const gameMoves = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GAME_MOVES.ADD_A_MOVE:
      return {
        ...state,
        moves: [
          ...state.moves,
          action.moveData
        ]
      };
    default:
      return state;
  }
}
