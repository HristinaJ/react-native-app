//Another unused script created for testing navigation
import React, { Component } from 'react';
//import { StackNavigator } from 'react-navigation';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { apiMiddleware, reducer } from './redux';
import NavigationExperimental from 'react-native-deprecated-custom-components';
import Users from './Users';
import Confirmation from './Confirmation';
import Login from './Login/login';
//import Reviews from './reviews';
//import Login from './Login/login';
import Comments from './Comment/list';

const RouteMapper = (route, NavigationExperimental) => {
  if (route.name === 'users') {
    return <Users NavigationExperimental={NavigationExperimental.Navigator} />;
  }
  else if (route.name === 'confirmation') {
      return <Confirmation code={route.code} NavigationExperimental={NavigationExperimental.Navigator} />;
  }
  else if (route.name === 'login') {
        return <Login NavigationExperimental={NavigationExperimental.Navigator} />;
  }
  else if (route.name === 'reviews') {
          return <Reviews NavigationExperimental={NavigationExperimental.Navigator} />;
        }
};

const store = createStore(reducer, {}, applyMiddleware(apiMiddleware));

store.dispatch({type: 'GET_USER_DATA'});

export default class App extends Component {
  render() {
    return (

    <Provider store={store}>
        <NavigationExperimental.Navigator
        // Default to users route
        initialRoute={{ name: 'users' }}
        // Use FloatFromBottom transition between screens
        configureScene={(route, routeStack) => NavigationExperimental.Navigator.SceneConfigs.FloatFromBottom}
        // Pass a route mapper functions
        renderScene={RouteMapper}
      />
    </Provider>
    );
  }
}
/*import React, { Component } from 'react';
import {
  AppRegistry,
  Navigator,
  StyleSheet,
  Text,
  View,
  Image } from 'react-native';
import NavigationExperimental from 'react-native-deprecated-custom-components';
import Users from './Users';
//import Component2 from './app/components/Component2';
import Login from './Login/Login';
import LoginForm from './Login/LoginForm'
//import Checkbox from './app/components/CheckBox/CheckBox';


export default class Index extends Component {
    constructor(props, context) {
    super(props, context);
    this.state = {
    credentials: [
        {
            username: 'Aleksandar',
            password: 'Ace123'
        }
    ],
    };
    }

    onLoginStarted() {
        this.nav.push({
            name: 'users'
        });
    }

    renderScene(route, nav) {
                switch (route.name) {
                    case 'users':
                        return (
                            <Users
                                //onLoginStarted={this.onLoginStarted.bind(this)}
                                //onCancel={this.onCancel.bind(this)}
                            />
                        );
                    default:
                        return (
                            <Login
                                onLoginStarted={this.onLoginStarted.bind(this)}
                                //onDone={this.onDone.bind(this)}
                                //todos={this.state.todos}
                            />
                        );
                }
            }

        configureScene() {
                return NavigationExperimental.Navigator.SceneConfigs.FloatFromBottom;
            }

    render() {
        return (
        //<Login/>
        <NavigationExperimental.Navigator
                              configureScene={this.configureScene}
                              initialRoute={{ name: 'login', index: 0}}
                              ref={((nav) => {
                                  this.nav = nav;
                              })}
                              renderScene={this.renderScene.bind(this)}
                          />
        );
    }
}


AppRegistry.registerComponent('Index', () => Index);*/
