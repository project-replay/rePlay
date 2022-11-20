import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import AppText from './AppText';
import colors from '../config/colors';

function AppButton({
	component, // Namely for images and vector icons
	title,
	onPress,
	width = '80%',
	bgColor,
	textColor,
	fontSize,
	hasBorder = false,
	borderRadius = 30,
}) {
	return (
		<TouchableOpacity
			style={[
				styles.button,
				{ width: width },
				{ backgroundColor: colors[bgColor] },
				hasBorder && styles.border,
				{ borderRadius: borderRadius },
			]}
			onPress={onPress}>
			{component}
			<AppText text={title} fontSize={fontSize} textColor={textColor} />
		</TouchableOpacity>
	);
}

const styles = StyleSheet.create({
	button: {
		display: 'flex',
		flexDirection: 'row',
		flexWrap: 'nowrap',
		justifyContent: 'center',
		alignItems: 'center',
		width: '80%',
		margin: 10,
		padding: 12,
		borderRadius: 30,
		backgroundColor: colors.primary,
	},
	border: {
		borderColor: colors.primary,
		borderStyle: 'solid',
		borderWidth: 1,
	},
});

export default AppButton;
