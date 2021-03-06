/**
 * @fileoverview Creates connected component, connetcs Game.
 */
import { connect } from 'react-redux';
import Game from '.';

const mapStateToProps = (state) => {
  let opponent = state.appData.opponent || '';

  return {
    winner: state.gameMoves.winner,
    thisPlayer: state.appData.data.player,
    opponent,
    moves: state.gameMoves.moves
  }
}

const ConnectedGame = connect (
  mapStateToProps,
  null
) (Game);

export default ConnectedGame;
