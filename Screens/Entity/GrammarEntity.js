import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import GrammarContent from '../../Compoment/GrammarContent';
let da = Object.values(require('./Grammar/G1.json'));
function GrammarEntity({navigation, route}) {
  return (
    <View style={styles.style}>
      <View style={styles.titleFrame}>
        <Icon name="arrow-left" color="white" size={30} />
        <Text style={styles.titleText}>{route.params.title}</Text>
      </View>
      <ScrollView>
        <View>
          <GrammarContent type={da[0].type} content={da[0].content} />
        </View>
        <Text style={styles.exm}>{da[1].content}</Text>
        <Text style={styles.cot}>{da[2].content}</Text>
        <Text style={styles.exm}>{da[3].content}</Text>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Practice', {
              title: route.params.title,
              key: route.params.key,
            });
          }}>
          <Text style={styles.footerText}>Luyện Tập</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  style: {
    flex: 1,
  },
  footerText: {
    color: 'rgb(0,191,255)	',
    fontWeight: 'bold',
    fontSize: 25,
    marginRight: 10,
    marginTop: 10,
  },
  titleFrame: {
    width: '100%',
    height: '8%',
    backgroundColor: 'rgb(60,179,113)',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  titleText: {
    color: 'white',
    fontSize: 25,
    fontWeight: 'bold',
    marginLeft: 20,
  },
});
export default GrammarEntity;
