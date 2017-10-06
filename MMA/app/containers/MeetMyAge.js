import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { StyleSheet, View, Text, ActivityIndicator } from 'react-native';

import Group from '../components/Groups/Group';
import Events from '../components/Events/Events';
import Profile from '../components/profile/profile';
import ProfileEdit from '../components/profile/ProfileEdit';
import Login from '../components/login/login';
import { addNavigationHelpers } from 'react-navigation';
import { TabNavigator, StackNavigator } from 'react-navigation'
import Icon from 'react-native-vector-icons/SimpleLineIcons';

const stackNav = StackNavigator({
  Profile: {
    screen: Profile,
  },
  Detail: {
    screen: ProfileEdit,
  },
},
{
   initialRouterName: 'Profile',
   headerMode:'none',
});

const Tabs = TabNavigator({
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

 const StacNavLoginToApp = StackNavigator({
    Login: {
        screen: Login
    },
    Tabs:{
      screen:Tabs
    }
  },
  {
    headerMode:'none'
  }
);

class MeetMyAge extends Component {
    render() {
        return (
              <StacNavLoginToApp/>
        );
    }
}

export default MeetMyAge;
