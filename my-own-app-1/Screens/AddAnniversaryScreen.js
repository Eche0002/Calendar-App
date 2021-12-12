import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  Platform,
  StatusBar,
  SafeAreaView,
  Image,
  ImageBackground,
  KeyboardAvoidingView,
  ToastAndroid,
  TextInput,
  alert,
} from 'react-native';

import firebase from 'firebase';
import db from '../config';

export default class AddBirthdayScreen extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      anniversary: '',
    };
  }

  addBirthday = async () => {
    db.collection('Anniverssary').add({
      Name: this.state.name,
      Anniversary: this.state.anniversary,
    });
    console.log('Anniversary added');
    this.setState({
      name: '',
      anniversary: '',
    });
  };

  render() {
    return (
      <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
        <View>
          <Image
            source={require('../Images/AddAniv.gif')}
            style={{ width: 200, height: 200 }}></Image>

          <Text style={{ textAlign: 'center', fontSize: 30 }}>
            Add Anniversary
          </Text>
        </View>
        <View>
          <TextInput
            style={styles.inputBox}
            placeholder="Enter Name"
            onChangeText={(text) => this.setState({ name: text })}
            value={this.state.name}
          />

          <TextInput
            style={styles.inputBox}
            placeholder="Enter Anniversary"
            onChangeText={(text) => this.setState({ anniversary: text })}
            value={this.state.anniversary}
          />
        </View>
        
         <TouchableOpacity
          style={styles.submitButton}
          onPress={async () => {
            this.addBirthday();
          }}>
          <Text style={styles.submitButtonText}>Add</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'#F07070'
  },
  inputBox: {
    width: 180,
    height: 40,
    borderWidth: 1.5,
    borderRightWidth: 0,
    fontSize: 20,
  },
  inputView: {
    flexDirection: 'column',
    margin: 20,
  },
  submitButton: {
    backgroundColor: 'blue',
    width: 100,
    height: 50,
  },
  submitButtonText: {
    padding: 10,
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
});
