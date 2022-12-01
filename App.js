import React, { useState } from 'react';
import { StyleSheet, Text, SafeAreaView, View, Switch } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import colors from './app/config/colors';
import { NavigationContainer } from '@react-navigation/native';

// Components
import AppText from './app/components/AppText';
import AppButton from './app/components/AppButton';
import Card from './app/components/Card';
import Camera from './app/components/Camera';
import Screen from './app/components/Screen';
import Icon from './app/components/Icon';
import ListItem from './app/components/ListItem';
import AppPicker from './app/components/AppPicker';
import AppTextInput from './app/components/AppTextInput';
import PageHeaderWithBell from './app/components/PageHeaderWithBell';

// Screen
import ViewImageScreen from './app/screens/ViewImageScreen';
import WelcomeScreen from './app/screens/WelcomeScreen';
import ListingDetailsScreen from './app/screens/ListingDetailsScreen';
import MessagesScreen from './app/screens/MessagesScreen';
import MyAccountScreen from './app/screens/AccountScreen';
import AccountScreen from './app/screens/AccountScreen';
import ListingsScreen from './app/screens/ListingsScreen';
import LoginScreen from './app/screens/LoginScreen';
import EditScreen from './app/screens/EditListing';
import CreateListingScreen from './app/screens/CreateListingScreen';

// Navigation
import AuthNavigator from './app/navigation/AuthNavigator';
import navigationTheme from './app/navigation/navigationTheme';
import AppNavigator from './app/navigation/AppNavigator';
import AccountNavigator from './app/navigation/AccountNavigator';
import BrowsingFeedScreen from './app/screens/BrowsingFeedScreen';
import RegisterFormScreen from './app/screens/RegisterFormScreen';

export const AppStateContext = React.createContext();

function App() {
	// Globally set the url when the image is successfully stored in the cloud
	const [imageUrl, setImageUrl] = useState('');

	return (
		<AppStateContext.Provider value={{ imageUrl, setImageUrl }}>
			<NavigationContainer theme={navigationTheme}>
				<AuthNavigator />
			</NavigationContainer>
			{/* <NavigationContainer theme={navigationTheme}>
				<AppNavigator />
			</NavigationContainer> */}
		</AppStateContext.Provider>
	);
}

export default App;
