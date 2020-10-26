import React, {Component} from 'react';
import {Text, View, StyleSheet, Image, AsyncStorage} from 'react-native';
import {
  AccessToken,
  LoginButton,
  GraphRequest,
  GraphRequestManager,
} from 'react-native-fbsdk';
import firebase from '@react-native-firebase/auth';
import '@react-native-firebase/database';
import '@react-native-firebase/app';
let L;
export default class Login extends Component {
  state = {};

  constructor(props) {
    super(props);
    L = this;
    this.state = {
      islogin: 0,
      userName: '',
      userPictuer: '',
      userTocken: '',
    };
  }
  loginFB() {}
  loginGg() {}
  static propTypes = {};
  _resume = async () => {
    const userName = await AsyncStorage.getItem('userName');
    const userPicture = await AsyncStorage.getItem('userPicture');
    const userTocken = await AsyncStorage.getItem('userTocken');
    this.setState({
      userName: userName,
      userPicture: userPicture,
      userTocken: userTocken,
    });
    if (this.state.userName == null && this.state.userTocken == null) {
      this.setState({
        islogin: 0,
      });
      console.log(' chưa đăng nhập ');
    } else {
      this.setState({
        islogin: 1,
      });
      console.log(' đã đăng nhập từ trước');
    }
  };
  _save = async () => {
    await AsyncStorage.setItem('userName', this.state.userName);
    await AsyncStorage.setItem('userPicture', this.state.userPicture);
    await AsyncStorage.setItem('userTocken', this.state.userTocken);
  };
  _remove = async () => {
    await AsyncStorage.removeItem('userName');
    await AsyncStorage.removeItem('userPicture');
    await AsyncStorage.removeItem('userTocken');
    L.setState({
      islogin: 0,
    });
  };
  _auth() {
    const credential = firebase.auth.FacebookAuthProvider.credential(
      L.state.userTocken.toString(),
    );
    return firebase.auth().signInWithCredential(credential);
  }
  componentDidMount() {
    this._resume();
  }

  render() {
    return (
      <View style={{backgroundColor: 'white', alignItems: 'center'}}>
        <Text style={styles.titleApp}>FoxEnglish</Text>
        <Text style={styles.wordApp}>Learning is the eye of the mind</Text>
        <MrFox />

        <View style={styles.style}>
          <LoginButton
            onLoginFinished={(error, result) => {
              if (error) {
                console.log('lỗi');
              } else if (result.isCancelled) {
                console.log('hủy');
              } else {
                console.log('đăngnhập:   ');
                AccessToken.getCurrentAccessToken().then((data) => {
                  const infoRequest = new GraphRequest(
                    '/me?fields=name,picture',
                    null,
                    this._responseInfoCallback,
                  );
                  this.setState({userTocken: data.accessToken});
                  console.log('chìa khóa:   ', this.state.userTocken);
                  new GraphRequestManager().addRequest(infoRequest).start();
                });
              }
            }}
            onLogoutFinished={() => {
              console.log('logout.');
              L._remove();
            }}
          />
        </View>
      </View>
    );
  }
  _responseInfoCallback = (error, result) => {
    if (error) {
    } else {
      L.setState({
        userName: result.name,
        userPicture: result.picture.data.url,
        islogin: 1,
      });
      console.log(L.state.userName);
      console.log(L.state.userPicture);
      console.log(L.state.userTocken);
      L._save();
    }
  };
}
export class MrFox extends Component {
  render() {
    if (L.state.islogin === 0) {
      console.log(' trả về fox ở chế độ chưa đăng nhạp');
      return (
        <View style={{alignItems: 'center'}}>
          <Image style={styles.image} source={require('../src/mrfox.png')} />
          <Text style={styles.textTitle}>Sign In With</Text>
        </View>
      );
    } else {
      console.log(' trả về fox ở chế độ đã đăng nhập');
      return (
        <View style={{alignItems: 'center'}}>
          <Image style={styles.image} source={{uri: L.state.userPicture}} />
          <Text style={styles.textTitle}>Xin Chào {L.state.userName}</Text>
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
    marginTop: 0,
    marginLeft: 0,
    width: 250,
    height: 250,
    borderRadius: 100,
  },
  style: {
    width: '100%',
    height: '75%',
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
