import React from 'react'
import { TabNavigator, StackNavigator } from 'react-navigation'
import Icon from 'react-native-vector-icons/SimpleLineIcons';

import Group from '../Screens/Group';
import Events from '../Screens/Events';
import Profile from '../Screens/Profile';
import ProfileEdit from '../Screens/ProfileEdit';
import Login from '../Screens/Login';


export const stackNav = StackNavigator({
  Profile: {
    screen: Profile,
  },
  Detail: {
    screen: ProfileEdit,
  },
},
{
   initialRouterName: 'Profile',
});



export const Tabs = TabNavigator({
  Group: {
    screen: Group,
    navigationOptions: {
      tabBarIcon: ({ tintColor }) => <Icon name="people" size={20} color='#0093AF' backgroundColor='red' />,
       showIcon: true,
    },
  },
  Events:{
    screen: Events,
    navigationOptions: {
      tabBarIcon: ({ tintColor }) => <Icon name="social-dribbble" size={20} color='#0093AF' />,
       showIcon: true,
    },
  },
  Profile: {
    screen: stackNav,
    navigationOptions: {
      tabBarIcon: ({ tintColor }) => <Icon name="user" size={20} color='#0093AF' />,
       showIcon: true,
    },
  },
},
{
  tabBarPosition: 'bottom',
  swipeEnabled: false,
  headerMode:'none',
  header:null,
  tabBarOptions: {
        showIcon: true,
        upperCaseLabel: false,
        showLabel:false,
        style: {
          backgroundColor: 'transparent',
        }
        },

});
