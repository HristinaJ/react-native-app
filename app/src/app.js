import React, { Component } from 'react';
import {
  Navigator,
} from 'react-native';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { apiMiddleware, reducer } from '../src/redux';
import Users from '../components/Users';
import Confirmation from '../components/Confirmation';

const RouteMapper = (route, navigator) => {
  if (route.name === 'users') {
    return (
      <Users navigator={navigator} />
    );
  }
  else if (route.name === 'confirmation') {
    return (
      <Confirmation code={route.code} navigator={navigator} />
    );
  }
};

const store = createStore(reducer, {}, applyMiddleware(apiMiddleware));

store.dispatch({type: 'GET_USER_DATA'});

export default class App extends Component {
  render() {
    return (
    <Provider store={store}>
      <Navigator
        // Default to users route
        initialRoute={{ name: 'users' }}
        // Use FloatFromBottom transition between screens
        configureScene={(route, routeStack) => Navigator.SceneConfigs.FloatFromBottom}
        // Pass a route mapper functions
        renderScene={RouteMapper}
      />
    </Provider>
    );
  }
}