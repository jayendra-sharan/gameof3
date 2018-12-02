import { connect } from 'react-redux';
import Game from '.';

const getStartGameWith = (data) => {
  return parseInt (data.game.startGameWith);
}

const mapStateToProps = (state) => {
  const { thisGameId,
          opponent,
          data } = state.appData;
  
          const { player } = state.appData.data;
  
  return {
    thisPlayer: player,
    thisGameId,
    opponent,
    startGameWith: getStartGameWith (data) || 19 // temporary
  }
}

const ConnectedGame = connect (
  mapStateToProps,
  null
) (Game);

export default ConnectedGame;