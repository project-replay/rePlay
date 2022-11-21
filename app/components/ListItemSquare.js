import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { TouchableHighlight } from 'react-native-gesture-handler';
import colors from '../config/colors';

// This component is for the individual square image elements on the Browsing Feed screen
function ListItemSquares({
	imageSource,
	containerWidth,
	imageWidth,
	color,
	hasImageBorderRadius = false,
	hasText = false,
	text,
}) {
	return (
		<TouchableOpacity
			style={[
				styles.container,
				{
					width: containerWidth,
					height: containerWidth,
					borderColor: colors[color],
				},
			]}>
			{hasImageBorderRadius ? (
				<Image
					source={imageSource}
					style={{ width: imageWidth, height: imageWidth, borderRadius: 10 }}
				/>
			) : (
				<Image
					source={imageSource}
					style={{ width: imageWidth, height: imageWidth }}
				/>
			)}

			{hasText && (
				<Text style={[styles.text, { color: colors[color] }]}>{text}</Text>
			)}
		</TouchableOpacity>
	);
}

const styles = StyleSheet.create({
	container: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		marginTop: 15,
		marginLeft: 5,
		marginRight: 5,
		backgroundColor: colors.white,
		borderRadius: 10,
		borderStyle: 'solid',
		borderWidth: 1,
	},
	text: {
		marginTop: 20,
		textAlign: 'center',
		fontSize: 20,
		fontWeight: 'bold',
	},
});

export default ListItemSquares;
