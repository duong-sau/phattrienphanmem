import React, {Component} from 'react';
import {View, Image, StyleSheet, Text} from 'react-native';
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
    <View>
      <Fox />
      <View>
        <Text
          style={{
            marginTop: 50,
            marginLeft: 100,
            color: 'white',
            fontSize: 20,
            fontWeight: 'bold',
          }}>
          FOXENGLISH
        </Text>
        <Text
          style={{marginTop: 10, marginLeft: 80, color: 'white', fontSize: 15}}>
          Know Fox, know success
        </Text>
      </View>
    </View>
  );
}
function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView
      style={{backgroundColor: 'white', color: 'red'}}
      {...props}>
      <DrawerItem
        label={() => fox()}
        style={{
          height: 200,
          width: 500,
          marginTop: -50,
          borderBottomColor: '#606060',
          borderBottomWidth: 3,
          marginLeft: 0,
          marginBottom: 30,
          backgroundColor: 'rgb(60,179,113)',
        }}
        onPress={() => props.navigation.dispatch(DrawerActions.closeDrawer())}
      />
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
}

const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawerContent {...props} />}>
      <Drawer.Screen name="NGỮ PHÁP" component={GrammarController} />
      <Drawer.Screen name="TỪ VỰNG" component={VocabularyController} />
      <Drawer.Screen name="LUYỆN TẬP" component={Practice} />
      <Drawer.Screen name="ĐĂNG XUẤT" component={Login} />
    </Drawer.Navigator>
  );
}
export class Fox extends Component {
  render() {
    return (
      <View style={{width: 100, height: 20, backgroundColor: 'violet'}}>
        <Image
          style={{width: 80, height: 80, marginTop: 60, marginLeft: 0}}
          source={require('../src/mrfox.png')}
        />
      </View>
    );
  }
}
export default function App() {
  return <MyDrawer />;
}
const styles = StyleSheet.create({});
