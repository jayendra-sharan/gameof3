/**
 * @fileoverview this is the front page of the application. It also decides
 * which components to render based on the application state. For example,
 * if there was a server error, it will render the full page message component.
 * In normal conditions, it displays a login component and when the user logs in,
 * it renders the game component.
 */

import React from 'react';
import Login from '../login';
import Layout from '../shared/Layout';
import FullPageMessage from '../shared/FullPageMessage';
import FullPageLoader from '../shared/loader/FullPageLoader';
import labels from '../../constants/labels';
import ConnectedGame from '../game/ConnectedGame';
import types from '../../constants/types';

class App extends React.Component {
  constructor () {
    super ();
    this.state = {
      initGame: false
    }
  }

  componentDidMount () {
    this.props.getAvailableGameCount ();
  }

  render () {
    const { fetchAvailableGameCountFailed,
            fetchingAvailableGameCount,
            availableGameCountAuto,
            availableGameCountManual,
            registeringPlayer,
            registerPlayerFailed,
            thisPlayerId,
            submitForm } = this.props;

    // show loader when xhr call is running.
    if ( fetchingAvailableGameCount) {
      return <FullPageLoader />
    }

    // show server connection error if fetch has completed but failed.
    if ( !fetchingAvailableGameCount && fetchAvailableGameCountFailed) {
      return <FullPageMessage
                message={ labels.SERVER_CONNECT_ERROR }
                isHtml={ false }
                actionBtn={ true }
                btnLabel={ labels.RELOAD_PAGE }
                onBtnClick={ () => {
                  window.location.reload ();
                }}
              />
    }

    // if thisPlayerId is present, i.e. player got registered,
    // load game component.
    if (thisPlayerId) {
      return (
        <Layout>
          <ConnectedGame />
        </Layout>
      )
    }

    // if registering player call finished, but failed, display error.
    if (!registeringPlayer && registerPlayerFailed) {
      return <FullPageMessage
        message={ labels.REGISTER_PLAYER_ERROR }
        isHtml={ false }
        actionBtn={ true }
        btnLabel={ labels.RELOAD_PAGE }
        onBtnClick={ () => {
          window.location.reload ();
        }}
        />
    }

    return (
      <React.Fragment>
        <Layout>
            {
              // during xhr call, show loader.
              registeringPlayer && <FullPageLoader transparent={ true } />
            }
            <Login
              availableGameCountManual={ availableGameCountManual }
              availableGameCountAuto={ availableGameCountAuto }
              submitForm={ (playerData) => {
                submitForm (playerData);
              }}
              />
        </Layout>
  
      </React.Fragment>
    )
  }
}

// Prop Types.
App.propTypes = {
  fetchAvailableGameCountFailed:types.fetchAvailableGameCountFailed.isRequired,
  fetchingAvailableGameCount: types.fetchingAvailableGameCount.isRequired,
  availableGameCountManual: types.availableGameCount.isRequired,
  availableGameCountAuto: types.availableGameCount.isRequired,
  registeringPlayer: types.registeringPlayer.isRequired,
  registerPlayerFailed: types.registerPlayerFailed.isRequired,
  thisPlayerId: types.thisPlayerId.isRequired,
  getAvailableGameCount: types.getAvailableGameCount.isRequired,
  submitForm: types.submitForm.isRequired
}

export default App;
