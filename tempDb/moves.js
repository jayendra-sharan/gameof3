const crypto = require ('crypto');

let allGameMoves = {};

const MOVES = {
  createGameMove (playerId, gameId, startGameWith) {
    allGameMoves[gameId] = [
      {
      'moveId': 'M-' + crypto.randomBytes(11).toString('hex'),
      'playerId': playerId,
      'gameId': gameId,
      'isStartNumber': true,
      'playWith': parseInt (startGameWith),
      'input': parseInt (startGameWith)
    }];
  },

  updateMoves (moveData) {
    const moveId = 'M-' + crypto.randomBytes(11).toString('hex');
    moveData = {
      ...moveData,
      'newMoveId': moveId
    };
    allGameMoves [moveData.gameId] = [
      ...allGameMoves[moveData.gameId],
      moveData
    ];
    return moveData;
  },

  getAllGameMoves () {
    return allGameMoves;
  },

  getGameMovesByGameId (gameId) {
    return allGameMoves [gameId]
  }

}

module.exports = MOVES;
