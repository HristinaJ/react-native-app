import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  ActivityIndicator,
  RefreshControl,
  ScrollView,
  StyleSheet,
  AppRegistry,
  View
} from 'react-native';
import navigator from 'react-native-deprecated-custom-components';
import UserPoster from './UserPoster';
import UserPopup from './UserPopup';
import Confirmation from './Confirmation';
import './Login/LoginForm';

@connect(
  state => ({
    users: state.users,
    loading: state.loading,
  }),
  dispatch => ({
    refresh: () => dispatch({type: 'GET_USER_DATA'}),
  }),
)

export default class Users extends React.Component {

static navigationOptions = ({navigation}) => {
    const {state, navigate} = navigation;
        return {
            title: "Users",
        };
    };
    constructor(props) {
       super(props);
    }

   // Add starting here
  state = {
    popupIsOpen: false,
    // Day chosen by user
    chosenDay: 0,       // choose first day by default
    // Time chosen by user
    chosenTime: null,
    code: null,
  }

  openUser = (user) => {
    this.setState({
      popupIsOpen: true,
      user,
    });
  }

  closeUser = () => {
    this.setState({
      popupIsOpen: false,
      // Reset values to default ones
      chosenDay: 0,
      chosenTime: null,
    });
  }
  chooseDay = (day) => {
    this.setState({
      chosenDay: day,
    });
  }

  chooseTime = (skill) => {
    this.setState({
      chosenTime: skill,
    });
  }

  bookTicket = () => {
      this.closeUser();
      //this.props.navigation.navigate('Confirmation', code = Math.random().toString(36).substring(6).toUpperCase(),);
      this.props.navigation.navigate('Reviews');
  };

  render() {
  const { users, loading, refresh } = this.props;
    return (
      <View style={styles.container}>
      {users
       ? <ScrollView
          contentContainerStyle={styles.scrollContent}
		  // Hide all scroll indicators
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
          refreshControl={
             <RefreshControl
                refreshing={loading}
                onRefresh={refresh}
             />
          }
        >
          {users.map((user, index) => <UserPoster
            user={user}
            onOpen={this.openUser}
            key={index}
          />)}
        </ScrollView>
       : <ActivityIndicator
          animating={loading}
          style={styles.loader}
          size="large"
          />
       }
        <UserPopup
          user={this.state.user}
          isOpen={this.state.popupIsOpen}
          onClose={this.closeUser}
          chosenDay={this.state.chosenDay}
          chosenTime={this.state.chosenTime}
          onChooseDay={this.chooseDay}
          onChooseTime={this.chooseTime}
          onBook={this.bookTicket}
          //navigator={this.props.navigator}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
  },
  loader: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
  },
  scrollContent: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
});