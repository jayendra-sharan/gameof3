import { connect } from 'react-redux';
import Game from '.';

const mapStateToProps = (state) => {
  const { opponent } = state.appData;
  
  return {
    thisPlayer: state.appData.data.player,
    opponent,
    moves: []
  }
}

const ConnectedGame = connect (
  mapStateToProps,
  null
) (Game);

export default ConnectedGame;
