import actionTypes from "../../constants/actionTypes";
import axios from "axios";
import API from "../../constants/api";

// action creator
const registerPlayerStart = () => ({
  type: actionTypes.APP_DATA.REGISTER_PLAYER_START
});

// action cretor
const registerPlayerSuccess = (response) => ({
  type:actionTypes.APP_DATA.REGISTER_PLAYER_SUCCESS,
  appData: response.data
});

const registerPlayerFailed = (error) => ({
  type: actionTypes.APP_DATA.REGISTER_PLAYER_FAILED,
  error: error
});

export const appDataActions = {
  registerPlayer (payload) {
    return (dispatch) => {
      dispatch (registerPlayerStart ());

      return axios ({
        url: API.REGISTER_PLAYER,
        data: payload,
        method: 'post'
      }).then (response => {
        dispatch (registerPlayerSuccess (response.data));
      }).catch (error => {
        dispatch (registerPlayerFailed (error.response));
      });
    }
  }

}