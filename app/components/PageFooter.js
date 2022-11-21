import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import colors from '../config/colors';

function PageHeader(props) {
	return (
		<SafeAreaView style={styles.container}>
			<View style={styles.bottom}>
				<Ionicons name='ios-home-outline' size={30} color='white' />
				<Ionicons name='heart-outline' size={30} color='white' />
				<Ionicons name='camera-outline' size={60} color='white' />
				<Ionicons name='chatbox-outline' size={30} color='white' />
				<Ionicons name='ios-person-circle-outline' size={30} color='white' />
			</View>
			<Text style={styles.text}>List Item</Text>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	bottom: {
		flexDirection: 'row',
		justifyContent: 'space-around',
		alignItems: 'center',
		paddingTop: 10,
		paddingBottom: 20,
		width: '100%',
	},
	container: {
		position: 'absolute',
		left: 0,
		right: 0,
		bottom: 0,
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: colors.primary,
	},
	text: {
		position: 'absolute',
		bottom: 10,
		color: colors.white,
	},
});

export default PageHeader;
