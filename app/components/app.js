import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { apiMiddleware, reducer } from './redux';
import NavigationExperimental from 'react-native-deprecated-custom-components';
import Users from './Users';
import Confirmation from './Confirmation';
import Login from './Login/login';
import LoginForm1 from './Login/LoginForm';
import Reviews from './reviews';
import Comments from './Comment/list';
import { Tabs } from './router';

/*const RouteMapper = (route, NavigationExperimental) => {
  if (route.name === 'users') {
    return <Users NavigationExperimental={NavigationExperimental.Navigator} />;
  }
  else if (route.name === 'confirmation') {
      return <Confirmation code={route.code} NavigationExperimental={NavigationExperimental.Navigator} />;
  }
  else if (route.name === 'login') {
        return <Login/>;
  }
  else if (route.name === 'reviews') {
          return <Reviews/>;
        }
};*/

const store = createStore(reducer, {}, applyMiddleware(apiMiddleware));

store.dispatch({type: 'GET_USER_DATA'});

export default class App extends Component {
  render() {
    return (
    <Provider store={store}>
        <Tabs/>
    </Provider>
    );
  }
}

/*const LoginForm = StackNavigator({
  Home: {screen: LoginForm1 },
  Users: {screen: Users, },
});*/

/*
<Provider store={store}>
        <NavigationExperimental.Navigator
        // Default to users route
        initialRoute={{ name: 'login' }}
        // Use FloatFromBottom transition between screens
        configureScene={(route, routeStack) => NavigationExperimental.Navigator.SceneConfigs.FloatFromBottom}
        // Pass a route mapper functions
        renderScene={RouteMapper}
      />
    </Provider>*/
