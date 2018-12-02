const MOVES = require ('./moves');

let allSockets = {};

const SOCKET = {
  createSocket (io) {
    io.on ('connection', (socket) => {
      allSockets[socket.id] = socket;
      console.log ('client connected');
      socket.on ('action', (action) => {
        if (action.type === 'SOCKET/EMIT_MOVE') {
          this.messageReceived (action.moveData);
        }
      });
    
      socket.on ('disconnect', () => {
        console.log ('Client disconnected.');
      });
    });    
  },

  messageReceived (message) {
    console.log ('...message', message);
    const newMoveData = MOVES.updateMoves (message);
    for (let socketId in allSockets) {
      const socket = allSockets[socketId];
      socket.emit ('action', {type: 'SOCKET/M_EMIT_MOVE', moveData: newMoveData});
    }
  }
}

module.exports = SOCKET;