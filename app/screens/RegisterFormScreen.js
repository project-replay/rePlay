import React, { useState } from 'react';
import {
	Image,
	KeyboardAvoidingView,
	ScrollView,
	StyleSheet,
	Text,
	TextInput,
	View,
} from 'react-native';
import { auth } from '../../firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import Checkbox from 'expo-checkbox';
import colors from '../config/colors';

// Components and Assets
import AppButton from '../components/AppButton';
import Crayons from '../assets/png/crayons.png';
import PageHeaderNoBell from '../components/PageHeaderNoBell';
import Screen from '../components/Screen';

function RegisterFormScreen({ navigation }) {
	const [firstName, setFirstName] = useState('');
	const [lastName, setLastName] = useState('');
	const [username, setUsername] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [confirmPassword, setConfirmPassword] = useState('');
	const [address1, setAddress1] = useState('');
	const [address2, setAddress2] = useState('');
	const [city, setCity] = useState('');
	const [zipCode, setZipCode] = useState('');
	const [state, setState] = useState('');
	const [hasAgreed, setHasAgreed] = useState(false);

	// Register user
	const handleRegister = async () => {
		try {
			const userCredentials = await createUserWithEmailAndPassword(
				auth,
				email,
				password
			);
			if (userCredentials) {
				navigation.navigate('Feed');
			}
		} catch (error) {
			alert(`Something went wrong.\nPlease try again.`);
		}
	};

	return (
		<Screen>
			<ScrollView>
				<KeyboardAvoidingView
					style={styles.container}
					behavior='padding' // Prevents keyboard from covering input fields
				>
					<PageHeaderNoBell />
					<View style={styles.imageContainer}>
						<Image source={Crayons} style={styles.image} />
					</View>
					<Text style={styles.title}>Create an Account</Text>
					<View style={styles.inputContainer}>
						<TextInput
							style={styles.input}
							placeholder='First Name'
							value={firstName}
							onChangeText={(text) => setFirstName(text)}
						/>
						<TextInput
							style={styles.input}
							placeholder='Last Name'
							value={lastName}
							onChangeText={(text) => setLastName(text)}
						/>
						<TextInput
							style={styles.input}
							placeholder='Username'
							autoCapitalize={false}
							value={username}
							onChangeText={(text) => setUsername(text)}
						/>
						<TextInput
							style={styles.input}
							placeholder='Email'
							autoCapitalize={false}
							value={email}
							onChangeText={(text) => setEmail(text)}
						/>
						<TextInput
							style={styles.input}
							placeholder='Password'
							secureTextEntry={true} // Shows password text as dots
							value={password}
							onChangeText={(text) => setPassword(text)}
						/>
						<TextInput
							style={styles.input}
							placeholder='Confirm Password'
							secureTextEntry={true}
							value={confirmPassword}
							onChangeText={(text) => setConfirmPassword(text)}
						/>
						<TextInput
							style={styles.input}
							placeholder='Address line 1'
							value={address1}
							onChangeText={(text) => setAddress1(text)}
						/>
						<TextInput
							style={styles.input}
							placeholder='Address line 2'
							value={address2}
							onChangeText={(text) => setAddress2(text)}
						/>
						<TextInput
							style={styles.input}
							placeholder='City'
							value={city}
							onChangeText={(text) => setCity(text)}
						/>
						<TextInput
							style={styles.input}
							placeholder='State'
							value={state}
							onChangeText={(text) => setState(text)}
						/>
						<TextInput
							style={styles.input}
							placeholder='Zip Code'
							value={zipCode}
							onChangeText={(text) => setZipCode(text)}
						/>
						<View style={styles.checkboxContainer}>
							<Checkbox
								style={styles.checkbox}
								value={hasAgreed}
								onValueChange={(text) => setHasAgreed(text)}
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
						<AppButton
							title='Create Your Account'
							onPress={handleRegister}
							style={styles.submitButton}
						/>
						<AppButton
							title='Cancel'
							onPress={() => {
								navigation.navigate('Welcome');
							}}
							bgColor='light'
							style={styles.cancelButton}
						/>
					</View>
				</KeyboardAvoidingView>
			</ScrollView>
		</Screen>
	);
}

const styles = StyleSheet.create({
	buttonContainer: {
		justifyContent: 'center',
		alignItems: 'center',
		width: '70%',
		marginTop: 40,
	},
	cancelButton: {
		marginTop: 5,
		padding: 5,
		color: colors.primary,
	},
	checkboxText: {
		left: 5,
	},
	checkboxContainer: {
		flexDirection: 'row',
		alignItems: 'center',
		marginTop: 20,
	},
	container: {
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: colors.light,
	},
	image: { width: 100, resizeMode: 'contain' },
	imageContainer: {
		justifyContent: 'center',
		alignItems: 'center',
		width: 200,
		height: 200,
	},
	input: {
		marginTop: 5,
		paddingHorizontal: 15,
		paddingVertical: 10,
		backgroundColor: colors.white,
		borderRadius: 10,
		borderColor: colors.primary,
		borderWidth: 1,
	},
	inputContainer: { width: '93%' },
	legalDoc: { fontWeight: '700', textDecorationLine: 'underline' },
	title: {
		marginBottom: 10,
		fontSize: 20,
		fontWeight: '700',
	},
	submitButton: {
		padding: 5,
	},
});

export default RegisterFormScreen;
