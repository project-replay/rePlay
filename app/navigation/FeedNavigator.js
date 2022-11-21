import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import ListingsScreen from '../screens/ListingsScreen';
import ListingDetailsScreen from '../screens/ListingDetailsScreen';
import BrowsingFeedScreen from '../screens/BrowsingFeedScreen';
import CreateListingScreen from '../screens/CreateListingScreen';

const Stack = createStackNavigator();

const FeedNavigator = () => (
	<Stack.Navigator>
		<Stack.Screen name='Listings' component={BrowsingFeedScreen} />
		<Stack.Screen name='Listing Details' component={ListingDetailsScreen} />
		<Stack.Screen name= 'New Listing' component={CreateListingScreen} />
	</Stack.Navigator>
);

export default FeedNavigator;
