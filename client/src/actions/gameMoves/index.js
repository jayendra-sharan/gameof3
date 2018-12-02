import actionTypes from "../../constants/actionTypes";

export const gameMovesActions = {
  makeAMove (payload) {
    return {
      type: actionTypes.GAME_MOVES.ADD_A_MOVE,
      moveData: payload
    }
  }
};
