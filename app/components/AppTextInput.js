import React from 'react';
import { View, StyleSheet, TextInput } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import defaultStyles from '../config/styles';
import colors from '../config/colors';

function AppTextInput({ icon, ...otherProps }) {
	return (
		<View style={styles.container}>
			{icon && (
				<MaterialCommunityIcons
					name={icon}
					size={20}
					color={defaultStyles.colors.primary}
					style={styles.icon}
				/>
			)}
			<TextInput style={defaultStyles.text} {...otherProps} />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: colors.white,
		color: colors.primary,
		borderColor: colors.primary,
		borderWidth: 1,
		borderRadius: 10,
		flexDirection: 'row',
		width: '100%',
		padding: 15,
		marginVertical: 10,
	},
	icon: {
		marginRight: 10,
	},
});

export default AppTextInput;
