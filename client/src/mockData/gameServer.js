const gameServer = {
  gameCount: {
    data : {
      availableGameCount: 2
    },
    error: {
      status: 500,
      data: 'Server not available.'
    }
  },
  appData: {
    'data': {
      'player': {
        'nickname': 'A',
        'playerMode': 'A',
        'playerStatus': 'I',
        'playerId': 'P-b622cb6ccf77194eda21'
      },
      'game': {
        'gameId': 'G-0298622f2ae60f38ade815',
        'participants': [
          'P-b622cb6ccf77194eda21'
        ],
        'isAvailable': true
      },
      opponent: 'bigtuna'
    },
    error: {
      status: 500,
      data: 'Server not available.'
    }
  }
}

export default gameServer;
