import React from 'react';
import { Platform, StyleSheet, Text } from 'react-native';
import colors from '../config/colors';

function AppText({ text, paddingTop, fontSize, textColor, style }) {
	return (
		<Text
			style={[
				styles.text,
				{ paddingTop: paddingTop },
				{ fontSize: fontSize },
				{ color: colors[textColor] },
				style,
			]}>
			{text}
		</Text>
	);
}

const styles = StyleSheet.create({
	text: {
		textAlign: 'center',
		fontFamily: Platform.OS === 'android' ? 'Roboto' : 'Avenir',
		fontWeight: 'bold',
		fontSize: 20,
		color: colors.medium,
	},
});

export default AppText;
