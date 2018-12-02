import React from 'react';
import PropTypes from 'prop-types';

const Message = ({ nickname,
                  inputNumber,
                  isMyMessage,
                  isStartGameWith }) => {
  return (
    <div className={`message-container ${isMyMessage ? 'my-message' : 'their-message'}`}>
      <div className='nick-name'>
        { nickname }
      </div>
      <div className={`input-number ${isStartGameWith ? 'is-start' : ''}`}>
        { inputNumber }
      </div>
    </div>
  )
}

Message.propTypes = {
  nickname: PropTypes.string.isRequired,
  inputNumber: PropTypes.number.isRequired,
  isMyMessage: PropTypes.bool.isRequired,
  isStartGameWith: PropTypes.bool.isRequired
}

export default Message;
