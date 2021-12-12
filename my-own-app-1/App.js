import * as React from "react";
import { createSwitchNavigator, createAppContainer } from "react-navigation";

import LoginScreen from "./Screens/LoginScreen";
import LoadingScreen from "./Screens/LoadingScreen";
import HomeScreen from "./Screens/HomeScreen";
import BirthdayScreen from "./Screens/BirthdayEventScreen";
import AnniversaryScreen from "./Screens/AnniversaryEventScreen";

import  firebase from "firebase";
import { firebaseConfig } from "./config";

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app();
}

const AppSwitchNavigator = createSwitchNavigator({
  LoadingScreen: LoadingScreen,
  LoginScreen: LoginScreen,
  HomeScreen: HomeScreen,
  BirthdayScreen:BirthdayScreen,
  AnniversaryScreen:AnniversaryScreen
});

const AppNavigator = createAppContainer(AppSwitchNavigator);

export default function App() {
  return <AppNavigator />;
}