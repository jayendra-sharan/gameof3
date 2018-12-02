import React from 'react';
import PropTypes from 'prop-types';

const Game = ({ thisPlayerId,
                thisGameId,
                opponent,
                startGameWith }) => {
  return (
    <div className='game-main-page'>
      Player id: {thisPlayerId}
      <br />
      Game id: { thisGameId }
      <br />
      { opponent &&
        <span>Opponent: { opponent }</span>
      }
      <br />
      Start game with: { startGameWith }
    </div>
  );
};

Game.propTypes = {
  thisPlayerId: PropTypes.string.isRequired,
  thisGameId: PropTypes.string.isRequired,
  opponent: PropTypes.string,
  startGameWith: PropTypes.number.isRequired
}
export default Game;
