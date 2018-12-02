const crypto = require ('crypto');

let allPlayers = [];

const PLAYERS = {

  getAllPlayers () {
    return allPlayers;
  },

  createPlayer (playerData) {
    const playerId = 'P-' + crypto.randomBytes(10).toString('hex');
    playerData = {
      ...playerData,
      playerId
    }
    allPlayers = [
      ...allPlayers,
      playerData
    ]
    return playerData;
  },

  /**
   * @description updates the status of the player after joining a game.
   * @param {String} playerId of the player who joined the game.
   */
  updatePlayerStatus (playerId) {
    let thisPlayer = null;
    allPlayers = allPlayers.map (player => {
      if (playerId === player.playerId) {
        player = {
          ...player,
          playerStatus: 'B'
        }
        thisPlayer = player
      }
      return player;
    });
    return thisPlayer;
  }
}

module.exports = PLAYERS;
