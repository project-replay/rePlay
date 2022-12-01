import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
// import { StyleSheet } from 'react-native';
import ListingsScreen from '../screens/ListingsScreen';
import FeedNavigator from './FeedNavigator';
import AccountNavigator from './AccountNavigator';
import MessagesScreen from '../screens/MessagesScreen';
import Camera from '../components/Camera';
import OpenCameraButton from './OpenCameraButton';

const Tab = createBottomTabNavigator();

const AppNavigator = () => (
	<Tab.Navigator>
		<Tab.Screen
			name='Feed'
			component={FeedNavigator}
			options={{
				headerShown: false,
				tabBarIcon: ({ color, size }) => (
					<MaterialCommunityIcons name='home' color={color} size={size} />
				),
			}}
		/>
		<Tab.Screen
			name='Favorites'
			component={ListingsScreen}
			options={{
				tabBarIcon: ({ color, size }) => (
					<MaterialCommunityIcons name='heart' color={color} size={size} />
				),
			}}
		/>
		<Tab.Screen
			name='Camera'
			component={Camera}
			options={({ navigation }) => ({
				tabBarButton: () => (
					<OpenCameraButton onPress={() => navigation.navigate('Camera')} />
				),
				tabBarIcon: ({ color, size }) => (
					<MaterialCommunityIcons name='camera' color={color} size={size} />
				),
			})}
		/>
		<Tab.Screen
			name='Messages'
			component={MessagesScreen}
			options={{
				tabBarIcon: ({ color, size }) => (
					<MaterialCommunityIcons name='message' color={color} size={size} />
				),
			}}
		/>
		<Tab.Screen
			name='Account'
			component={AccountNavigator}
			options={{
				headerShown: false,
				tabBarIcon: ({ color, size }) => (
					<MaterialCommunityIcons name='account' color={color} size={size} />
				),
			}}
		/>
	</Tab.Navigator>
);

// const styles = StyleSheet.create({});

export default AppNavigator;
