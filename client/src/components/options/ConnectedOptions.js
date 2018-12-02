import { connect } from 'react-redux';
import Options from '.';

const mapStateToProps = (state, ownProps) => {
  return {
    playWith: ownProps.playWith
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onBtnClick: (input, playWith) => {
      dispatch (createPayLoadAndDispatch (input));
    }
  }
}

const createPayLoadAndDispatch = (input, playWith) => {
  return ( dispatch, getState ) => {
    const currentState = getState ();
    const { thisPlayerId, thisGameId } = currentState.appData;
    const payLoad = {
      thisPlayerId,
      thisGameId,
      input,
      playWith,
      isStartNumber: false
    }
    console.log (payLoad);
  }
}

const ConnectedOptions = connect (
  mapStateToProps,
  mapDispatchToProps
) (Options);

export default ConnectedOptions;
