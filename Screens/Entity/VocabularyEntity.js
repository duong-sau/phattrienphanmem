import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  ScrollView,
  Image,
} from 'react-native';

export default class VocabularyEntity extends Component {
  state = {};

  constructor(props) {
    super(props);
  }

  static propTypes = {};

  componentDidMount() {}

  render() {
    return (
      <ScrollView>
        <FlatList
          data={DATA}
          numColumns={1}
          renderItem={({item}) => (
            <View style={styles.style}>
              <TouchableOpacity onPress={() => {}}>
                <Text style={styles.word}>
                  {item.word}: {item.mean}
                </Text>
                <Text style={styles.word}>{item.read}</Text>
                <Text style={styles.word}>{item.explain}</Text>
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
      </ScrollView>
    );
  }
}

let DATA = [
  {
    word: 'Abide by ',
    mean: ' (v)  tuân theo, tuân thủ',
    explain: 'dùng để chào hỏi',
    read: "/ə' baid/",
  },
  {
    word: 'Agreement (n)',
    mean: '  (n) hợp đồng, giao kèo',
    explain: 'Dùng để chào hỏi',
    read: "/ə 'gri:mənt/",
  },
  {
    word: 'Agree',
    mean: 'đồng ý, tán thành',
    explain: 'Dùng để chào hỏi',
    read: "/ə'gri:/",
  },
  {
    word: 'Assurance ',
    mean: '(n) sự chắc chắn',
    explain: 'Dùng để chào hỏi',
    read: "/ə' ʃuərəns/",
  },
  {
    word: 'cancellation',
    mean: 'sự hủy bỏ, sự bãi bỏ',
    explain: 'Dùng để chào hỏi',
    read: "kænse'leiʃn/",
  },
  {
    word: 'determine ',
    mean: 'quyết định',
    explain: 'quyết định, xác định',
    read: "/di'tə:min/",
  },
  {
    word: 'determine ',
    mean: 'xin chào',
    explain: 'quyết định, xác định',
    read: "/di'tə:min/",
  },
  {
    word: 'determine ',
    mean: 'xin chào',
    explain: 'quyết định, xác định',
    read: "/di'tə:min/",
  },
  {
    word: 'determine ',
    mean: 'xin chào',
    explain: 'quyết định, xác định',
    read: "/di'tə:min/",
  },
  {
    word: 'determine ',
    mean: 'xin chào',
    explain: 'quyết định, xác định',
    read: "/di'tə:min/",
  },
  {
    word: 'determine ',
    mean: 'xin chào',
    explain: 'quyết định, xác định',
    read: "/di'tə:min/",
  },
];

const styles = StyleSheet.create({
  style: {
    height: 70,
    marginTop: 1,
    backgroundColor: '#e5e5e5',
    borderColor: '#bbbbbb',
    borderWidth: 2,
  },
  word: {
    marginLeft: '5%',
    fontSize: 15,
  },
  footerText: {
    color: 'rgb(0,191,255)	',
    fontWeight: 'bold',
    fontSize: 25,
    marginRight: 10,
    marginTop: 10,
  },
});
