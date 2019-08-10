import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default class TodoItem extends Component {

  render() {
    const {
      data: { id, body, status },
      onChangeStatus,
      onDelete,
    } = this.props;
    const buttonStyle = status === 'Active' ? styles.buttonActive : styles.button;
    return (
      <TouchableOpacity
        style={buttonStyle}
        onPress={onChangeStatus}
        onLongPress={onDelete}
        >

        <Text style={styles.text}>{id}: {body}</Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  buttonActive: {
    backgroundColor: '#00e673',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'stretch',
    paddingHorizontal: 10,
    paddingVertical: 10,
    marginTop: 15,
    marginHorizontal: 15,

  },

  button: {
    backgroundColor: '#0080ff',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'stretch',
    paddingHorizontal: 10,
    paddingVertical: 10,
    marginTop: 15,
    marginHorizontal: 15,
  },
  text: {

    fontWeight: 'bold',
    fontSize: 20,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    color: 'white',
    borderColor:'black',
  }
});