import React, {Component} from 'react';
import { Platform } from 'react-native';
import { createStackNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import TodoScreen from '../screens/TodoScreen';
import TodoDetailScreen from '../screens/TodoDetailScreen';
const config = Platform.select({
  web: { headerMode: 'screen' },
  default: {},
});
const TodoStack = createStackNavigator(
  {
    Todo: TodoScreen,
    TodoDetail: TodoDetailScreen,
  },
  
  {
    headerMode: 'screen',
    cardStyle: { backgroundColor: '#0d0d0d' },
  },
  config
);

TodoStack.navigationOptions = {
  
  tabBarLabel: 'All',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-add-circle${focused ? '' : '-outline'}`
          : 'ios-add-circle'
      }
    />
  ),
};

export default TodoStack;