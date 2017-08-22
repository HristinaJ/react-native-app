import { Platform } from 'react-native';

/*const API = Platform.OS === 'android'
  ? 'http://127.0.0.1:3000/v1'
  : 'http://localhost:3000/v1';*/
const API1 = 'http://10.0.2.2:3000/v1';

export const apiMiddleware = store => next => action => {
  next(action);
  switch (action.type) {
    case 'GET_USER_DATA':
      store.dispatch({type: 'GET_USER_DATA_LOADING'});
      fetch(`${API1}/users.json`)
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
    case 'GET_USER_USERNAME_PASS':
        fetch(`${API1}/users.json`)
          .then(response => response.json())
          .then(data => next({
            type: 'GET_USER_DATA_RECEIVED',
            username: this.state.username,
            password: this.state.password,
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