import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import AppNavigator from './AppNavigator';

// Screens
import BrowsingFeedScreen from '../screens/BrowsingFeedScreen';
import LoginScreen from '../screens/LoginScreen';
import RegisterFormScreen from '../screens/RegisterFormScreen';
import WelcomeScreen from '../screens/WelcomeScreen';

const Stack = createStackNavigator();

const AuthNavigator = () => (
	<Stack.Navigator
		screenOptions={{
			headerShown: false,
		}}>
		<Stack.Screen name='Welcome' component={WelcomeScreen} />
		<Stack.Screen name='Login' component={LoginScreen} />
		<Stack.Screen name='Register' component={RegisterFormScreen} />
		<Stack.Screen name='Feed' component={(BrowsingFeedScreen, AppNavigator)} />
	</Stack.Navigator>
);

export default AuthNavigator;
