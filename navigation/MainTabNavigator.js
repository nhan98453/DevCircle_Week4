import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator, TabBarBottom,TabNavigator } from 'react-navigation';

import TodoStack from './TodoStack';
import ActiveStack from './ActiveStack';
import CompleteStack from './CompleteStack';

const config = Platform.select({
  web: { headerMode: 'screen' },
  default: {},
  
});




TodoStack.path = '';


CompleteStack.path = '';


ActiveStack.path = '';

const tabNavigator = createBottomTabNavigator({
  TodoStack,
  CompleteStack,
  ActiveStack,
}, {
  
  tabBarOptions: {
    style: {
      backgroundColor:'black',
    },
  },
});
tabNavigator.path = '';

export default tabNavigator;
