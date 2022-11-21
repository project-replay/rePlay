import React from 'react';
import { View, StyleSheet } from 'react-native';
import colors from '../config/colors';

function ListItemSeparator() {
	return <View style={styles.separator} />;
}
const styles = StyleSheet.create({
	separator: {
		width: '100%',
		height: 1,
		backgroundColor: colors.blue,
		marginTop: -5,
		marginBottom: 40,
	},
});

export default ListItemSeparator;
