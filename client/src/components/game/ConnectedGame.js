import { connect } from 'react-redux';
import Game from './Game';

const mapStateToProps = (state) => {
  const { thisGameId,
          thisPlayerId,
          opponent } = state.appData;
  return {
    thisPlayerId,
    thisGameId,
    opponent
  }
}

const ConnectedGame = connect (
  mapStateToProps,
  null
) (Game);

export default ConnectedGame;
