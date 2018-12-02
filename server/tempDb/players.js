const crypto = require ('crypto');

const PLAYERS = {
  players: [],

  createPlayer (playerData) {
    const playerId = 'P-' + crypto.randomBytes(10).toString('hex');
    playerData = {
      ...playerData,
      playerId
    }
    this.players = [
      ...this.players,
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
    this.players = this.players.map (player => {
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
