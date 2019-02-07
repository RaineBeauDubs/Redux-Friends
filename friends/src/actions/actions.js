import axios from 'axios';

export const FETCH_FRIENDS_START = 'FETCH_FRIENDS_START';
export const FETCH_FRIENDS_SUCCESS = 'FETCH_FRIENDS_SUCCESS';
export const FETCH_FRIENDS_ERROR = 'FETCH_FRIENDS_ERROR';
export const POST_FRIENDS_START = 'POST_FRIENDS_START';
export const POST_FRIENDS_SUCCESS = 'POST_FRIENDS_SUCCESS';
export const POST_FRIENDS_ERROR = 'POST_FRIENDS_ERROR';

export function getFriends() {
  return function(dispatch) {
    dispatch({ type: FETCH_FRIENDS_START  });
    axios
      .get("http://localhost:5000/api/friends")
      .then(response => dispatch({ type: FETCH_FRIENDS_SUCCESS, payload: response.data }))
      .catch(error => dispatch({ type: FETCH_FRIENDS_SUCCESS, payload: error }))
  };
}

export function addFriend(addedFriend) {
  return function(dispatch) {
    dispatch({ type: POST_FRIENDS_START });
    axios
      .post("http://localhost:5000/api/friends", addedFriend)
      .then(response => dispatch({ type: POST_FRIENDS_SUCCESS, payload: response.data }))
      .catch(error => dispatch({ type: POST_FRIENDS_ERROR, payload: error }))
  }
}