const express = require ('express');
const router = express.Router ();

const PLAYERS = require ('./players');
const GAMES = require ('./games');
const MOVES = require ('./moves');


// returns available game count

router.get ('/api/available-game-count', (req, res) => {
  // send number of available games/no of players waiting.
  res.send ({
    data: {
      availableGameCount: GAMES.getAvailableGameCount ()
    }
  });
})

/**
 * 1. creates an entry for a player.
 * 2. creates an entry for a game and assigns the first participant.
 * 3. creates an entry for game moves.
 */
router.post ('/api/register-player', (req, res) => {
  const nickname = req.body.nickname || 'AI';
  const playerMode = req.body.playerMode || 'A'
  const gameMode = req.body.gameMode || 'C';
  const startGameWith = req.body.startGameWith;
  
  if (!nickname) {
    res.status (400).send ( {message: 'BAD_REQUEST'} );
  }

  let player = {
    nickname,
    playerMode,
    playerStatus: (gameMode === "C") ? "I" : "B"
  }

  player = PLAYERS.createPlayer (player);
  
  let game = null,
      opponent= {};

  if (gameMode === 'C') {
    game = GAMES.createGame (player.playerId, startGameWith);
  } else {
    let gameJoined = GAMES.joinGame (player.playerId);
    game = gameJoined.game;
    opponent = PLAYERS.updatePlayerStatus (gameJoined.existingPlayerId);
  }
  
  res.status (200).send ({ data: {
                              player,
                              game,
                              opponent: opponent.nickname }
                        });
});


// returns all game moves ::: only for test purpose
router.get ('/api/get-all-moves', (req, res) => {
  res.send ( {data: { moves: MOVES.getAllGameMoves ()}}).status (200);
})

// returns all available player and all games ::: only for test purpose.
router.get ('/api/appstate', (req, res) => {
  res.send ({data: {players: PLAYERS.getAllPlayers (), games: GAMES.getAllGames ()}}).status (200);
});

module.exports = router;
