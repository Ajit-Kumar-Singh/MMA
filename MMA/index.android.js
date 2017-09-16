/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import React, { Component } from 'react';
import {Button,AppRegistry, StyleSheet, Text, TouchableHighlight, View,} from 'react-native';

import {Tabs} from './src/Config/Router.js'

class MMA extends Component {
	render() {
		return <Tabs/>;
		}
}
AppRegistry.registerComponent('MMA', () => MMA);

