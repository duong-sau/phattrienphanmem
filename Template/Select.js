import React, { Component } from 'react';
import { Text, StyleSheet, FlatList, View, TouchableOpacity, Image} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
export default class Select extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <View style={styles.titleFrame}>
          <View style={styles.icons} />
          <Text style={styles.titleText}>FoxEnglish Application</Text>
        </View>
        <TouchableOpacity
          style={{ backgroundColor: "rgb(60,179,113)", height: 70, width: 380, borderRadius: 35, marginTop: 60, marginLeft: 15 }}
          onPress={() => {
            global.L.props.navigation.replace('SideMenu', { command: 0 });
          }}>
          <Text style={{ fontSize: 25, color: "white", textAlign: "center", fontWeight: "bold", marginTop: 20 }}>GRAMMAR</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{ backgroundColor: "rgb(60,179,113)", height: 70, width: 380, borderRadius: 35, marginTop: 30, marginLeft: 15 }}

          onPress={() => {
            global.L.props.navigation.replace('SideMenu', { command: 1 });
          }}>
          <Text style={{ fontSize: 25, color: "white", textAlign: "center", fontWeight: "bold", marginTop: 20 }}>VOCABULARY</Text>
        </TouchableOpacity>
        <TouchableOpacity
           style={{ backgroundColor: "rgb(60,179,113)", height: 70, width: 380, borderRadius: 35, marginTop: 30, marginLeft: 15 }}
          onPress={() => {
            global.L.props.navigation.replace('SideMenu', { command: 2 });
          }}>
          
          <Text style={{ fontSize: 25, color: "white", textAlign: "center", fontWeight: "bold", marginTop: 20 }}>LOG OUT</Text>
        </TouchableOpacity>
        <Text style={{color:"#808080", fontSize:20, marginTop:20, textAlign:"center"}}>Learning is the eye of the mind</Text>
        <Image style={{ width: 170, height: 170, marginTop: 30, marginLeft:120 }} source={require('../src/mrfox.png')} />
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
    height: '10%',
    backgroundColor: 'rgb(60,179,113)',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  titleText: {
    color: 'white',
    fontSize: 25,
    fontWeight: 'bold',
    marginLeft: '20%',
    width:"100%"
   
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
