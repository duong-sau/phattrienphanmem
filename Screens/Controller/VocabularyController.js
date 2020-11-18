import React, {Component} from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {DrawerActions} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Vocabulary from '../Entity/Vocabulary';
import VocabularyEntity from '../Entity/VocabularyEntity';
import Icon from 'react-native-vector-icons/FontAwesome';

const Stack = createStackNavigator();
let V;
export default class VocabularyController extends Component {


  render() {
    return (
      <Stack.Navigator>
      
        <Stack.Screen
         
                />
              </TouchableOpacity>
            ),
            headerTitleStyle: {fontSize: 24},
            headerStyle: {backgroundColor: 'rgb(60,179,113)'},
          }}
          name="Vocabulary"
          component={VocabularyEntity}
        />
      </Stack.Navigator>
    );
  }
}
