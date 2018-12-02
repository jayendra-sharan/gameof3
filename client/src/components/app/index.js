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

    if ( fetchingAvailableGameCount) {
      return <FullPageLoader />
    }

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

    if (thisPlayerId) {
      return (
        <Layout>
          <ConnectedGame />
        </Layout>
      )
    }

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
