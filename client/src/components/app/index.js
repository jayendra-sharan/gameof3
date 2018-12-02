import React from 'react';
import PropTypes from 'prop-types';
import Login from '../login';
import Layout from '../shared/Layout';
import FullPageMessage from '../shared/FullPageMessage';
import FullPageLoader from '../shared/loader/FullPageLoader';
import labels from '../../constants/labels';
import ConnectedGame from '../game/ConnectedGame';

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
            availableGameCount,
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
              availableGameCount={ availableGameCount }
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
  fetchAvailableGameCountFailed:PropTypes.bool.isRequired,
  fetchingAvailableGameCount: PropTypes.bool.isRequired,
  availableGameCount: PropTypes.number.isRequired,
  registeringPlayer: PropTypes.bool.isRequired,
  registerPlayerFailed: PropTypes.bool.isRequired,
  thisPlayerId: PropTypes.string.isRequired,
  getAvailableGameCount: PropTypes.func.isRequired,
  submitForm: PropTypes.func.isRequired
}

export default App;
