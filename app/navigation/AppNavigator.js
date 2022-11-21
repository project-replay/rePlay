import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { StyleSheet } from 'react-native';
import AccountScreen from '../screens/AccountScreen';
import ListingsScreen from '../screens/ListingsScreen';
import EditScreen from '../screens/EditListing';
import FeedNavigator from './FeedNavigator';
import AccountNavigator from './AccountNavigator';
import NewListingButton from './NewListingButton';
import colors from '../config/colors';

const Tab = createBottomTabNavigator();

const AppNavigator = () => (
    <Tab.Navigator >
        <Tab.Screen
        name="Feed" 
        component={FeedNavigator} 
        options={{
            headerShown:false,
            tabBarIcon:({color, size}) => <MaterialCommunityIcons name="home" color={color} size={size} />}} 
        />
        <Tab.Screen 
        name="Edit Listing" 
        component={EditScreen} 
        options={{
            tabBarIcon:({color, size}) => <MaterialCommunityIcons name="plus-circle" color={color} size={size} />}}
        />
        <Tab.Screen 
        name="New Listing" 
        component={EditScreen} 
        options={({navigation}) => ({
            tabBarButton: () => <NewListingButton onPress={() => navigation.navigate("New Listing")} />,
            tabBarIcon:({color, size}) => <MaterialCommunityIcons name="plus-circle" color={color} size={size} />})}
        />
        <Tab.Screen 
        name="Favorites" 
        component={AccountNavigator} 
        options={{
            headerShown:false, 
            tabBarIcon:({color, size}) => <MaterialCommunityIcons name="heart" color={color} size={size} />}} 
        />
        <Tab.Screen 
        name="Account" 
        component={AccountNavigator} 
        options={{
            headerShown:false, 
            tabBarIcon:({color, size}) => <MaterialCommunityIcons name="account" color={color} size={size} />}} 
        />
    </Tab.Navigator>
)

const styles = StyleSheet.create({
    container: {
        marginBottom: 20
    }
})

export default AppNavigator;