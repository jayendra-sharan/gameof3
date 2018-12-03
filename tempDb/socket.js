const MOVES = require ('./moves');
const GAMES = require ('./games');
const PLAYERS = require ('./players');

let allSockets = {},
    currentSocket = {};

const SOCKET = {
  createSocket (io) {
    io.on ('connection', (socket) => {
      currentSocket = socket;
      allSockets[socket.id] = socket;
      console.log('client connected', socket.id);
      
      socket.on ('action', (action) => {
        if (action.type === 'SOCKET/EMIT_MOVE') {
          this.messageReceived (action.moveData);
        }
      });
    
      socket.on ('disconnect', () => {
        const playerId = GAMES.destroyGameWith ('socketId', socket.id);
        if (playerId) {
          PLAYERS.destroyPlayer (playerId);
        }
        this.updateGameCount ({
          availableGameCount: GAMES.getAvailableGameCount (),
          availableGameCountManual: PLAYERS.getAllIdlePlayers ('M'),
          availableGameCountAuto: PLAYERS.getAllIdlePlayers ('A')
        });
      });
    });    
  },

  messageReceived (message) {
    const newMoveData = MOVES.updateMoves (message);
    this.emitMessages ('SOCKET/M_EMIT_MOVE', 'moveData', newMoveData);
  },

  updateGameCount (gameCount) {
    this.emitMessages ('SOCKET/EMIT_GAME_COUNT', 'gameCount', gameCount);
  },

  emitMessages (type, key, data) {
    for (let socketId in allSockets) {
      const socket = allSockets[socketId];
      socket.emit ('action', {type: type, [key]: data});
    }
  },

  addSocketIdInGame (gameId, callback) {
    callback (gameId, 'socketId', currentSocket.id);
  }
}

module.exports = SOCKET;