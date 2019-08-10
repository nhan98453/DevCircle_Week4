import React, {Component} from 'react';
import { Platform } from 'react-native';
import { createStackNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import CompleteSreen from '../screens/CompleteScreen';
import TodoDetailScreen from '../screens/TodoDetailScreen';
const config = Platform.select({
  web: { headerMode: 'screen' },
  default: {},
});
const CompleteStack = createStackNavigator(
  {
    Complete: CompleteSreen,
    TodoDetail: TodoDetailScreen,
  },
  {
    headerMode: 'screen',
    cardStyle: { backgroundColor: '#0d0d0d' },
  },
  config
);

CompleteStack.navigationOptions = {
  tabBarLabel: 'Complete',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={`ios-checkmark-circle${focused ? '' : '-outline'}`
      }
    />
  ),
};

export default CompleteStack;