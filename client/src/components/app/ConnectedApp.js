import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
import App from '.';
import { appDataActions } from '../../actions/appData';
import { gameDataActions } from '../../actions/gameData';

const mapStateToProps = (state) => {
  const { fetchAvailableGameCountFailed,
          fetchingAvailableGameCount,
          availableGameCountAuto,
          availableGameCountManual } = state.gameData;
  
  const { registeringPlayer,
          registerPlayerFailed,
          thisPlayerId } = state.appData;

  return {
    fetchAvailableGameCountFailed,
    fetchingAvailableGameCount,
    availableGameCountAuto,
    availableGameCountManual,
    registeringPlayer,
    registerPlayerFailed,
    thisPlayerId
  }
}

const mapDispatchToProps = (dispatch) => (
  bindActionCreators ({
    submitForm: appDataActions.registerPlayer,
    getAvailableGameCount: gameDataActions.fetchGameCount
  }, dispatch)
)

const ConnectedApp = connect (
  mapStateToProps,
  mapDispatchToProps
) (App);

export default ConnectedApp;
