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
       //   this.bookTicket = this.bookTicket.bind(this);
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
    // Make sure they selected time 
    /*if (!this.state.chosenTime) {
      alert('Please select show time');
    } else {*/
      // Close popup
      this.closeUser();
      // Navigate away to Confirmation route
      //this.props.navigation.navigate('Confirmation', code = Math.random().toString(36).substring(6).toUpperCase(),);
      this.props.navigation.navigate('Reviews');
    //}
  };

    /*static navigationOptions = {
        title: 'Users',
    };*/

  // Until here
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
          /*days={this.state.days}
          times={this.state.times}*/
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
    paddingTop: 20,         // start below status bar
  },
  loader: {
      flex: 1,
      alignItems: 'center',     // center horizontally
      justifyContent: 'center', // center vertically
  },
  scrollContent: {
    flexDirection: 'row',   // arrange posters in rows
    flexWrap: 'wrap',       // allow multiple rows
  },
});

//AppRegistry.registerComponent('Users', () => Users);
/*import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    TextInput } from 'react-native';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 8,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#C1C1C1',
  },
  input: {
    height: 50,
    flex: 1,
    paddingHorizontal: 8,
    fontSize: 17,
    backgroundColor: '#FFFFFF',
    borderRadius: 2,
  },
  searchSection: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
},
searchIcon: {
    padding: 10,
}
});
const Header = (props) => (
  <View>
  <View style={styles.container}>
      <TextInput
      style={styles.input}
      placeholder="Search..."
      onChangeText={(text) => console.log('searching for ', text)}
    />
     </View>
  </View>
);
export default Header;*/