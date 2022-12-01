import React, { useState } from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { auth } from '../../firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import * as Yup from 'yup';
import colors from '../config/colors';

// Components
import AppButton from '../components/AppButton';
import AppText from '../components/AppText';
import ListItemSeparator from '../components/ListItemSeparator';
import Screen from '../components/Screen';

// Assets
import AppForm from '../components/AppForm';
import AppFormField from '../components/AppFormField';
import CarToy from '../assets/png/car-toy.png';
import ReplayLogo from '../assets/png/replay-logo.png';
import SubmitButton from '../components/SubmitButton';

const validationSchema = Yup.object().shape({
	email: Yup.string().required().email().label('Email'),
	password: Yup.string().required().min(4).label('Password'),
});

function LoginScreen({ navigation }) {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	// Log in user via email
	const handleEmailLogin = async () => {
		try {
			const userCredentials = await signInWithEmailAndPassword(
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
		<Screen style={styles.container}>
			<Image style={styles.logo} source={ReplayLogo} />
			<ListItemSeparator />
			<Image style={styles.carToy} source={CarToy} />
			<AppText children={'Log into your account'} style={styles.headerText} />

			<AppForm
				initialValues={{ email: '', password: '' }}
				onSubmit={handleEmailLogin}
				validationSchema={validationSchema}>
				<AppFormField
					autoCapitalize={false}
					autoCorrect={false}
					icon='email'
					keyboardType='email-address'
					name='email'
					placeholder='Email'
					placeholderTextColor={colors.primary}
					value={email}
					onChangeText={(text) => setEmail(text)}
					textContentType='email'
				/>

				<AppFormField
					autoCapitalize={false}
					autoCorrect={false}
					icon='lock'
					name='password'
					placeholder='Password'
					placeholderTextColor={colors.primary}
					value={password}
					onChangeText={(text) => setPassword(text)}
					secureTextEntry
					textContentType='password'
				/>

				<View style={styles.buttonContainer}>
					<SubmitButton
						title='Log In'
						style={styles.submitButton}
						onPress={handleEmailLogin}
					/>
					<AppButton
						title='Cancel'
						bgColor='light'
						style={styles.cancelButton}
						onPress={() => navigation.navigate('Welcome')}
					/>
				</View>
			</AppForm>
		</Screen>
	);
}

const styles = StyleSheet.create({
	buttonContainer: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		marginTop: 10,
	},
	cancelButton: {
		marginTop: 10,
		fontSize: 17,
		fontWeight: 'normal',
		color: colors.primary,
	},
	carToy: {
		alignSelf: 'center',
	},
	container: {
		padding: 10,
		backgroundColor: colors.light,
	},
	headerText: {
		alignSelf: 'center',
		marginTop: 45,
		marginBottom: 10,
		fontSize: 26,
		fontWeight: 'bold',
	},
	logo: {
		alignSelf: 'center',
		marginBottom: 15,
	},
	submitButton: {
		padding: 7,
		fontSize: 17,
	},
});

export default LoginScreen;
