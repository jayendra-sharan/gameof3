import actionTypes from "../../constants/actionTypes";
import axios from "axios";
import API from "../../constants/api";

// action creator
const fetchCountStart = () => ({
  type: actionTypes.GAME_SERVER.FETCH_GAME_COUNT_START
});

// action creator
const fetchCountSuccess = (response) => ({
  type: actionTypes.GAME_SERVER.FETCH_GAME_COUNT_SUCCESS,
  gameCount: response.data
});


//action creator
const fetchCountFailed = (error) => ({
  type: actionTypes.GAME_SERVER.FETCH_GAME_COUNT_FAILED,
  error
});

// action creators to be exported.
export const gameDataActions = {
  fetchGameCount () {
    return (dispatch) => {
      dispatch (fetchCountStart ());
      return axios ({
        url: API.FETCH_GAME_COUNT,
        method: 'get'
      }).then (response => {
        dispatch (fetchCountSuccess (response.data));
      }).catch (error => {
        dispatch (fetchCountFailed (error.response));
      });
    }
  }
}
