import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  CheckBox,
  Alert,
  AsyncStorage,
} from 'react-native';
import firebase from '@react-native-firebase/app';
import '@react-native-firebase/database';
import Icon from 'react-native-vector-icons/FontAwesome';
let P;
let data = [];
let questionList = [];
let answer = [];
let numberQuestion = 0;
let max = 1;
let dung = 0;
let sai = 0;
let unfinished = 0;
let questionValue;
let key;
let sort = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

export default class Practice extends Component {
  constructor({props}) {
    super(props);
    P = this;
    this.state = {
      answer: -1,
      question: 0,
      number: 1,
      s: 0,
    };
  }
  loadFromDataBase = async () => {
    try {
      let q1 = firebase.database().ref(key);
      q1.on('value', (datasnap) => {
        questionValue = datasnap.val();
        P.build();
        if (questionValue != null) {
          P.saveFromDataBase();
        }
      });
    } catch (e) {}
  };
  saveFromDataBase = async () => {
    await AsyncStorage.setItem(key, JSON.stringify(questionValue))
      .then(() => {})
      .catch(() => {});
  };
  build() {
    try {
      questionList = Object.values(questionValue);
      console.log('gói câu hỏi: ', questionList);
      data = Object.values(questionList[numberQuestion]);
      P.reconvert();
      console.log('câu hỏi đầu tiên là:   ', data);
      max = questionList.length - 1;
      for (let i = 0; i <= max; i++) {
        answer[i] = -1;
      }
      this.setState({
        answer: -1,
        question: 0,
        number: 1,
        s: 0,
      });
      for (let i = 0; i <= max; i++) {
        sort[i] = Math.round(Math.random() * 4);
      }
      this.setState({s: 0});
    } catch (e) {
      P.props.navigation.replace('Grammar');
      Alert.alert('Chúng tôi sẽ sớm cho ra mắt nội dung này');
    }
  }
  reLoad = async () => {
    try {
      let questionsString = await AsyncStorage.getItem(key);
      if (questionsString == null) {
        this.loadFromDataBase();
        Alert.alert(
          'Bạn chưa tải bài học này\n bài tập sẽ được tự động tải về',
        );
      } else {
        questionValue = JSON.parse(questionsString);
        this.build();
      }
    } catch (e) {
      this.loadFromDataBase();
    }
  };
  componentDidMount() {
    key = this.props.route.params.key.toString();
    this.reLoad();
  }

  select(id) {
    this.setState({
      answer: id,
    });
  }
  save() {
    answer[numberQuestion] = P.state.answer;
  }
  resum() {
    data = Object.values(questionList[numberQuestion]);
    P.reconvert();
    this.setState({
      answer: answer[numberQuestion],
      question: numberQuestion,
    });
  }
  reconvert() {
    let mid = data[2];
    data[2] = data[4];
    data[4] = mid;
  }
  next() {
    if (numberQuestion >= max) {
    } else {
      this.save();
      numberQuestion = numberQuestion + 1;
      this.resum();
    }
  }
  back() {
    if (numberQuestion <= 0) {
    } else {
      this.save();
      numberQuestion = numberQuestion - 1;
      this.resum();
    }
  }
  submit() {
    this.save();

    for (let i = 0; i <= max; i++) {
      if (answer[i] == 0) {
        dung = dung + 1;
      } else if (answer[i] == -1) {
        unfinished = unfinished + 1;
      } else {
        sai = sai + 1;
      }
    }
  }
  reset() {
    numberQuestion = 0;
    dung = 0;
    sai = 0;
    unfinished = 0;
  }
  render() {
    return (
      <View style={styles.style}>
        <View style={styles.titleFrame}>
          <Icon name="arrow-left" color="white" size={30} />
          <Text style={styles.titleText}>
            {this.props.route.params.title}
            {'     '}
            {this.state.question + 1}
            {'/'}
            {max + 1}
          </Text>
        </View>
        <View style={styles.question}>
          <Text style={styles.question}>
            {this.state.question + 1}. {data[4]}
          </Text>
        </View>
        <View style={styles.answerFrame}>
          <Answer
            content={data[(sort[P.state.question] + 1) % 4]}
            id={(sort[P.state.question] + 1) % 4}
          />
          <Answer
            content={data[(sort[P.state.question] + 2) % 4]}
            id={(sort[P.state.question] + 2) % 4}
          />
          <Answer
            content={data[(sort[P.state.question] + 3) % 4]}
            id={(sort[P.state.question] + 3) % 4}
          />
          <Answer
            content={data[(sort[P.state.question] + 4) % 4]}
            id={(sort[P.state.question] + 4) % 4}
          />
        </View>
        <View style={styles.footer}>
          <Image style={styles.image} source={require('../src/lamp.png')} />
          <TouchableOpacity
            onPress={() => {
              this.submit();
              this.props.navigation.replace('Result', {
                dung: dung,
                sai: sai,
                unfinished: unfinished,
                title: this.props.route.params.title,
                key: this.props.route.params.key,
              });
              this.reset();
            }}>
            <Text style={styles.footerText}>TIẾP THEO</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              this.next();
            }}>
            <Text style={styles.footerText}>Next</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              this.back();
            }}>
            <Text style={styles.footerText}>Back</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

function isSelect(state, id) {
  if (state === id) {
    return true;
  } else {
    return false;
  }
}
export class Answer extends Component {
  render() {
    return (
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
        }}>
        <CheckBox
          style={styles.checkbox}
          value={isSelect(P.state.answer, this.props.id)}
          onChange={() => {
            P.select(this.props.id);
          }}
        />
        <Text style={styles.content}>
          {this.props.id}
          {this.props.content}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
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
    marginLeft: 0,
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
    color: 'rgb(0,191,255)',
    fontWeight: 'bold',
    fontSize: 25,
    marginRight: 10,
    marginTop: 10,
  },
  image: {
    width: 50,
    height: 50,
  },
  checkbox: {},
});
