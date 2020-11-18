import React, {Component} from 'react';
import {Text, View, StyleSheet, TouchableOpacity, Image} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';
const correct = 'Số câu bạn đã làm đúng               ';
const unCorrect = 'Số câu bạn đã làm sai                   ';
const unfinished = 'Số câu bạn chưa làm                    ';
let R;
export default class Result extends Component {
  constructor(props) {
    super(props);
    R = this;
  }

  render() {
    return (
      <View style={styles.style}>
        
    );
  }
}

const styles = StyleSheet.create({

});
