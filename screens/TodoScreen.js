import React, { Component } from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput, Button, Alert, KeyboardAvoidingView
} from 'react-native';
import { TODOS } from '../utils/data'
import TodoItem from '../components/TodoItem'
export default class TodoScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todoList: TODOS,
      inputText: '',
    };
  }
  static navigationOptions = {
    title: 'Your Todo List',
    headerStyle: {
      backgroundColor: '#1a1a1a',
    },
    headerTintColor: 'pink',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  };

  onChange = text => {
    this.setState({
      inputText: text,
    });
  };
  async onChangeStatusItem(id) {
    const { todoList } = this.state;
    const todoItem = todoList.find(todo => todo.id === id);
    todoItem.status = todoItem.status === 'Done' ? 'Active' : 'Done';
    const foundIndex = todoList.findIndex(todo => todo.id === id);
    todoList[foundIndex] = todoItem;
    const newTodoList = [...todoList];
    await this.setState({
      todoList: newTodoList,
    });
    setTimeout(() => {this.props.navigation.navigate('TodoDetail', { data: todoItem });}, 1000);
    this.props.navigation.setParams({'todoList':newTodoList});
  };
  onConfirmDelete = id => {
    const { todoList } = this.state;
    const newTodoList = todoList.filter(todo => todo.id !== id);
    this.setState({
      todoList: newTodoList,
    });
  };

  onDeleteItem = todo => {
    Alert.alert(
      'Delete your todo?',
      todo.body,
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel'
        },
        { text: 'OK', onPress: () => this.onConfirmDelete(todo.id) }
      ],
      { cancelable: true }
    );
  };
  onSubmit = () => {
    const { todoList } = this.state;
    const newTodoItem = {
      body: this.state.inputText,
      status: 'Active',
      id: todoList.length + 1
    };
    //const newTodoList = [newTodoItem, ...todoList]; //ES6
    const newTodoList = [...todoList, newTodoItem];
    this.setState({
      todoList: newTodoList,
      inputText: '',
    });

    //const newTodoList =  TODOS.concat(newTodoList);
    //console.log(newTodoList);
    //alert(this.state.inputText);
  };
  render() {
    const { todoList, inputText } = this.state;
    return (
      <KeyboardAvoidingView enabled behavior="padding">
        <ScrollView contentContainerStyle={styles.container}>

          {
            todoList.map(item => {
              return (
                <TodoItem key={item.id} data={item} onChangeStatus={() => this.onChangeStatusItem(item.id)}
                  onDelete={() => this.onDeleteItem(item)} />
              );
            })
          }
          <TextInput style={styles.input} onChangeText={this.onChange} value={inputText} />
          <TouchableOpacity style={styles.buttonSubmit} onPress={this.onSubmit}>
            <Text style={styles.buttonSubmitText}>New Todo</Text>
          </TouchableOpacity>
        </ScrollView>

      </KeyboardAvoidingView>
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
  input: {
    height: 50,
    borderWidth: 1,
    borderColor: 'white',
    backgroundColor:'#666666',
    borderRadius: 25,
    marginHorizontal: 10,
    marginVertical: 10,
  },
  buttonSubmit: {
    height: 50,
    width: 200,
    backgroundColor: '#ff9933',
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center'
  },
  buttonSubmitText: {
    color: 'white',
    fontSize: 25,
    fontWeight: '400',

    justifyContent: 'center',

  },
  signup: {
    backgroundColor: 'white',
    color: '#3A59FF',
    width: "75%",
    borderRadius: 25,
    textAlign: 'center',
    fontWeight: 'bold',
    marginLeft: '11%',
    padding: "2%",
    fontSize: 27,
    marginTop: '70%'
  },

});
