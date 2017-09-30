import React from 'react'
import { TabNavigator, StackNavigator } from 'react-navigation'
import Icon from 'react-native-vector-icons';

import Group from '../Screens/Group';
import Events from '../Screens/Events';
import Profile from '../Screens/Profile';
import ProfileEdit from '../Screens/ProfileEdit';

export const stackNav = StackNavigator({
  Profile: {
    screen: Profile,
    navigationOptions: {
      title : 'Profile'
    }
  },
  Detail: {
    screen: ProfileEdit,
    navigationOptions: ({ navigation }) => ({
      title: `${navigation.state.params.name.toUpperCase()}`,
    }),
  },
});

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
    screen: stackNav,
    navigationOptions: {
     tabBarLabel: 'Profile',
      tabBarIcon: ({ tintColor }) => <Icon name="list" size={35} color={tintColor} />,
    },
  },
},
{
  tabBarPosition: 'bottom',
  swipeEnabled: false,
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
