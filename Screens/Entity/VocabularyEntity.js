import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import Tts from 'react-native-tts';
import firebase from '@react-native-firebase/app';
let VocabularyList;
let key;
export default class VocabularyEntity extends Component {
 
  state = {};
  loadFromDataBase = async () => {
    try {
      let q1 = firebase.database().ref('Vocabulary/'+this.props.route.params.key);
      q1.on('value', (datasnap) => {
        VocabularyList = datasnap.val();
        console.log(VocabularyList);
        if (VocabularyList != null) {
          this.setState({repaint: 1});
        }
      });
    } catch (e) {}
  };
  constructor(props) {
    super(props);
    this.state = {repaint: 0};
    this.loadFromDataBase();
  }
  speech(content) {
    Tts.stop();
    console.log('speech');
    Tts.speak(content);
  }
  render() {
    return (
      <View>
        <FlatList
          data={VocabularyList}
          numColumns={1}
          renderItem={({item}) => (
            <View style={styles.style}>
              <TouchableOpacity
                onPress={() => {
                  this.speech(item.word);
                }}>
                <Text style={{width:400, marginLeft:20,fontSize:20}}>
                  {item.word}:{" "} {item.mean}
                </Text>
                <Text style={{fontWeight:"bold", marginLeft:20,fontSize:17}}>{item.read}</Text>
                <Text style={{width:410, marginLeft:20, fontSize:17}}>{item.explain}</Text>
              </TouchableOpacity>
            </View>
          )}
          keyExtractor={(item) => item.word}
        />
        <TouchableOpacity
          onPress={() => {
            this.props.navigation.navigate('Practice');
          }}>
          <Text style={styles.footerText}>Luyện Tập</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  style: {
    height: 110,
    marginTop: 1,
    backgroundColor: '#e5e5e5',
    borderColor: '#bbbbbb',
    borderWidth: 2,
    paddingTop:10
  },
  
  footerText: {
    color: 'rgb(0,191,255)	',
    fontWeight: 'bold',
    fontSize: 25,
    marginRight: 10,
    marginTop: 10,
  },
});
