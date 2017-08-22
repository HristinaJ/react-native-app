import React, { Component, PropTypes } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TextInput,
  ScrollView,
  TouchableHighlight,
  Form,
} from 'react-native';
import CheckBox from 'react-native-icon-checkbox';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Button } from 'react-native-elements';

export default class Skills extends Component {
static navigationOptions = ({navigation}) => {
    const {state, navigate} = navigation;
      return {
        title: "Skills",
      };
  };

   constructor(props) {
    super(props);
    this.state = {
      isChecked: false,
    };
  }


  handlePressCheckedBox = (checked) => {
    this.setState({
      isChecked: checked,
    });
  }
// constructor(props, context) {
//     super(props, context);
//   }
  _handlePress() {
    console.log('Pressed!');
  }
  onPress(){
    console.log('Pressed');
  }



  render() {
    return (
     <View style={styles.container}>
          <View style={styles.header}>
            <Text style={styles.headerText}>Any special skills required?</Text>
          </View>

        <ScrollView style={{ flex: 1, padding: 20, marginBottom: 20, }}>
            <CheckBox style={{  borderWidth: 3, borderColor: '#719DF0', margin: 5}}
            label="Cleaning & Housekeeping"
            fontSize={30}
            checked={this.state.isChecked}
            onPress={this.handlePressCheckedBox}
            />
            <CheckBox style={{  borderWidth: 3,borderColor: '#719DF0', margin: 5}}
            label="Reading Books"
            fontSize={30}
            checked={this.state.isChecked}
            onPress={this.handlePressCheckedBox}
            />
            <CheckBox style={{  borderWidth: 3,borderColor: '#719DF0', margin: 5}}
            label="Meal Preparation"
            fontSize={30}
            checked={this.state.isChecked}
            onPress={this.handlePressCheckedBox}
            />
            <CheckBox style={{  borderWidth: 3,borderColor: '#719DF0', margin: 5}}
            label="Respite Care"
            fontSize={30}
            checked={this.state.isChecked}
            onPress={this.handlePressCheckedBox}
            />
            <CheckBox style={{  borderWidth: 3,borderColor: '#719DF0', margin: 5}}
            label="Bathing"
            fontSize={30}
            checked={this.state.isChecked}
            onPress={this.handlePressCheckedBox}
            />
            <CheckBox style={{  borderWidth: 3,borderColor: '#719DF0', margin: 5}}
            label="Deep Cleaning"
            fontSize={30}
            checked={this.state.isChecked}
            onPress={this.handlePressCheckedBox}
            />
             <CheckBox style={{  borderWidth: 3,borderColor: '#719DF0', margin: 5}}
            label="Aizheimers"
            fontSize={30}
            checked={this.state.isChecked}
            onPress={this.handlePressCheckedBox}
            />
             <CheckBox style={{ borderWidth: 3,borderColor: '#719DF0', margin: 5}}
            label="COPD"
            fontSize={30}
            checked={this.state.isChecked}
            onPress={this.handlePressCheckedBox}
            />
             <CheckBox style={{ borderWidth: 3,borderColor: '#719DF0', margin: 5}}
            label="Dementia"
            fontSize={30}
            checked={this.state.isChecked}
            onPress={this.handlePressCheckedBox}
            />
             <CheckBox style={{borderWidth: 3,borderColor: '#719DF0', margin: 5}}
            label="Hospice"
            fontSize={30}
            checked={this.state.isChecked}
            onPress={this.handlePressCheckedBox}
            />
             <CheckBox style={{ borderWidth: 3,borderColor: '#719DF0', margin: 5}}
            label="Incontinence"
            fontSize={30}
            checked={this.state.isChecked}
            onPress={this.handlePressCheckedBox}
            />
             <CheckBox style={{ borderWidth: 3,borderColor: '#719DF0', margin: 5}}
            label="Hoyer Lift"
            fontSize={30}
            checked={this.state.isChecked}
            onPress={this.handlePressCheckedBox}
            />

        </ScrollView>

        <Icon.Button
             name=""
             onPress={this.login}
             title="Login"
             {...iconStyles}
             alignItems = "center"
             >
             <Text style={styles.buttonText}>
             Add skills
             </Text>
        </Icon.Button>
      </View>

    );
  }
}
const iconStyles = {
      borderRadius: 0,
      iconStyle: { paddingVertical: 5 },
          };
const styles = StyleSheet.create({
  container: {
    flex: 1,

  },

  header:{
    backgroundColor: '#000',
    alignItems: "center",
    justifyContent: 'center',
    borderBottomWidth: 10,
    borderBottomColor: '#ddd',
  },
  headerText:{
    color: 'white',
    fontSize: 28,
    padding: 26,
    textAlign: "center",
  },
  scrollContainer:{
    flex: 1,
    marginBottom: 100,
  },
  // footer:{
  //   position: 'absolute',
  //   alignItems:'center',
  //   bottom: 30,
  //   left: 10,
  //   right: 10,
  // },
  buttonContainer :{
            backgroundColor:'#2c3e50',
            paddingVertical:15
            },
         buttonText:{
            textAlign: 'center',
            color:'#FFFFFF',
            fontWeight: '600',
            fontSize: 17
            },
   button: {
     position:'relative',
     alignItems:'center',
     bottom: 30,
     left: 30,
     right: 10,
     backgroundColor: '#719DF0',
     marginTop: 50,
     width: 300,
     height: 80,
     borderRadius: 50,
   },
  addButtonText:{
    color: '#fff',
    fontSize:25,
    top: 20,
  },
  textInput: {
    alignSelf: 'stretch',
    color: '#fff',
    padding: 20,
    paddingTop: 46,
    backgroundColor: '#252525',
    borderTopWidth: 2,
    borderTopColor: '#ededed',
  },
  skillsText:{
    fontSize: 30,
    borderWidth: 2,
    borderColor: '#719DF0',
    margin: 5,
    color: '#719DF0',
    paddingLeft: 5,
  }
});
