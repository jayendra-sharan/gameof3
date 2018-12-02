import React from 'react';
import PropTypes from 'prop-types';
import Message from './components/Message';
import FullPageMessage from '../shared/FullPageMessage';
import labels from '../../constants/labels';
import types from '../../constants/types';
import ConnectedOptions from '../options/ConnectedOptions';
import FullPageLoader from '../shared/loader/FullPageLoader';

const Game = ({ winner,
                thisPlayer,
                moves,
                opponent }) => {

  let winnerMessage = labels.YOU_WIN;
  if (winner) {
    if (winner  !== thisPlayer.playerId) {
      winnerMessage = labels.OPP_WIN;
    }
  }

  if (!moves.length) {
    return <FullPageMessage
            message={ labels.UNEXPECTED_ERROR }
            isHtml={ false }
            actionBtn={ true }
            btnLabel={ labels.RELOAD_PAGE }
            onBtnClick={ () => {
              window.location.reload ();
            }}
          />
  }

  return (
    <React.Fragment>
      { winner ? 
          <FullPageMessage
            message={ winnerMessage }
            isHtml={ false }
            transparent={ true }
            actionBtn={ true }
            btnLabel={ labels.NEW_GAME }
            onBtnClick={ () => {
              window.location.reload ();
            }}
          /> :
          null
        }
      {
        (moves.length === 1) ? 
          <FullPageLoader
            text={ labels.WAITING}
            transparent={ true }
            /> : null
      }
      <div className='game-main-page'>
        {
          moves.map ((move, index) => {
            return <Message
                    index={ index }
                    moves={ moves }
                    key={ move.moveId }
                    move={ move }
                    player={ thisPlayer }
                    opponent={ opponent } />
          })
        }
      </div>
      <ConnectedOptions />
    </React.Fragment>
  );
};

Game.propTypes = {
  winner: types.winner.isRequired,
  thisPlayer: types.player.isRequired,
  opponent: types.opponent.isRequired,
  moves: PropTypes.arrayOf (types.move).isRequired
}
export default Game;
