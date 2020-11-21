import React, { Component } from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { LoginButton } from 'react-native-fbsdk';
import { GoogleSigninButton } from '@react-native-community/google-signin';
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
  componentDidMount() { }

  render() {
    return (
      <View style={{ backgroundColor: 'white', alignItems: 'center' }}>
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
        <View style={{ display: "flex", flexDirection: "row" }}>
          <TouchableOpacity
            style={{ backgroundColor: "rgb(60,179,113)", height: 60, width: 130, borderRadius: 5 }}
            onPress={() => {
              global.logout();
            }}>
            <Text style={{ fontSize: 25, color: "white", fontWeight: "bold", textAlign: "center", marginTop: 13 }}>Đăng xuất</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{ backgroundColor: "rgb(60,179,113)", height: 60, width: 130, borderRadius: 5, marginLeft: 10 }}
            onPress={() => {
              global.L.props.navigation.replace('Select');
            }}>
            <Text style={{ fontSize: 25, color: "white", fontWeight: "bold", textAlign: "center", marginTop: 13 }}>Tiếp tục</Text>
          </TouchableOpacity>
        </View>
      );
    } else if (global.isLogin === 0) {
      return (
        <View>
          <View style={{
            width: 200, height: 40, backgroundColor: "#4267B2",
            position: "absolute", top: 20, left: 2, borderRadius: 5
          }}>
            <Icon name="facebook-square" size={30} color="white" style={{
              marginLeft: 10,
              marginTop: 4
            }}></Icon>
            <Text style={{
              marginTop: -25, marginLeft: 45, color: "white",
              fontWeight: "bold"
            }}>Sign in with Facebook</Text>
          </View>
          <LoginButton
            style={{ height: 40, width: 200, marginTop: 20, marginLeft: 2, opacity: 0 }}
            onLoginFinished={(error, result) => {
              global.loginFB(error, result);
            }}
            onLogoutFinished={() => {
              global.logout();
            }}
          />
          <View style={{
            width: 200, height: 40, backgroundColor: "#DB4437",
            position: "absolute", top: 80, left: 2, borderRadius: 5
          }}>
            <Icon name="google-plus-square" size={32} color="white"
              style={{ marginLeft: 10, marginTop: 4 }}></Icon>
            <Text style={{
              marginTop: -25, marginLeft: 45, color: "white",
              fontWeight: "bold"
            }}>Sign in with Google</Text>
          </View>
          <GoogleSigninButton
            style={{ height: 40, width: 200, marginTop: 20, marginLeft: 2, opacity: 0 }}
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
        <View style={{ display: "flex", flexDirection: "row" }}>
          <TouchableOpacity
            style={{ backgroundColor: "rgb(60,179,113)", height: 60, width: 130, borderRadius: 5 }}
            onPress={() => {
              global.logout();
            }}>
            <Text style={{ fontSize: 25, color: "white", fontWeight: "bold", textAlign: "center", marginTop: 13 }}>Đăng xuất</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{ backgroundColor: "rgb(60,179,113)", height: 60, width: 130, borderRadius: 5, marginLeft: 10 }}
            onPress={() => {
              global.L.props.navigation.replace('Select');
            }}>
            <Text style={{ fontSize: 25, color: "white", fontWeight: "bold", textAlign: "center", marginTop: 13 }}>Tiếp tục</Text>
          </TouchableOpacity>
        </View>
      );
    } else {
      return (
        <View style={{ display: "flex", flexDirection: "row" }}>
          <TouchableOpacity
            style={{ backgroundColor: "rgb(60,179,113)", height: 60, width: 130, borderRadius: 5 }}
            onPress={() => {
              global.logout();
            }}>
            <Text style={{ fontSize: 25, color: "white", fontWeight: "bold", textAlign: "center", marginTop: 13 }}>Đăng xuất</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{ backgroundColor: "rgb(60,179,113)", height: 60, width: 130, borderRadius: 5, marginLeft: 20 }}
            onPress={() => {
              global.logout();
            }}>
            <Text style={{ fontSize: 25, color: "white", fontWeight: "bold", textAlign: "center", marginTop: 13 }}>Tiếp tục</Text>
          </TouchableOpacity>
        </View>


      );
    }
  }
}
export class MrFox extends Component {
  render() {
    if (global.isLogin === 0) {
      return (
        <View>
          <Image style={{ width: 250, height: 250, marginTop: 30 }} source={require('../src/mrfox.png')} />
        </View>
      );
    } else {
      return (
        <View style={{ alignItems: 'center' }}>
          <Image style={{ width: 150, height: 150, marginTop: 30 }} source={require('../src/mrfox.png')} />

          <Image style={styles.image} source={{ uri: global.userPicture }} />
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
    fontSize: 20,
    marginTop: 20,
    marginLeft: 0,
    fontWeight: 'bold',
  },
  image: {
    marginTop: 50,
    marginLeft: 0,
    width: 100,
    height: 100,
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
