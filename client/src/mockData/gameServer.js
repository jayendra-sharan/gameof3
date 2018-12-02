const gameServer = {
  'sample': {
    'winner': 'P-b622cb6ccf77194eda21',
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
      'startGameWith': '19',
      'isAvailable': true
    },
    'move': {
      'moveId': 'M-b622cb6ccf77194eda21',
      'gameId': 'G-0298622f2ae60f38ade815',
      'playerId': 'P-b622cb6ccf77194eda21',
      'input': 19,
      'isStartNumber': true,
      'playWith': 19
    },
    'opponent': 'bigtuna',
    'playWith': 19
  },
  'gameCount': {
    'data' : {
      'availableGameCount': 2
    },
    'error': {
      'status': 500,
      'data': 'Server not available.'
    }
  },
  'appData': {
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
        'startGameWith': '19',
        'isAvailable': true
      },
      'opponent': 'bigtuna'
    },
    'error': {
      'status': 500,
      'data': 'Server not available.'
    }
  },
  'gameMoves': {
    'moveData': {
      'moveId': 'M-b622cb6ccf77194eda21',
      'gameId': 'G-0298622f2ae60f38ade815',
      'playerId': 'P-b622cb6ccf77194eda21',
      'input': 19,
      'isStartNumber': true,
      'playWith': 19
    }
  }
}

export default gameServer;
