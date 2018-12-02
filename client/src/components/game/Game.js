import React from 'react';

const Game = ({ thisPlayerId, thisGameId, opponent }) => {
  return (
    <div>
      Player id: {thisPlayerId}
      <br />
      Game id: { thisGameId }
      <br />
      { opponent &&
        <span>Opponent: { opponent }</span>
      }
    </div>
  );
};

export default Game;
