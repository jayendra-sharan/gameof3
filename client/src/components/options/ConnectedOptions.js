/**
 * @fileoverview Creacts connected component, connects Options.
 */
import { connect } from 'react-redux';
import Options from '.';
import { gameMovesActions } from '../../actions/gameMoves';

/**
 * @description if this player is same as last move maker
 * @param {Object} state 
 * @returns {Boolean}
 */
const shouldEnableMove = (thisPlayerId, moves) => (
  thisPlayerId !== moves[moves.length -1].playerId 
)

/**
 * @description extracts the value for play with by taking the
 * playWith property of last move.
 * @param {Array} moves list of moves
 * @returns {Number}
 */
const getPlayWith = (moves) => moves[moves.length - 1].playWith;


const mapStateToProps = (state, ownProps) => {
  const thisPlayerId = state.appData.thisPlayerId,
        moves = state.gameMoves.moves;

  return {
    playerMode: state.appData.data.player.playerMode,
    playWith: getPlayWith (moves),
    enableMove: shouldEnableMove (thisPlayerId, moves)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onBtnClick: (input, playWith) => {
      dispatch (createPayLoadAndDispatch (input, playWith));
    }
  }
}

/**
 * @description function creates and returns random string.
 */
const getRandomString = () => Math.floor (Math.random () * 999999 + 999999).toString (32);

/**
 * @description function create the payload after extracting data
 * from the current state.
 * Also, dispatches following actions actions:
 *  1. Add a move to update local state.
 *  2. Emit the move on socket.
 * @param {Number} input current user input
 * @param {Number} playWith current playWith value to be passed to next user.
 */
const createPayLoadAndDispatch = (input, playWith) => {
  return ( dispatch, getState ) => {
    const currentState = getState ();
    const { thisPlayerId, thisGameId } = currentState.appData;
    const payLoad = {
      playerId: thisPlayerId,
      gameId: thisGameId,
      input,
      playWith,
      isStartNumber: false,
      moveId: `TEMP-${getRandomString ()}`
    }

    dispatch (gameMovesActions.makeAMove (payLoad));
    dispatch (gameMovesActions.socketEmitMove (payLoad));
  }
}

const ConnectedOptions = connect (
  mapStateToProps,
  mapDispatchToProps
) (Options);

export default ConnectedOptions;
