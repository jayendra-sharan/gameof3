import React from 'react';
import types from '../../constants/types';
import GOT_CONST from '../../constants/gotConstants';
import labels from '../../constants/labels';

class Options extends React.Component {
  constructor () {
    super ();
    this.state = {
      invalidOption: false,
      gameEnded: false,
      enableMove: false
    }

    this.possibleMoves = [-1, 0, 1];
    this.playerMode = GOT_CONST.DEFAULTS.P_MODE;
    this._onBtnClick = this._onBtnClick.bind (this);
    this._updateState = this._updateState.bind (this);
  }

  componentDidMount () {
    this._updateState (this.props);
  }

  componentWillReceiveProps (nextProps) {
    this._updateState (nextProps);
  }

  /**
   * @description function to update the state on props received.
   * @param {Object} data this.props | nextProps
   */
  _updateState (data) {
    const { enableMove } = data;
    this.setState ({
      enableMove
    });
    if (enableMove && this.playerMode === GOT_CONST.PLAYER_MODE.AUTO) {
      setTimeout (() => {
        this._autoPlay ();
      }, 1000)
    }
  }

  /**
   * @description function to make automated correct moves.
   */
  _autoPlay () {
    for (let index = 0; index < this.possibleMoves.length; index++) {
      const value = this.possibleMoves[index];
      const playWith = this._isValidMove (value);
      if (playWith) {
        this._makeTheMove (value, playWith);
        break;
      }
    }
  }

  /**
   * @description function calls the making the move function.
   * @param {number} value user input
   * @param {number} playWith value to be passed to next player
   */
  _makeTheMove (value, playWith) {
    this.props.onBtnClick (value, playWith);
    if (playWith === 1) {
      this.setState ({
        gameEnded: true
      });
    }
  }

  _onBtnClick (event) {
    const value = parseInt (event.target.dataset.value);
    const playWith = this._isValidMove (value);
    
    if (playWith) {
      this._makeTheMove (value, playWith);
    } else {
      this.setState ({
        invalidOption: true
      });
      setTimeout (() => {
        this.setState ({
          invalidOption: false
        });
      }, 1000);
    }
  }

  _isValidMove (input) {
    const newNumber = (this.props.playWith + input),
          quo = newNumber / GOT_CONST.DEFAULTS.NUM,
          rem = newNumber % GOT_CONST.DEFAULTS.NUM;
    if (rem === 0) {
      return quo;
    }
    return false;
  }

  render () {
    const disableMoves = this.state.gameEnded || !this.props.enableMove;
    return (
      // if game ended: disable moves
      // if this.props.enableMove is false disable moves.
      <div className={`options-container ${disableMoves ? 'disable-moves' : ''}`}>
        { this.state.invalidOption && 
          <div className='invalid-move'>
            { labels.INVALID_MOVE }
          </div>
        }
        <button
          data-value='-1'
          className='user-input-btn'
          onClick={ this._onBtnClick }
          > -1 </button>
  
          <button
            data-value='0'
            className='user-input-btn'
            onClick={ this._onBtnClick }
            > 0 </button>
  
          <button
            data-value='1'
            className='user-input-btn'
            onClick={ this._onBtnClick }
            > 1 </button>
      </div>
    );
  }

}

Options.propTypes = {
  playerMode: types.playerMode.isRequired,
  playWith: types.playWith.isRequired,
  onBtnClick: types.onBtnClick.isRequired,
  enableMove: types.enableMove.isRequired
}


export default Options;
