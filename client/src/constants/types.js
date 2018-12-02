import PropTypes from 'prop-types';

const types = {
  'fetchAvailableGameCountFailed': PropTypes.bool,
  'fetchingAvailableGameCount': PropTypes.bool,
  'availableGameCount': PropTypes.number,
  'registeringPlayer': PropTypes.bool,
  'registerPlayerFailed': PropTypes.bool,
  'thisPlayerId': PropTypes.string,
  'getAvailableGameCount': PropTypes.func,
  'submitForm': PropTypes.func,
  'player': PropTypes.shape ({
    'playerId': PropTypes.string.isRequired,
    'playerStatus': PropTypes.string.isRequired,
    'playerMode': PropTypes.string.isRequired,
    'nickname': PropTypes.string.isRequired
  }),
  'game': {

  },
  'move': PropTypes.shape ({
    'moveId': PropTypes.string.isRequired,
    'playerId': PropTypes.string.isRequired,
    'gameId': PropTypes.string.isRequired,
    'input': PropTypes.number.isRequired,
    'isStartNumber': PropTypes.bool.isRequired,
    'playWith': PropTypes.number.isRequired
  }),
  'opponent': PropTypes.string,
  'onBtnClick': PropTypes.func,
  'playWith': PropTypes.number,
  'enableMove': PropTypes.bool,
  'input': PropTypes.number,
  'index': PropTypes.number,
  'winner': PropTypes.string,
  'playerMode': PropTypes.string
};

export default types;