import { Platform } from 'react-native';

/*const API = Platform.OS === 'android'
  ? 'http://127.0.0.1:3000/v1'
  : 'http://localhost:3000/v1';*/
const API = 'http://10.0.2.2:3000/v1';

export const apiMiddleware = store => next => action => {
  // Pass all actions through by default
  next(action);
  switch (action.type) {
    // In case we receive an action to send an API request
    case 'GET_USER_DATA':
      // Dispatch GET_MOVIE_DATA_LOADING to update loading state
      store.dispatch({type: 'GET_USER_DATA_LOADING'});
      // Make API call and dispatch appropriate actions when done
      fetch(`${API}/users.json`)
        .then(response => response.json())
        .then(data => next({
          type: 'GET_USER_DATA_RECEIVED',
          data
        }))
        .catch(error => next({
          type: 'GET_USER_DATA_ERROR',
          error
        }));
      break;
    // Do nothing if the action does not interest us
    default:
      break;
  }
};

export const reducer = (state = { users: [], loading: true }, action) => {
  switch (action.type) {
    case 'GET_USER_DATA_LOADING':
      return {
        ...state,
        loading: true,
      };
    case 'GET_USER_DATA_RECEIVED':
      return {
        loading: false,
        users: action.data.users,
      };
    case 'GET_USER_DATA_ERROR':
      return state;
    default:
      return state;
    }
};

//extract default class redux;