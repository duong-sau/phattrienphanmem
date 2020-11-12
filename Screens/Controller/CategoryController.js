import React, {Component} from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';

export default class CategoryController extends Component {
  render() {
    return (
      <View style={styles.style}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            this.props.navigation.replace('SideMenu', {
              id: 0,
            });
          }}>
          <Text>ngữ pháp</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            this.props.navigation.replace('SideMenu', {
              id: 1,
            });
          }}>
          <Text>từ vựng</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            this.props.navigation.replace('AboutUs');
          }}>
          <Text>aboutus</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            global.logout();
            this.props.navigation.replace('Login');
          }}>
          <Text>đăng xuất</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  style: {},
  button: {
    width: 100,
    marginLeft: 50,
    marginTop: 50,
    height: 100,
    backgroundColor: 'red',
  },
});
