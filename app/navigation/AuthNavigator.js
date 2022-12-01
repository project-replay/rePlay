import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

// Screens
import BrowsingFeedScreen from '../screens/BrowsingFeedScreen';
import LoginScreen from '../screens/LoginScreen';
import RegisterFormScreen from '../screens/RegisterFormScreen';
import WelcomeScreen from '../screens/WelcomeScreen';

const Stack = createStackNavigator();

const AuthNavigator = () => (
	<Stack.Navigator>
		<Stack.Screen
			name='Welcome'
			component={WelcomeScreen}
			options={{ headerShown: false }}
		/>
		<Stack.Screen name='Login' component={LoginScreen} />
		<Stack.Screen name='Register' component={RegisterFormScreen} />
		<Stack.Screen name='Feed' component={BrowsingFeedScreen} />
	</Stack.Navigator>
);

export default AuthNavigator;
