import React, { Component, PropTypes } from 'react';
import {
  Image,
  Linking,
  StyleSheet,
  Platform,
  Text,
  View,
  AppRegistry,
  TextInput,
  TouchableOpacity,
  TouchableHighlight,
} from 'react-native';
import NavigationExperimental from 'react-native-deprecated-custom-components';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Button } from 'react-native-elements';
import SafariView from 'react-native-safari-view';
import { Card, Navigation } from 'react-router-navigation'
//import { defaultStyles } from '../styles';
import LoginForm from './LoginForm';

export default class Login extends React.Component {
    constructor(props, context) {
        super(props, context);
    }

    static navigationOptions = ({navigation}) => {
        const {state, navigate} = navigation;
        return {
            title: "Login",
        };
    };

    static propTypes = {
        onLoggedIn: PropTypes.func
      };

    state = {
        user: undefined,
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

    handleOpenURL = ({ url }) => {
        // Extract stringified user string out of the URL
        const [, user_string] = url.match(/user=([^#]+)/);
        // Decode the user string and parse it into JSON
        const user = JSON.parse(decodeURI(user_string));
        // Call onLoggedIn function of parent component and pass user object
        this.props.onLoggedIn(user);
        if (Platform.OS === 'ios') {
          SafariView.dismiss();
        }
      };

     // Handle Login with Facebook button tap
      loginWithFacebook = () => this.openURL('http://10.0.2.2:3000/auth/facebook');

      // Handle Login with Google button tap
      loginWithGoogle = () => this.openURL('http://localhost:3000/auth/google');

      // Open URL in a browser
        openURL = (url) => {
          // Use SafariView on iOS
          if (Platform.OS === 'ios') {
            SafariView.show({
              url: url,
              fromBottom: true,
            });
          }
          // Or Linking.openURL on Android
          else {
            Linking.openURL(url);
          }
        };

  render() {
    return (
          <View style={styles.container}>
            <View style={styles.content} >
                <View style={styles.avatar}>
                   <Image style={styles.avatarImage}
                      source={require('NewApp/images/logo.png')}
                   />
                   <Text style={styles.header}>Long Life</Text>
                </View>

            </View>
            <View style={styles.container}>
                            <TextInput
                                placeholder="Username / Email"
                                placeholderTextColor="rgba(255,255,255,0.7)"
                                returnKeyType="next"
                                onSubmitEditing={()=>this.passwordInput.focus()}
                                keyboardType="email-address"
                                autoCapitalize="none"
                                autoCorrect={false}
                                style={styles.input}
                                onChangeText={this.onChange.bind(this)}
                            />
                            <TextInput
                                placeholder="Password"
                                placeholderTextColor="rgba(255,255,255,0.7)"
                                secureTextEntry
                                returnKeyType="go"
                                style={styles.input}
                                ref={(input)=> this.passwordInput=input}
                            />
                            <Icon.Button
                                name="user"
                                onPress={() => this.props.navigation.navigate('Users')}
                                title="Login"
                                {...iconStyles}
                            >
                            <Text style={styles.buttonText}>
                                Login
                            </Text>
                            </Icon.Button>
                            <Text style={styles.text}>
                                OR
                            </Text>
                            <Icon.Button
                                name="users"
                                onPress={() => this.props.navigation.navigate('Users')}
                                title="Register"
                                {...iconStyles}
                            >
                            <Text style={styles.buttonText}>
                                Register
                            </Text>
                            </Icon.Button>
                        </View>
            <View style={styles.buttons}>
              <Icon.Button
                name="facebook"
                backgroundColor="#3b5998"
                onPress={this.loginWithFacebook}
                {...iconStyles}
              >
                Login with Facebook
              </Icon.Button>
              <Icon.Button
                name="google"
                backgroundColor="#DD4B39"
                onPress={this.loginWithGoogle}
                {...iconStyles}
              >
                Or with Google
              </Icon.Button>
            </View>
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
      input :{
          height:40,
          backgroundColor:'rgba(255,255,255,0.2)',
          marginBottom:10,
          color:'black',
          paddingHorizontal:10,
          fontSize:20
          },
       buttonContainer :{
          backgroundColor:'#2c3e50',
          paddingVertical:15
          },
       buttonText:{
          textAlign: 'center',
          color:'#FFFFFF',
          fontWeight: '600',
          fontSize: 20
          },
});
//AppRegistry.registerComponent('Login', () => Login);
/*render() {
    return (
        
        <View style={styles.container} >
            <View style={styles.logoContainer}>
                <Image style={styles.logo}
                source={require('NewApp/images/logo.png')}
                />
                <Text style={styles.textStyle}>Long Life</Text>
            </View>
            <View style={styles.formContainer}>
            <LoginForm/>
            </View>
        </View>

         );
  }
}
      /*container :{
          flex: 1,
          backgroundColor:'#34495e'

      },*/
      /*logoContainer :{
          alignItems: 'center',
          flexGrow: 1,
          justifyContent:'center'
          },
      logo :{
          width: 100,
          height: 100
      },
      textStyle:{
          //...defaultStyles.text,
          fontSize: 20,
          fontWeight: 'bold',
          color : 'white',
          marginTop: 10,
          textAlign:'center',
          opacity: 0.9
      }
    });*/

    /*handleOpenURL = ({ url }) => {
              // Extract stringified user string out of the URL
              const [, user_string] = url.match(/user=([^#]+)/);
              this.setState({
                // Decode the user string and parse it into JSON
                user: JSON.parse(decodeURI(user_string))
              });
              if (Platform.OS === 'ios') {
                SafariView.dismiss();
              }
            };*/

            /*<View style={styles.content}>
                          <Text style={styles.header}>
                            Welcome Stranger!
                          </Text>
                          <View style={styles.avatar}>
                            <Icon name="user-circle" size={100} color="rgba(0,0,0,.09)" />
                          </View>
                          <Text style={styles.text}>
                            Please log in to continue {'\n'}
                            to the awesomness
                          </Text>
                        </View>*/