import React from 'react';
import PropTypes from 'prop-types';
import types from '../../../constants/types';

const getIsMyMessage = (move, player) => {
  return move.playerId === player.playerId
}

const Message = ({  player,
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
        { move.playWith }
      </div>
    </div>
  )
}

Message.propTypes = {
  move: types.move.isRequired,
  player: types.player.isRequired,
  opponent: types.opponent.isRequired
}

export default Message;
