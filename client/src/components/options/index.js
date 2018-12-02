import React from 'react';
import types from '../../constants/types';
import GOT_CONST from '../../constants/gotConstants';
import labels from '../../constants/labels';

class Options extends React.Component {
  constructor () {
    super ();
    this.state = {
      invalidOption: false
    }

    this._onBtnClick = this._onBtnClick.bind (this);
  }

  _onBtnClick (event) {
    const value = parseInt (event.target.dataset.value);
    const playWith = this._isValidMove (value);
    
    if (playWith) {
      this.props.onBtnClick (value, playWith);
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
    return (
      <div className='options-container'>
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
    )
  }

}

Options.propTypes = {
  playWith: types.playWith.isRequired,
  onBtnClick: types.onBtnClick.isRequired
}


export default Options;
