import React, { Component } from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput, Button,
} from 'react-native';
import { red } from 'ansi-colors';
export default class TodoDetailScreen extends Component {


  render() {
    const { navigation } = this.props;
    const todoItem = navigation.getParam('data');
    const {
      status, body, id
    } = todoItem;
    return (
      <View style={styles.container}>
        <Text style={styles.status}>{status}</Text>
        <Text style={styles.body}>{id}: {body}</Text>
      </View>)
  }
}

TodoDetailScreen.navigationOptions = {
};



const styles = StyleSheet.create({
  container: {
    alignItems:'center',
    backgroundColor: '#fff',
    marginTop: 15,
    paddingVertical: 10,
    justifyContent: 'space-around'
  },
  status: {
    fontSize:30,
    fontWeight:'500',
  },
  body: {
    fontSize:25,
    fontWeight:'100', 
    color:'blue', 
  },
  
});
