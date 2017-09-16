import React from 'react'
import { TabNavigator } from 'react-navigation'
import Icon from 'react-native-vector-icons';

import Group from '../Screens/Group';
import Events from '../Screens/Events';
import Profile from '../Screens/Profile';

export const Tabs = TabNavigator({
  Group: {
  screen: Group,
  navigationOptions: {

  tabBarIcon: ({ tintColor }) => <Icon name="list" size={35} color={tintColor} />,
},
  },
  Events:{
  screen: Events,
  navigationOptions: {

  tabBarIcon: ({ tintColor }) => <Icon name="list" size={35} color={tintColor} />,
},
  },
  Profile: {
    screen: Profile,
    navigationOptions: {

  tabBarIcon: ({ tintColor }) => <Icon name="list" size={35} color={tintColor} />,
},
  },
},
{
	  tabBarPosition: 'bottom',
	tabBarOptions: {
  labelStyle: {
    fontSize: 12,
	color:'black',
  },
  tabBarOptions: {
    activeTintColor: '#e91e63',
  },
  
  style: {
    backgroundColor: '#CCFFFF',
  },
	  },
});
