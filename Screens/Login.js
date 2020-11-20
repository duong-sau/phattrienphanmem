import React, {Component} from 'react';
import {Text, View, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {LoginButton} from 'react-native-fbsdk';
import {GoogleSigninButton} from '@react-native-community/google-signin';
import '@react-native-firebase/database';
import Icon from 'react-native-vector-icons/FontAwesome';
export default class Login extends Component {
  state = {};

  constructor(props) {
    super(props);
    global.L = this;
    this.state = {
      repaint: 0,
    };
  }
  static propTypes = {};
  componentDidMount() {}

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
          onLoginFinished={(error, result) => {
            global.loginFB(error, result);
          }}
          onLogoutFinished={() => {
            global.logout();
          }}
        />
      );
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
          <GoogleSigninButton
            style={{width: 196, height: 40}}
            size={GoogleSigninButton.Size.Wide}
            color={GoogleSigninButton.Color.Dark}
            onPress={() => {
              global.loginGG();
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
    } else {
      return (
        <TouchableOpacity
          style={{borderWidth: 1, borderColor: 'red', }}
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
export class MrFox extends Component {
  render() {
    if (global.isLogin === 0) {
      return (
        <View>
          <Image style={styles.image} source={require('../src/mrfox.png')} />
        </View>
      );
    } else {
      return (
        <View style={{alignItems: 'center'}}>
          <Image style={styles.image} source={{uri: global.userPicture}} />
          <Text style={styles.textTitle}>Xin Chào {global.userName}</Text>
        </View>
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

  textTitle: {
    color: 'black',
    fontSize: 30,
    marginTop: 50,
    marginLeft: 0,
    fontWeight: 'bold',
  },
  image: {
    marginTop: 30,
    marginLeft: 0,
    width: 250,
    height: 250,
  },
  style: {
    width: '100%',
    height: '90%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: 30,
  },
  facebook_text: {
    fontSize: 24,
    color: '#FFFFFF',
  },
  google_text: {
    fontSize: 24,
    color: 'black',
  },
  facebook_icon: {
    marginTop: 2,
  },
  facebook_button: {
    marginTop: 16,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  google_button: {
    marginTop: 16,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  google_icon: {
    marginTop: 3,
    marginLeft: -10,
    marginRight: 10,
  },
  google_image: {
    width: 28,
    height: 28,
  },
  facebook: {
    width: '40%',
    height: '10%',
    borderRadius: 10,
    backgroundColor: '#3b5998',
    elevation: 7,
  },
  google: {
    alignItems: 'center',
    width: '40%',
    height: '10%',
    borderRadius: 10,
    backgroundColor: 'white',
    borderWidth: 2,
    borderColor: 'white',
    elevation: 7,
  },
  fox: {
    width: '30%',
    height: '10%',
  },
});
