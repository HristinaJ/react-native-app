import React, { Component } from 'react';
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

export default class skills extends Component {
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

        <ScrollView style={{ flex: 1, padding: 20 }}>
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
        <TouchableHighlight onPress={this.onPress}>
          <View style={styles.button}>
               <Text style={styles.addButtonText}>Add</Text>
          </View>
        </TouchableHighlight>
        <View style={styles.footer}>
           {/*<Button
               style={{fontSize: 40, color: '#719DF0', borderRadius: 50, borderColor: '#ccc'}}
                 styleDisabled={{color: 'red'}}
                 onPress={() => this._handlePress()}>
                  Add!
           </Button>*/}
        </View>
     </View>
    );
  }
}

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

AppRegistry.registerComponent('skills', () => skills);