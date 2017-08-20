import React, { Component, PropTypes } from 'react';
import {
  Image,
  Linking,
  StyleSheet,
  Platform,
  Text,
  View
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import SafariView from 'react-native-safari-view';
//import { defaultStyles } from '../styles';
//import LoginForm from './LoginForm';

export default class Login extends Component {
    constructor(props, context) {
        super(props, context);
    }

    static propTypes = {
        onLoggedIn: PropTypes.func
      };

    state = {
        user: undefined,
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
          <View style={styles.content}>
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
        );
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
});

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