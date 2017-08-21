import React, { Component } from 'react';
import Login from './Login/login';
import Comments from './Comment/list';

export default class Reviews extends Component {

    static navigationOptions = ({navigation}) => {
                const {state, navigate} = navigation;
                return {
                    title: "Messages",
                };
            };

  state = {
    user: undefined, // not logged in yet
  };

  // Gets called after user logs in with Facebook or Google
  onLoggedIn = (user) => {
    this.setState({ user });
  };

  render() {
    const { user } = this.state;
    return user
      // Show comments if user is logged in
      ? <Comments user={user} />
      // Show login screen otherwise
      : <Login onLoggedIn={this.onLoggedIn} />;
  }
}