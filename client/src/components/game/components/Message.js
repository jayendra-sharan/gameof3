import React from 'react';
import PropTypes from 'prop-types';
import types from '../../../constants/types';
import Calculations from './Calculations';

const getIsMyMessage = (move, player) => {
  return move.playerId === player.playerId
}

const Message = ({  index,
                    moves,
                    player,
                    move,
                    opponent }) => {
  const isMyMessage = getIsMyMessage (move, player);
  const nickname = isMyMessage ? player.nickname : opponent;
  return (
    <div className={`message-container ${isMyMessage ? 'my-message' : 'their-message'}`}>
      <div className='nick-name'>
        { nickname }
      </div>
      <div className='input-number'>
        { move.isStartNumber ? move.playWith : move.input }
      </div>
      {
        !move.isStartNumber ?
          <Calculations
            oldPlayWith={ moves[index - 1].playWith}
            newPlayWith={moves[index].playWith}
            input={moves[index].input}
            />
          :
          null
      }
    </div>
  )
}

Message.propTypes = {
  index: types.index.isRequired,
  moves: PropTypes.arrayOf (types.move).isRequired,
  move: types.move.isRequired,
  player: types.player.isRequired,
  opponent: types.opponent.isRequired
}

export default Message;
