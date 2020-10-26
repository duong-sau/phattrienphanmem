import React, {Component} from 'react';
import {View, Image} from 'react-native';
import {NavigationContainer, DrawerActions} from '@react-navigation/native';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';

import GrammarController from '../Screens/Controller/GrammarController';
import VocabularyController from '../Screens/Controller/VocabularyController';
import Practice from '../Screens/Practice';
import Toeic600 from '../Screens/Toeic600';
import Login from '../Screens/Login';
import Privacy from '../Screens/Privacy';
import About from '../Screens/About';
function fox() {
  return (
    <Fox/>
  );
}
function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView
      style={{backgroundColor: 'rgb(61,255,113)', color: 'white'}}
      {...props}>
      <DrawerItem
        label={() => fox()}
        style={{height: 100, width: 100}}
        onPress={() => props.navigation.dispatch(DrawerActions.closeDrawer())}
      />
      <DrawerItemList {...props} />
      <DrawerItem
        label="close"
        onPress={() => props.navigation.dispatch(DrawerActions.closeDrawer())}
      />
    </DrawerContentScrollView>
  );
}

const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawerContent {...props} />}>
      <Drawer.Screen name="Grammar" component={GrammarController} />
      <Drawer.Screen name="Vocabulary" component={VocabularyController} />
      <Drawer.Screen name="Practice" component={Practice} />
      <Drawer.Screen name="600" component={Toeic600} />
      <Drawer.Screen name="800" component={Toeic600} />
      <Drawer.Screen name="Login" component={Login} />
      <Drawer.Screen name="Feedback" component={View} />
      <Drawer.Screen name="Privacy" component={Privacy} />
      <Drawer.Screen name="About" component={About} />
    </Drawer.Navigator>
  );
}
export class Fox extends Component {
  render() {
    return (
      <Image
        style={{width: 100, height: 100}}
        source={require('../src/mrfox.png')}
      />
    );
  }
}
export default function App() {
  return (
    <NavigationContainer>
      <MyDrawer />
    </NavigationContainer>
  );
}
