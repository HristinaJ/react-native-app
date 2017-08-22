import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import {
  Image,
  Linking,
  StyleSheet,
  Platform,
  Text,
  View,
  ScrollView,
  AppRegistry,
  TextInput,
  TouchableOpacity,
  TouchableHighlight,
  AsyncStorage
} from 'react-native';
import NavigationExperimental from 'react-native-deprecated-custom-components';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Button } from 'react-native-elements';
import SafariView from 'react-native-safari-view';
import { Card, Navigation } from 'react-router-navigation'
import CheckBox from 'react-native-icon-checkbox';
import { get, put } from '../../../api';

export default class Register extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
        gender: '',
        name: '',
        location: {
            street: '',
            city: '',
            state: '',
            postcode: '',
            },
        email: '',
        username: '',
        password: '',
        phone: '',
        avatar: '',
        isRadioSelected: true,
        };
    }

    static navigationOptions = ({navigation}) => {
        const {state, navigate} = navigation;
        return {
            title: "Register",
        };
    };

    onChange(text) {
        this.task = text;
    };

    // Set up Linking
    componentDidMount() {
        // Add event listener to handle OAuthLogin:// URLs
        Linking.addEventListener('url', this.handleOpenURL);
        // Launched from an external URL
        Linking.getInitialURL().then((url) => {
          if (url) {
            this.handleOpenURL({ url });
          }
        });
    };

    componentWillUnmount() {
        // Remove event listener
        Linking.removeEventListener('url', this.handleOpenURL);
    };

    static propTypes = {
        onSubmit: PropTypes.func,
      };

    submitUser = async (user) => {
        try {
          // Make API call
          const response = await put('users', {
            oauth_id: '',
            gender: 'gender',
            name: 'name',
            location: {
              street: 'street',
              city: 'city',
              state: 'state',
              postcode: '',
              },
              email: 'email',
              username: 'username',
              password: 'password',
              phone: 'phone',
          });
          // Convert response to JSON
          const json = await response.json();
          this.setState({
            user: [json.user]
          });
          this.props.navigation.navigate('Skills')
        }
        catch (error) {
          alert(error);
        }
      };

    submit = () => {
        const { gender, name, location, street, city, state, postcode, email, username, password, phone, } = this.state;
        if (gender) {
          this.setState({ gender: undefined }, () => this.props.onSubmit(gender));
        } else {
          alert('Please choose gender value');
        };
        if (name) {
          this.setState({ name: undefined }, () => this.props.onSubmit(name));
        } else {
          alert('Please enter your name');
        };
        if (location) {
           this.setState({ location: undefined }, () => this.props.onSubmit(location));
        } else {
           alert('Please enter your location');
        };
        if (email) {
           this.setState({ email: undefined }, () => this.props.onSubmit(email));
        } else {
           alert('Please enter email');
        };
        if (username) {
           this.setState({ username: undefined }, () => this.props.onSubmit(username));
        } else {
           alert('Please enter username');
        };
        if (password) {
           this.setState({ password: undefined }, () => this.props.onSubmit(password));
        } else {
           alert('Please enter password');
        };
      };

    handleSelectedRadionButton = (checked) => {
        if (this.state.isRadioSelected) {
        this.setState({
          isRadioSelected: checked,
          gender: 'Male'
        });
        } else {
          this.setState({
          gender: 'Female'
          });
        }
      }

  render() {
    return (
          <View style={styles.container}>
          <ScrollView>
                <TextInput
                   placeholder="Full name"
                   placeholderTextColor="rgba(0,0,0,0.7)"
                   returnKeyType="next"
                   onSubmitEditing={()=>this.passwordInput.focus()}
                   keyboardType="email-address"
                   autoCapitalize="none"
                   autoCorrect={false}
                   style={styles.input}
                   onChangeText={(name) => this.setState({name})}
                   value={this.state.name}
                />
                <TextInput
                   placeholder="Email"
                   placeholderTextColor="rgba(0,0,0,0.7)"
                   returnKeyType="next"
                   onSubmitEditing={()=>this.passwordInput.focus()}
                   keyboardType="email-address"
                   autoCapitalize="none"
                   autoCorrect={false}
                   style={styles.input}
                   onChangeText={(email) => this.setState({email})}
                   value={this.state.email}
                />
                <TextInput
                   placeholder="Address"
                   placeholderTextColor="rgba(0,0,0,0.7)"
                   returnKeyType="next"
                   onSubmitEditing={()=>this.passwordInput.focus()}
                   keyboardType="email-address"
                   autoCapitalize="none"
                   autoCorrect={false}
                   style={styles.input}
                   onChangeText={(street) => this.setState({street})}
                   value={this.state.street}
                />
                <TextInput
                   placeholder="City"
                   placeholderTextColor="rgba(0,0,0,0.7)"
                   returnKeyType="next"
                   onSubmitEditing={()=>this.passwordInput.focus()}
                   keyboardType="email-address"
                   autoCapitalize="none"
                   autoCorrect={false}
                   style={styles.input}
                   onChangeText={(city) => this.setState({city})}
                   value={this.state.city}
                />
                <TextInput
                   placeholder="State"
                   placeholderTextColor="rgba(0,0,0,0.7)"
                   returnKeyType="next"
                   onSubmitEditing={()=>this.passwordInput.focus()}
                   keyboardType="email-address"
                   autoCapitalize="none"
                   autoCorrect={false}
                   style={styles.input}
                   onChangeText={(city) => this.setState({city})}
                   value={this.state.state}
                />
                <TextInput
                   placeholder="Username"
                   placeholderTextColor="rgba(0,0,0,0.7)"
                   returnKeyType="next"
                   onSubmitEditing={()=>this.passwordInput.focus()}
                   keyboardType="email-address"
                   autoCapitalize="none"
                   autoCorrect={false}
                   style={styles.input}
                   onChangeText={(username) => this.setState({username})}
                   value={this.state.username}
                />
                <TextInput
                   placeholder="Password"
                   placeholderTextColor="rgba(0,0,0,0.7)"
                   secureTextEntry
                   returnKeyType="go"
                   style={styles.input}
                   ref={(input)=> this.passwordInput=input}
                   onChangeText={(password) => this.setState({password})}
                   value={this.state.password}
                />
                <TextInput
                   placeholder="Phone Number"
                   placeholderTextColor="rgba(0,0,0,0.7)"
                   returnKeyType="next"
                   onSubmitEditing={()=>this.passwordInput.focus()}
                   keyboardType="email-address"
                   autoCapitalize="none"
                   autoCorrect={false}
                   style={styles.input}
                   onChangeText={(phone) => this.setState({phone})}
                   value={this.state.phone}
                />
            <View style={styles.buttons}>
                <CheckBox
                  label="Male"
                  size={30}
                  checked={this.state.isRadioSelected}
                  onPress={this.handleSelectedRadionButton}
                  uncheckedIconName="radio-button-unchecked"
                  checkedIconName="radio-button-checked"
                />
                <CheckBox
                  label="Female"
                  size={30}
                  checked={!this.state.isRadioSelected}
                  onPress={this.handleSelectedRadionButton}
                  uncheckedIconName="radio-button-unchecked"
                  checkedIconName="radio-button-checked"
                />
                <Icon.Button
                  name="arrow-right"
                  onPress={() => this.props.navigation.navigate('Skills')}
                  {...iconStyles}
                >
                  Continue
                </Icon.Button>
            </View>
           </ScrollView>
          </View>
        )
    }
  }

    const iconStyles = {
      borderRadius: 10,
      iconStyle: { paddingVertical: 5 },
          };

    const styles = StyleSheet.create({
      container: {
        flex: 1,
        backgroundColor: '#FFF',
        margin: 10,
      },
      content: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      },
      avatar: {
        margin: 20,
      },
      avatarImage: {
        borderRadius: 50,
        height: 100,
        width: 100,
      },
      header: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
      },
      text: {
        textAlign: 'center',
        color: '#333',
        marginBottom: 5,
      },
      buttons: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        margin: 20,
        marginBottom: 30,
      },
      input: {
        height:40,
        backgroundColor:'rgba(255,255,255,0.2)',
        marginBottom:10,
        color:'black',
        paddingHorizontal:10,
        fontSize:17,
      },
      buttonContainer: {
        backgroundColor:'#2c3e50',
        paddingVertical:15
      },
      buttonText:{
        textAlign: 'center',
        color:'#FFFFFF',
        fontWeight: '600',
        fontSize: 17
      },
});