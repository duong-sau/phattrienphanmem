import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import GrammarContent from '../../Compoment/GrammarContent';
let data1 = Object.values(require('./Grammar/G1.json'));
let data2 = Object.values(require('./Grammar/G2.json'));
let data3 = Object.values(require('./Grammar/G3.json'));
let data4 = Object.values(require('./Grammar/G4.json'));
let data5 = Object.values(require('./Grammar/G5.json'));
let data6 = Object.values(require('./Grammar/G6.json'));
let data7 = Object.values(require('./Grammar/G7.json'));
let data8 = Object.values(require('./Grammar/G8.json'));
let data9 = Object.values(require('./Grammar/G9.json'));
let data10 = Object.values(require('./Grammar/G10.json'));
const dataJson= {
  G1: data1,
  G2: data2,
  G3: data3,
  G4: data4,
  G5: data5,
  G6: data6,
  G7: data7,
  G8: data8,
  G9: data9,
  G10: data10,
}
function GrammarEntity({navigation, route}) {
  let key=route.params.key;
  let da=dataJson[key];
  return (
    <View style={styles.style}>
      <View style={styles.titleFrame}>
        <Icon name="arrow-left" color="white" size={30} />
        <Text style={styles.titleText}>{route.params.title}</Text>
      </View>
      <ScrollView>
        <GrammarContent />
        <Text style={styles.exm}>{da[1].content}</Text>
        <View><Image  source={require('https://cdn.vungoi.vn/vungoi/1535765661298_Cac_thi.png')}></Image></View>

        <TouchableOpacity
          style={styles.submit_button}
          onPress={() => {
            navigation.replace('Practice', {
              title: route.params.title,
              key: route.params.key,
            });
          }}>
          <Text style={styles.footerText}>
            Đã hoàn thành {global.grammarAchievements[global.grammarState] * 20}{' '}
            %
          </Text>
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
    fontSize: 15,
    color: '#fff',
    fontWeight: 'bold',
    alignSelf: 'center',
    textTransform: 'uppercase',
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
  submit_button: {
    elevation: 8,
    backgroundColor: 'rgb(0,191,255)',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,
    marginLeft: 30,
    marginRight: 30,
  },
});
export default GrammarEntity;
