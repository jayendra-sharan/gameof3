const crypto = require ('crypto');
const MOVES = require ('./moves');

let allGames = [];

const GAMES = {

  getAllGames () {
    return this.removeKeyFromGames ('socketId');
  },
  
  _allGames () {
    return allGames;
  },

  getAvailableGameCount (type) {
    switch (type) {
      case 'A':
      case 'M':
        return allGames.filter (game => (
          game.isAvailable && game.playerMode === type
        )).length;
      default:
        return allGames.filter (game => game.isAvailable).length
    }
  },

  createGame (playerId, startGameWith) {
    let gameId = 'G-' + crypto.randomBytes(11).toString('hex');
    let game = {
      gameId,
      startGameWith,
      participants: [playerId],
      isAvailable: true
    }
    allGames = [
      ...allGames,
      game
    ]
    MOVES.createGameMove (playerId, gameId, startGameWith);
    return game;
  },

  /**
   * @description function to join a game.
   * Steps:
   *  1. find all available games and put them in an array.
   *  2. Select a random index to join the game.
   *  3. Add the player to the participants of this game.
   *  4. Mark the second participant as busy.
   *  5. Send message over socket to inform the player.
   */
  joinGame (playerId) {
    let availableGames = allGames.filter ( game => game.isAvailable);
    const availableGameCount = availableGames.length;
    if (availableGameCount) {
      const randomIndex = Math.floor (Math.random () * availableGameCount)
      let thisGame = availableGames [randomIndex];

      // update this game stored in all games
      thisGame = allGames.filter (game => game.gameId === thisGame.gameId)[0];
      const existingPlayerId = thisGame.participants[0];

      allGames = allGames.map (game => {
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
  },

  updateGameData (gameId, key, value) {
    allGames = allGames.map (game => {
      if (game.gameId === gameId) {
        game = {
          ...game,
          [key]: value
        }
      }
      return game;
    });
  },

  removeKeyFromGames (key) {
    return allGames.reduce ((acc, game) => {
      let tempGame = {};
      for (let props in game) {
        if (props !== key) {
          tempGame[props] = game[props];
        }
      }
      acc.push (tempGame);
      return acc;
    }, []);
  },

  destroyGameWith (key, value) {
    let playerId = '';
    allGames = allGames.reduce ((acc, game) => {
      if (game[key] !== value) {
        acc.push (game);
      } else {
        playerId = game.participants[0]
      }
      return acc;
    }, []);
    return playerId;
  }

}

module.exports = GAMES;
