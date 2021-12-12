import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  Platform,
  StatusBar,
  SafeAreaView,
  Image,
  ImageBackground,
} from 'react-native';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createAppContainer } from 'react-navigation';
import BirthdayEventScreen from './BirthdayEventScreen';
import AddBirthdayScreen from './AddBirthdayScreen';

export default class Birthday extends Component {
  render() {
    return <AppContainer />;
  }
}
const TabNavigator = createBottomTabNavigator(
  {
    BirthdayEventScreen: { screen: BirthdayEventScreen },
    AddBirthdayScreen: { screen: AddBirthdayScreen },
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: () => {
        const routeName = navigation.state.routeName;
        console.log(routeName);
        if (routeName === 'BirthdayEventScreen') {
          return (
            <Image
              source={require('../Images/BdayIcon.jpg')}
              style={{ width: 50, height: 40 }}
            />
          );
        } else if (routeName === 'AddBirthdayScreen') {
          return (
            <Image
              source={require('../Images/HappyAniv.jpg')}
              style={{ width: 50, height: 40 }}
            />
          );
        }
      },
    }),
  }
);

const AppContainer = createAppContainer(TabNavigator);