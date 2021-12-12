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
  FlatList,
} from 'react-native';
import db from '../config';
import { ScrollView } from 'react-native-gesture-handler';

export default class AnniversaryEvents extends Component {
  constructor(props) {
    super(props);
    this.state = {
      anniversary: [],
    };
  }

  componentDidMount = async () => {
    const query = await db.collection('Anniverssary').get();
    query.docs.map((doc) => {
      this.setState({
        anniversary: [...this.state.anniversary, doc.data()],
      });
    });
  };

  render() {
    return (
      <ImageBackground
        source={require('../Images/backBday.jpg')}
        style={{
          height:750
        }}
        >
        <ScrollView>
          <Text style={styles.text}>Anniversary CALENDAR</Text>
          <FlatList
            data={this.state.anniversary}
            renderItem={({ item }) => (
              <View style={{ borderBottomWidth: 2, marginTop: 30 }}>
                <Text style={styles.text1}>{'NAME: ' + item.Name}</Text>
                <Text style={styles.text2}>{'Anniversary: ' + item.Anniversary}</Text>
              </View>
            )}
            keyExtractor={(item, index) => index.toString()}
          />
        </ScrollView>
        </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  text1: {
    fontSize: 20,
    color: 'white',
  },
  text2: {
    fontSize: 20,
    color: 'white',
  },
  text: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'white',
  },
});
