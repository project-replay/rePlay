import React, { useEffect, useState } from 'react';
import {
	KeyboardAvoidingView,
	StyleSheet,
	Text,
	TextInput,
	TouchableOpacity,
	View,
} from 'react-native';
// import { useNavigation } from '@react-navigation/native';
import Checkbox from 'expo-checkbox';

import colors from '../config/colors';

const RegisterScreen = () => {
	const [user, setUser] = useState({
		firstName: '',
		lastName: '',
		username: '',
		email: '',
		password: '',
		confirmPassword: '',
		address1: '',
		address2: '',
		city: '',
		zipCode: '',
		state: '',
		isSelected: false,
	});

	onInputChange = (key, val) => {
		setState({ [key]: val });
	};

	// Register user
	const handleRegister = () => {
		console.log('User was registered!');
	};

	// ======================================================================= JSX
	return (
		<KeyboardAvoidingView
			style={styles.container}
			behavior='padding' // Prevents keyboard from covering input fields
		>
			<Text style={styles.title}>🧸</Text>
			<Text style={styles.title}>Create an Account</Text>
			<View style={styles.inputContainer}>
				<TextInput
					style={styles.input}
					placeholder='First Name'
					value={user.firstName}
					onChangeText={(value) => onInputChange('firstName', value)}
				/>
				<TextInput
					style={styles.input}
					placeholder='Last Name'
					value={user.lastName}
					onChangeText={(value) => onInputChange('lastName', value)}
				/>
				<TextInput
					style={styles.input}
					placeholder='Username'
					autoCapitalize={false}
					value={user.username}
					onChangeText={(value) => onInputChange('username', value)}
				/>
				<TextInput
					style={styles.input}
					placeholder='Email'
					autoCapitalize={false}
					value={user.email}
					onChangeText={(value) => onInputChange('email', value)}
				/>
				<TextInput
					style={styles.input}
					placeholder='Password'
					secureTextEntry={true} // Shows password text as dots
					value={user.password}
					onChangeText={(value) => onInputChange('password', value)}
				/>
				<TextInput
					style={styles.input}
					placeholder='Confirm Password'
					secureTextEntry={true}
					value={user.confirmPassword}
					onChangeText={(value) => onInputChange('confirmPassword', value)}
				/>
				<TextInput
					style={styles.input}
					placeholder='Address line 1'
					value={user.address1}
					onChangeText={(value) => onInputChange('address1', value)}
				/>
				<TextInput
					style={styles.input}
					placeholder='Address line 2'
					value={user.address2}
					onChangeText={(value) => onInputChange('address2', value)}
				/>
				<TextInput
					style={styles.input}
					placeholder='City'
					value={user.city}
					onChangeText={(value) => onInputChange('city', value)}
				/>
				<TextInput
					style={styles.input}
					placeholder='State'
					value={user.state}
					onChangeText={(value) => onInputChange('state', value.toUpperCase())}
				/>
				<TextInput
					style={styles.input}
					placeholder='Zip Code'
					value={user.zipCode}
					onChangeText={(value) => onInputChange('zipCode', value)}
				/>
				<View style={styles.checkboxContainer}>
					<Checkbox
						style={styles.checkbox}
						value={user.isSelected}
						onValueChange={(value) => onInputChange('isSelected', value)}
					/>
					<Text style={styles.checkboxText}>
						I accept the{' '}
						<Text style={styles.legalDoc} onPress={() => {}}>
							Terms & Conditions
						</Text>
					</Text>
				</View>
			</View>

			<View style={styles.buttonContainer}>
				<TouchableOpacity style={[styles.button]} onPress={handleRegister}>
					<Text style={styles.buttonText}>Create an Account</Text>
				</TouchableOpacity>
			</View>
		</KeyboardAvoidingView>
	);
};

// ================================================================== StyleSheet
const styles = StyleSheet.create({
	button: {
		alignItems: 'center',
		width: '100%',
		margin: 5,
		padding: 15,
		backgroundColor: colors.secondary,
		borderRadius: 25,
	},
	buttonContainer: {
		justifyContent: 'center',
		alignItems: 'center',
		width: '60%',
		marginTop: 40,
	},
	buttonText: { color: colors.white, fontWeight: '500', fontSize: 14 },
	checkboxText: {
		left: 5,
	},
	checkboxContainer: {
		flexDirection: 'row',
		alignItems: 'center',
		marginTop: 20,
	},
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	input: {
		marginTop: 5,
		paddingHorizontal: 15,
		paddingVertical: 10,
		backgroundColor: colors.white,
		// borderColor: colors.secondary,
		borderRadius: 10,
	},
	inputContainer: { width: '80%' },
	legalDoc: { fontWeight: '700', textDecorationLine: 'underline' },
	title: {
		marginBottom: 10,
		fontSize: 20,
		fontWeight: '700',
	},
});

export default RegisterScreen;
