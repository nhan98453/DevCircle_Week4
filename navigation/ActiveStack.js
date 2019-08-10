import React, {Component} from 'react';
import { Platform } from 'react-native';
import { createStackNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import ActiveScreen from '../screens/ActiveScreen';
import TodoDetailScreen from '../screens/TodoDetailScreen';
const config = Platform.select({
  web: { headerMode: 'screen' },
  default: {},
});
const ActiveStack = createStackNavigator(
  {
    Active: ActiveScreen,
    TodoDetail: TodoDetailScreen,
  },
  {
    headerMode: 'screen',
    cardStyle: { backgroundColor: '#0d0d0d' },
  },
  config
);

ActiveStack.navigationOptions = {
  tabBarLabel: 'Active',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={ `ios-information-circle${focused ? '' : '-outline'}`
          
      }
    />
  ),
};

export default ActiveStack;