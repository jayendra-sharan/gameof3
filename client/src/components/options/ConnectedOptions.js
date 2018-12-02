import { connect } from 'react-redux';
import Options from '.';
import { gameMovesActions } from '../../actions/gameMoves';

/**
 * @description if this player is same as last move maker
 * @param {Object} state 
 */
const shouldEnableMove = (thisPlayerId, moves) => (
  thisPlayerId !== moves[moves.length -1].playerId 
)

const getPlayWith = (moves) => moves[moves.length - 1].playWith;

const mapStateToProps = (state, ownProps) => {
  const thisPlayerId = state.appData.thisPlayerId,
        moves = state.gameMoves.moves;

  return {
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

const getRandomString = () => Math.floor (Math.random () * 999999 + 999999).toString (32);

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
  }
}


const ConnectedOptions = connect (
  mapStateToProps,
  mapDispatchToProps
) (Options);

export default ConnectedOptions;
