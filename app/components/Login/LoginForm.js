import React, { Component } from 'react';
import {
   AppRegistry,
   Text,
   View,
   TextInput,
   StyleSheet,
   TouchableOpacity,
   TouchableHighlight,
   Button
} from 'react-native';
import PropTypes from 'prop-types';

export default class LoginForm extends Component {
   constructor(props, context) {
         super(props, context);
   }

     onChange(text) {
             this.task = text;
         }

     onLoginPressed() {
             this.props.onLoginStarted()
         }

         onLoginStarted() {
                 this.props.nav.push({
                     name: 'users'
                 });
             }

  render() {
      const { Users } = this.props.navigation;
       return (
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
                <Button
                onPress={() => navigate('Users')}
                title="Open Users"
                />
                <TouchableOpacity
                    onPress={() => this.onLoginStarted.bind(this)}//this.props.OnLoginStarted}
                    style={styles.buttonContainer} >
                        <Text style={styles.buttonText}>Login</Text>
                </TouchableOpacity>
            </View>

       );
  }
}
LoginForm.propTypes = {
     onLoginStarted: PropTypes.func,//.isRequired,
 };

const styles=StyleSheet.create({
 container :{
    padding:20
 },
 input :{
    height:40,
    backgroundColor:'rgba(255,255,255,0.2)',
    marginBottom:10,
    color:'white',
    paddingHorizontal:10,
    fontSize:20
    },
 buttonContainer :{
    backgroundColor:'#2c3e50',
    paddingVertical:15
    },
 buttonText:{
    textAlign:'center',
    color:'#FFFFFF',
    fontWeight: '600',
    fontSize: 20
    }
 });

AppRegistry.registerComponent('LoginForm', () => LoginForm);