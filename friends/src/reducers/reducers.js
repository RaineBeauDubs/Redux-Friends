import {
  FETCH_FRIENDS_START,
  FETCH_FRIENDS_SUCCESS,
  FETCH_FRIENDS_ERROR
} from '../actions/actions';

const initialState = {
  friends: [],
  fetchingFriends: false,
  error: null
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_FRIENDS_START:
      return {
        ...state, 
        fetchingFriends: true
      }
    case FETCH_FRIENDS_SUCCESS:
      return {
        ...state,
        friends: action.payload,
        fetchingFriends: false
      }
    case FETCH_FRIENDS_ERROR:
      return {
        ...state,
        error: action.payload,
        fetchingFriends: false
      }
    default:
      return state;
  }
}

export default reducer;