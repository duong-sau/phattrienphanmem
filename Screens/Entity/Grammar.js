import React, {Component} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
} from 'react-native';

export default class Grammar extends Component {
  state = {};

  constructor(props) {
    super(props);
  }

  static propTypes = {};

  componentDidMount() {
  }

  render() {
    return (
      <View>
        <FlatList
          data={[
            {
              content: 'Cấu trúc chung của 1 câu',
              content1: '1',
              key: 'G1',
            },
            {
              content: 'Câu bị động',
              content1: '2',
              key: 'G2',
            },
            {
              content: 'Câu cầu khiến',
              content1: '3',
              key: 'G3',
            },
            {
              content: 'Đại từ nhân xưng',
              content1: '4',
              key: 'G4',
            },
            {
              content: 'Tân ngữ',
              content1: '5',
              key: 'G5',
            },
            {
              content: 'Các thì hiện tại',
              content1: '6',
              key: 'G6',
            },
            {
              content: 'Các thì quá khứ',
              content1: '7',
              key: 'G7',
            },
            {
              content: 'Các thì tương lai',
              content1: '8',
              key: 'G8',
            },
            {
              content: 'Câu điều kiện',
              content1: '9',
              key: 'G9',
            },
          ]}
          numColumns={1}
          renderItem={({item}) => (
            <View style={styles.style}>
              <TouchableOpacity
                onPress={() => {
                  this.props.navigation.navigate('GrammarEntity', {
                    title: item.content,
                      key:item.key,
                  });
                }}>
                <View style={styles.circle}>
                  <Text style={styles.textCircle}>{item.content1}</Text>
                </View>
                <Text style={styles.content}>{item.content}</Text>
              </TouchableOpacity>
            </View>
          )}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  style: {
    flex: 1,
    borderColor: '#e5e5e5',
    borderWidth: 2,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  content: {
    marginTop: -37,
    fontSize: 20,
    marginLeft: '18%',
    marginBottom: 20,
    fontWeight: 'bold',
  },
  grammarTitle: {
    height: 70,
    backgroundColor: 'rgb(60,179,113)	',
    display: 'flex',
    flexDirection: 'row',
  },
  textTitle: {
    color: 'white',
    fontSize: 25,
    marginLeft: 25,
    marginTop: 17,
    fontWeight: 'bold',
  },
  circle: {
    width: 50,
    height: 50,
    backgroundColor: 'rgb(0,206,209)	',
    borderRadius: 30,
    borderWidth: 1,
    borderColor: '#fff',
    marginTop: 5,
    marginLeft: 10,
  },
  textCircle: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 25,
    textAlign: 'center',
    marginTop: 8,
  },
});
