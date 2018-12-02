const crypto = require ('crypto');

const GAMES = {
  games: [],
  
  getAvailableGameCount () {
    return this.games.filter (game => game.isAvailable).length
  },

  createGame (playerId, startGameWith) {
    let gameId = 'G-' + crypto.randomBytes(11).toString('hex');
    let game = {
      gameId,
      startGameWith,
      participants: [playerId],
      isAvailable: true
    }
    this.games = [
      ...this.games,
      game
    ]
    return game;
  },

  /**
   * @description function to join a game.
   * Steps:
   *  1. find all available games and put them in an array.
   *  2. Select a random index to join the game.
   *  3. Add the player to the participants of this game.
   *  4. Mark the second participant as busy.
   */
  joinGame (playerId) {
    let availableGames = this.games.filter ( game => game.isAvailable);
    const availableGameCount = availableGames.length;
    if (availableGameCount) {
      const randomIndex = Math.floor (Math.random () * availableGameCount)
      let thisGame = availableGames [randomIndex];

      // update this game stored in all games
      thisGame = this.games.filter (game => game.gameId === thisGame.gameId)[0];
      const existingPlayerId = thisGame.participants[0];

      this.games = this.games.map (game => {
        if (game.gameId === thisGame.gameId) {
          game = {
            ...game,
            participants: [
              ...game.participants,
              playerId
            ],
            isAvailable: false
          }
          thisGame = game;
        }
        return game;
      });
      return {
        game: thisGame,
        existingPlayerId
      };
    } else {
      return {
        'error': 'NO_GAME_AVAILABLE'
      }
    }
  }
}

module.exports = GAMES;
