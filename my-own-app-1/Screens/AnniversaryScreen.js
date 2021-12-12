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
import AnniversaryEventScreen from './AnniversaryEventScreen';
import AddAnniversartScreen from './AddAnniversaryScreen';

export default class Anniversary extends Component {
  render() {
    return <AppContainer />;
  }
}
const TabNavigator = createBottomTabNavigator(
  {
    AnniversaryEventScreen: { screen: AnniversaryEventScreen },
    AddAnniversartScreen: { screen: AddAnniversartScreen },
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: () => {
        const routeName = navigation.state.routeName;
        console.log(routeName);
        if (routeName === 'AnniversaryEventScreen') {
          return (
            <Image
              source={require('../Images/BdayIcon.jpg')}
              style={{ width: 50, height: 30 }}
            />
          );
        } else if (routeName === 'AddAnniversartScreen') {
          return (
            <Image
              source={require('../Images/HappyAniv.jpg')}
              style={{ width: 50, height: 30 }}
            />
          );
        }
      },
    }),
  }
);

const AppContainer = createAppContainer(TabNavigator);

