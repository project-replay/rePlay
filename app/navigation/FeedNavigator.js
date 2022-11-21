import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import ListingsScreen from '../screens/ListingsScreen';
import ListingDetailsScreen from '../screens/ListingDetailsScreen';
import BrowsingFeedScreen from '../screens/BrowsingFeedScreen';
import CreateListingScreen from '../screens/CreateListingScreen';
import BrowsingFeedScreenAfterUpload from '../screens/BrowsingFeedScreenAfterUpload';
import EditScreen from '../screens/EditListing';

const Stack = createStackNavigator();

const FeedNavigator = () => (
	<Stack.Navigator>
		<Stack.Screen name='Listings' component={BrowsingFeedScreen} />
		<Stack.Screen name='After Listing' component={BrowsingFeedScreenAfterUpload} />
		<Stack.Screen name='Listing Details' component={ListingDetailsScreen} />
		<Stack.Screen name= 'New Listing' component={CreateListingScreen} />
		<Stack.Screen name= 'Edit Listing' component={EditScreen} />
	</Stack.Navigator>
);

export default FeedNavigator;
