import React, {Component} from 'react';
import {Text, View, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {LoginButton} from 'react-native-fbsdk';
import {GoogleSigninButton} from '@react-native-community/google-signin';
import '@react-native-firebase/database';
import Icon from 'react-native-vector-icons/FontAwesome';
export default class Login extends Component {
  state = {};


  render() {
    return (
      <View style={{backgroundColor: 'white', alignItems: 'center'}}>
        <Text style={styles.titleApp}>FoxEnglish</Text>
        <Text style={styles.wordApp}>Learning is the eye of the mind</Text>
        <MrFox />
        <View style={styles.style}>
          <ButtonLogin />
        </View>
      </View>
    );
  }
}
export class ButtonLogin extends Component {
  render() {
    if (global.isLogin === 1) {
      return (
        <LoginButton
       
    } else if (global.isLogin === 0) {
      return (
        <View>
          <LoginButton
            onLoginFinished={(error, result) => {
              global.loginFB(error, result);
            }}
            onLogoutFinished={() => {
              global.logout();
            }}
          />
         
        </View>
      );
    } else if (global.isLogin === 2) {
      return (
        <TouchableOpacity
          style={{borderWidth: 1, borderColor: 'red'}}
          onPress={() => {
            global.logout();
          }}>
          <Icon name="arrow-left" color="white" size={30} />
          <Text style={{fontSize: 50}}>đăng xuất</Text>
        </TouchableOpacity>
      );
    }
  }
}

const styles = StyleSheet.create({
  titleApp: {
    fontSize: 50,
    fontWeight: 'bold',
    color: 'rgb(50,205,50)',
    textAlign: 'center',
    marginTop: 60,
  },
  wordApp: {
    marginTop: 10,
    fontSize: 20,
    marginLeft: 0,
    fontWeight: 'bold',
  },
  titleimage: {
    marginLeft: '5%',
    marginTop: '10%',
    height: '20%',
  },

 
});
