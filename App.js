import { StatusBar } from 'expo-status-bar';
//import { useDimensions, useDeviceOrientation } from '@react-native-community/hooks'
import { StyleSheet, Text, SafeAreaView, View} from 'react-native';
import ViewImageScreen from './app/screens/ViewImageScreen';
import WelcomeScreen from './app/screens/WelcomeScreen';
import AppText from './app/components/AppText';
import {MaterialCommunityIcons} from '@expo/vector-icons';
import colors from './app/config/colors';
import AppButton from './app/components/AppButton';
import Card from './app/components/Card';
import ListingDetailsScreen from './app/screens/ListingDetailsScreen';
import MessagesScreen from './app/screens/MessagesScreen';

export default function App() {


  return <MessagesScreen />
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: 'center',
    justifyContent: 'center',
  },
});
