import React, {Component} from 'react';
import {Text, StyleSheet, FlatList, View, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
export default class Select extends Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <View style={styles.titleFrame}>
          <View style={styles.icons} />
          <Text style={styles.titleText}>Fox English</Text>
        </View>
        <TouchableOpacity
          style={{borderWidth: 1, borderColor: 'red'}}
          onPress={() => {
            global.L.props.navigation.replace('SideMenu', {command: 0});
          }}>
          <Icon name="arrow-left" color="white" size={30} />
          <Text style={{fontSize: 50}}>từ vựn</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{borderWidth: 1, borderColor: 'red'}}
          onPress={() => {
            global.L.props.navigation.replace('SideMenu', {command: 1});
          }}>
          <Icon name="arrow-left" color="white" size={30} />
          <Text style={{fontSize: 50}}>ngữ pháp</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{borderWidth: 1, borderColor: 'red'}}
          onPress={() => {
            global.L.props.navigation.replace('SideMenu', {command: 2});
          }}>
          <Icon name="arrow-left" color="white" size={30} />
          <Text style={{fontSize: 50}}>đăng xuất</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  style: {
    flex: 1,
    borderWidth: 5,
    borderColor: '#FFFFFF',
  },
  titleFrame: {
    width: '100%',
    height: '15%',
    backgroundColor: 'rgb(60,179,113)',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  titleText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    marginRight: '15%',
  },
  icons: {
    marginLeft: -5,
  },
  question: {
    marginLeft: '2%',
    fontSize: 20,
    flex: 4,
    marginTop: 20,
    marginBottom: -100,
    fontWeight: 'bold',
  },
  answerFrame: {
    marginTop: 180,
    marginLeft: 10,
  },
  answer: {
    display: 'flex',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
    marginTop: 55,
    fontSize: 70,
    borderColor: 'red',
    borderWidth: 1,
    flexDirection: 'row',
  },
  content: {
    fontSize: 20,
    marginLeft: '1%',
    color: 'black',
  },
  selectContent: {
    fontSize: 18,
    marginLeft: '5%',
    color: 'green',
  },
  footer: {
    marginTop: 100,
    height: 50,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  footerText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
    alignSelf: 'center',
    textTransform: 'uppercase',
  },
  image: {
    width: 50,
    height: 50,
  },
  next_button: {
    marginRight: 70,
  },
  back_button: {
    marginLeft: 80,
  },
  submit_button: {
    width: 110,
    elevation: 8,
    backgroundColor: 'rgb(60,179,113)',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,
    marginLeft: 30,
    marginRight: 30,
  },
});
