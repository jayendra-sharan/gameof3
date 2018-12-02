import React from 'react';
import PropTypes from 'prop-types';
import Message from './components/Message';
import FullPageMessage from '../shared/FullPageMessage';
import labels from '../../constants/labels';
import types from '../../constants/types';

const Game = ({ thisPlayer,
                moves,
                opponent }) => {
  
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
    <div className='game-main-page'>
      {
        moves.map (move => {
          return <Message
                  key={ move.playWith }
                  move={ move }
                  player={ thisPlayer }
                  opponent={ opponent } />
        })
      }
    </div>
  );
};

Game.propTypes = {
  thisPlayer: types.player.isRequired,
  opponent: types.opponent.isRequired,
  moves: PropTypes.arrayOf (types.move).isRequired
}
export default Game;
