import React, { useState } from 'react';
import { StyleSheet, Text, SafeAreaView, View, Switch } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import colors from './app/config/colors';

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

// Screen
import ViewImageScreen from './app/screens/ViewImageScreen';
import WelcomeScreen from './app/screens/WelcomeScreen';
import ListingDetailsScreen from './app/screens/ListingDetailsScreen';
import MessagesScreen from './app/screens/MessagesScreen';
import MyAccountScreen from './app/screens/AccountScreen';
import AccountScreen from './app/screens/AccountScreen';
import ListingsScreen from './app/screens/ListingsScreen';
import LoginScreen from './app/screens/LoginScreen';
import RegisterScreen from './app/screens/RegisterFormScreen';
import EditScreen from './app/screens/EditListing';

export const AppStateContext = React.createContext();

function App() {
	// Globally set the url when the image is successfully stored in the cloud
	const [imageUrl, setImageUrl] = useState('');

	return (
		<AppStateContext.Provider value={{ imageUrl, setImageUrl }}>
			<Camera />
		</AppStateContext.Provider>
	);
}

export default App;
