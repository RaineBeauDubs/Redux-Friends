import {
  FETCH_FRIENDS_START,
  FETCH_FRIENDS_SUCCESS,
  FETCH_FRIENDS_ERROR,
  POST_FRIENDS_START,
  POST_FRIENDS_SUCCESS,
  POST_FRIENDS_ERROR
} from '../actions/actions';

const initialState = {
  friends: [],
  fetchingFriends: false,
  error: null,
  isPosting: false,
  postSuccessMessage: '',
  postError: ''
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
    case POST_FRIENDS_START:
      return {
        ...state,
        isPosting: true,
        postError: '',
        postSuccessMessage: ''
      }
    case POST_FRIENDS_SUCCESS:
      return {
        ...state,
        isPosting: false,
        postError: '',
        postSuccessMessage: action.payload
      }
    case POST_FRIENDS_ERROR:
      return {
        ...state,
        isPosting: false,
        postError: action.payload,
        postSuccessMessage: ''
      }
    default:
      return state;
  }
}

export default reducer;