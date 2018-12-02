import { connect } from 'react-redux';
import Game from '.';

const getStartGameWith = (data) => {
  return parseInt (data.game.startGameWith);
}

const mapStateToProps = (state) => {
  const { thisGameId,
          thisPlayerId,
          opponent,
          data } = state.appData;
  
  return {
    thisPlayerId,
    thisGameId,
    opponent,
    startGameWith: getStartGameWith (data)
  }
}

const ConnectedGame = connect (
  mapStateToProps,
  null
) (Game);

export default ConnectedGame;
