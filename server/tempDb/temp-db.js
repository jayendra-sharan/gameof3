const express = require ('express');
const router = express.Router ();

const PLAYERS = require ('./players');
const GAMES = require ('./games');

router.get ('/api/available-game-count', (req, res) => {
  // send number of available games/no of players waiting.
  res.send ({
    data: {
      availableGameCount: GAMES.getAvailableGameCount ()
    }
  });
})

router.get ('/api/appstate', (req, res) => {
  res.send ({data: {players: PLAYERS.players, games: GAMES.games}}).status (200);
});

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


module.exports = router;
