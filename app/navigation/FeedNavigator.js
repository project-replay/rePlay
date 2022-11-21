import React from 'react';
import {createStackNavigator } from '@react-navigation/stack';
import ListingsScreen from '../screens/ListingsScreen';
import ListingDetailsScreen from '../screens/ListingDetailsScreen';
import BrowsingFeed from '../screens/BrowsingFeed';

const Stack = createStackNavigator();

const FeedNavigator =() => (
    <Stack.Navigator>
        <Stack.Screen name="Listings" component={BrowsingFeed} />
        <Stack.Screen name="Listing Details" component={ListingDetailsScreen} />
    </Stack.Navigator>
);

export default FeedNavigator;