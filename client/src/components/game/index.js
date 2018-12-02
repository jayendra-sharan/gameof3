import React from 'react';
import PropTypes from 'prop-types';
import Message from './components/Message';

const Game = ({ thisPlayer,
                thisGameId,
                opponent,
                startGameWith }) => {
  return (
    <div className='game-main-page'>
      <Message
        nickname={ thisPlayer.nickname }
        inputNumber={ startGameWith }
        isMyMessage={ false }
        isStartGameWith={ true } />
    </div>
  );
};

Game.propTypes = {
  thisPlayer: PropTypes.shape({
    playerId: PropTypes.string.isRequired,
    playerStatus: PropTypes.string.isRequired,
    playerMode: PropTypes.string.isRequired,
    nickname: PropTypes.string.isRequired
  }).isRequired,
  thisGameId: PropTypes.string.isRequired,
  opponent: PropTypes.string,
  startGameWith: PropTypes.number.isRequired
}
export default Game;
