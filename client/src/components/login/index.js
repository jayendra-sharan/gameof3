import React from "react";
import labels from "../../constants/labels";
import GOT_CONST from "../../constants/gotConstants";
import types from "../../constants/types";

class Login extends React.Component {
  constructor () {
    super ();
    this.state = {
      availablePlayerCount: 0,
      playerMode: GOT_CONST.DEFAULTS.P_MODE,
      gameMode: GOT_CONST.DEFAULTS.G_MODE,
      nickname: '',
      startGameWith: ''
    }
    this._bindEvents ();
  }

  componentDidMount () {
    this._updateState (this.props);
  }

  componentWillReceiveProps (nextProps) {
    this._updateState (nextProps);
  }

  _updateState (data) {
    this.setState ({
      availableGameCount: data.availableGameCount
    });
  }

  /**
   * @description function binds all event handlers to current scope.
   */
  _bindEvents () {
    this._onPlayerModeChange = this._onPlayerModeChange.bind (this);
    this._onGameModeChange = this._onGameModeChange.bind (this);
    this._onNicknameChange = this._onNicknameChange.bind (this);
    this._onStartGameWithChange = this._onStartGameWithChange.bind (this);
    this._onFormSubmit = this._onFormSubmit.bind (this);
  }

  /**
   * @description event handler for nick name change.
   * @param {Object} event user input event.
   */
  _onNicknameChange (event) {
    const nickname = event.target.value;
    this.setState ({
      nickname
    });
  }

  /**
   * @description event handler for player change event.
   * @param {Object} event user input event.
   */
  _onPlayerModeChange (event) {
    const playerMode = event.target.value;
    this.setState ({
      playerMode
    });
  }

  /**
   * @description event handler for game mode change event.
   * @param {Object} event user input event.
   */
  _onGameModeChange (event) {
    const gameMode = event.target.value;
    this.setState ({
      gameMode
    });
  }

  /**
   * @description event handler for start number change.
   * @param {Object} event user input event.
   */
  _onStartGameWithChange (event) {
    const startGameWith = event.target.value;
    this.setState ({
      startGameWith
    });
  }

  /**
   * @description event handler for form submit event.
   * @param {Object} event submit event.
   */
  _onFormSubmit (event) {
    event.preventDefault ();
    this.props.submitForm ({
      nickname: this.state.nickname,
      gameMode: this.state.gameMode,
      playerMode: this.state.playerMode,
      startGameWith: this.state.startGameWith
    });
  }

  render () {
    const { availableGameCount } = this.props;
    return (
      <form onSubmit={ this._onFormSubmit } className='login-form'>
        <div className='form-row'>
          <div className='form-row-lhs'>
            <label htmlFor='nick-name'>
              { labels.NICK_NAME }
            </label>
          </div>
          <div className='form-row-rhs'>
            <input
              type='text'
              placeholder={ labels.NICK_NAME_EX }
              className='nick-name'
              value={ this.state.nickname }
              onChange={ this._onNicknameChange }
              id='nick-name' />
          </div>
        </div>

        <div className='form-row'>
          <div className='form-row-lhs'>
            { labels.PLAYER_MODE }
          </div>
          <div className='form-row-rhs'>
            <label className='radio-btn' htmlFor='player-mode-auto'>
              <input
                type='radio'
                className='player-mode'
                id='player-mode-auto'
                value={ GOT_CONST.PLAYER_MODE.AUTO }
                onChange={  this._onPlayerModeChange }
                checked={ this.state.playerMode === GOT_CONST.PLAYER_MODE.AUTO }
                name='player-mode' />
              { labels.PLAYER_MODE_AUTO }
            </label>
            <label className='radio-btn' htmlFor='player-mode-manual'>
              <input
                type='radio'
                className='player-mode'
                id='player-mode-manual'
                value={ GOT_CONST.PLAYER_MODE.MANUAL }
                onChange={  this._onPlayerModeChange }
                checked={ this.state.playerMode === GOT_CONST.PLAYER_MODE.MANUAL }
                name='player-mode' />
              { labels.PLAYER_MODE_MANUAL }
            </label>
          </div>
        </div>

        <div className='form-row'>
          <div className='form-row-lhs'>
            { labels.GAME_MODE }
          </div>
          <div className='form-row-rhs'>
            <label className='radio-btn' htmlFor='game-mode-create'>
              <input
                type='radio'
                className='game-mode'
                id='game-mode-create'
                value={ GOT_CONST.GAME_MODE.CREATE }
                onChange={  this._onGameModeChange }
                checked={ this.state.gameMode === GOT_CONST.GAME_MODE.CREATE }
                name='game-mode' />
              { labels.GAME_MODE_CREATE }
            </label>

            {
              this.state.availableGameCount ?
                <label
                  className='radio-btn'
                  htmlFor='game-mode-join'>
                  <input
                    disabled={ !availableGameCount }
                    type='radio'
                    className='game-mode'
                    id='game-mode-join'
                    value={ GOT_CONST.GAME_MODE.JOIN }
                    onChange={  this._onGameModeChange }
                    checked={ this.state.gameMode === GOT_CONST.GAME_MODE.JOIN }
                    name='game-mode' />
                  { `${labels.GAME_MODE_JOIN} (${availableGameCount})` }
                </label>
                :
                null
            }
          </div>
        </div>

        {
          (this.state.gameMode === GOT_CONST.GAME_MODE.CREATE) &&
          <div className='form-row'>
            <div className='form-row-lhs'>
              <label htmlFor='start-game-with'>
                { labels.START_NUMBER }
              </label>
            </div>
            <div className='form-row-rhs'>
              <input
                type='text'
                placeholder={ labels.START_EX }
                className='start-game-with'
                value={ this.state.startGameWith }
                onChange={ this._onStartGameWithChange }
                id='start-game-with' />
            </div>
          </div>
        }

        <div className='form-row'>
          <div className='form-row-rhs form-row-merge'>
            <button type='submit' className='enter-game btn-primary'>
              { labels.START_GAME}
            </button>
          </div>
        </div>
      </form>
    )
  }
}

Login.propTypes = {
  submitForm: types.submitForm.isRequired,
  availableGameCount: types.availableGameCount.isRequired
}

export default Login;
