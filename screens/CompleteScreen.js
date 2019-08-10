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
import { TODOS } from '../utils/data';
import TodoItem from '../components/TodoItem';
export default class CompleteScreen extends Component {
  constructor(props) {
    super(props);
    this.state={
      todoList: this.props.navigation.getParam('todoList',TODOS)
    }

  }
  static navigationOptions = {
    title: 'Your Complete Todo List',
    headerStyle: {
      backgroundColor: '#1a1a1a',
    },
    headerTintColor: 'pink',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  };
  render() {
    return (<ScrollView contentContainerStyle={styles.container}>
      {
          this.state.todoList.map(item => {
          if(item.status === 'Done')
          return (
            <TodoItem key={item.id} data={item}  />
          );
        })
      }

    </ScrollView>
    )
  }
}



const styles = StyleSheet.create({
  container: {
    backgroundColor: '#0d0d0d',
    marginTop: 15,
    paddingVertical: 10,
    justifyContent: 'space-around'
  },
  
});
