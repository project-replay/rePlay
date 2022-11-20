import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import colors from '../config/colors';

function AppButton({
	title,
	onPress,
	bgColor = 'primary',
	textColor = 'light',
	hasBorder = false,
}) {
	return (
		<TouchableOpacity
			style={[
				styles.button,
				{ backgroundColor: colors[bgColor] },
				hasBorder && styles.border,
			]}
			onPress={onPress}>
			<Text style={([styles.text], { color: colors[textColor] })}>{title}</Text>
		</TouchableOpacity>
	);
}

const styles = StyleSheet.create({
	button: {
		backgroundColor: colors.primary,
		border: 'none',
		borderRadius: 25,
		justifyContent: 'center',
		alignItems: 'center',
		padding: 5,
		margin: 10,
		width: '80%',
	},
	text: {
		color: colors.white,
		fontSize: 18,
		textTransform: 'uppercase',
		fontWeight: 'bold',
	},
	border: {
		borderColor: colors.primary,
		borderStyle: 'solid',
		borderWidth: 1,
	},
});

export default AppButton;
