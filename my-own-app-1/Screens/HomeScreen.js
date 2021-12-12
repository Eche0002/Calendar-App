import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Platform,
  StatusBar,
  ImageBackground,
  Image,
} from 'react-native';
//import Birthday from './BirthdayScreen'
//import Anniversary from './AnniversaryScreen'

export default class HomeScreen extends Component {
  constructor(props)
  {
    super(props);
  }
  render() {
    return (
      <View style={styles.container}>
        <SafeAreaView style={styles.droidSafeArea} />
        <ImageBackground
          source={require('../Images/back.jpg')}
          style={styles.backgroundImage}>
          <View style={styles.titleBar}>
            <Text style={styles.titleText}>Event Calendar</Text>
          </View>

          <TouchableOpacity
            style={styles.routeCard}
            onPress={() => this.props.navigation.navigate('BirthdayScreen')}>
            <View style={{ position: 'relative' }}>
              <Image
                source={require('../Images/BdayIcon.jpg')}
                style={{
                  width: 300,
                  height: 170,
                  position: 'absolute',
                  marginLeft: -145,
                  marginTop: -30,
                }}></Image>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.routeCard}
            onPress={() => this.props.navigation.navigate('AnniversaryScreen')}>
            <Image
              source={require('../Images/Anniversary.gif')}
              style={{
                width: 300,
                height: 170,
               
                marginTop: 200,
              }}></Image>
          </TouchableOpacity>
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  droidSafeArea: {
    marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'stretch',
  },
  routeCard: {
    flex: 0.2,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10,
    marginTop: 5,
    borderRadius: 10,
  },
  titleBar: {
    flex: 0.25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleText: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'white',
  },
});
