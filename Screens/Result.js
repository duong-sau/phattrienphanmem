import React, {Component} from 'react';
import {Text, View, StyleSheet, TouchableOpacity, Image} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
const dung = 'Số câu bạn đã làm đúng               ';
const sai = 'Số câu bạn đã làm sai                ';
const unfinished = 'Số câu bạn chưa làm                  ';
var R;
export default class Result extends Component {
  state = {};

  constructor(props) {
    super(props);
    R = this;
  }

  static propTypes = {};

  componentDidMount() {}

  render() {
    return (
      <View style={styles.style}>
        <View style={styles.titleFrame}>
          <Icon name="arrow-left" color="white" size={30} />
          <Text style={styles.titleText}>{this.props.route.params.title}</Text>
        </View>
        <View>
          <Text style={styles.result}>
            {dung} {this.props.route.params.dung}
          </Text>
          <Text style={styles.result}>
            {sai} {this.props.route.params.sai}
          </Text>
          <Text style={styles.result}>
            {unfinished} {this.props.route.params.unfinished}
          </Text>
        </View>
        <View style={styles.footer}>
          <TouchableOpacity
            style={{width: 50, height: 50}}
            onPress={() => {
              this.props.navigation.replace('Practice', {
                title: R.props.route.params.title,
                key: R.props.route.params.key,
              });
            }}>
            <Image
              style={{
                width: 50,
                height: 50,
              }}
              source={require('../src/repeat.png')}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={{width: 50, height: 50}}
            onPress={() => {
              this.props.navigation.navigate('Grammar');
            }}>
            <Image
              style={{
                width: 50,
                height: 50,
              }}
              source={require('../src/check.png')}
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  style: {
    flex: 1,
    justifyContent: 'space-between',
  },
  result: {
    padding: 20,
    fontSize: 18,
  },
  footer: {
    flexDirection: 'row',
    backgroundColor: 'rgb(60,179,113)',
    height: 50,
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
});
