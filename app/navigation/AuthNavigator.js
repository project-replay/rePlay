import React from 'react'
import {createStackNavigator } from '@react-navigation/stack';


import LoginScreen from '../screens/LoginScreen';
import WelcomeScreen from '../screens/WelcomeScreen';
import RegisterFormScreen from '../screens/RegisterFormScreen';
import BrowsingFeedScreen from '../screens/BrowsingFeedScreen';

const Stack = createStackNavigator();

const AuthNavigator = () => (
    <Stack.Navigator>
        <Stack.Screen name="Welcome" component={WelcomeScreen} options={{headerShown: false}} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Register" component={RegisterFormScreen} />
        <Stack.Screen name ="Feed" component={BrowsingFeedScreen} />
    </Stack.Navigator>
);

export default AuthNavigator;