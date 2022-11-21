import React, { useEffect, useState } from 'react';
import { Image, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Formik } from 'formik';
import { auth } from '../../firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import * as Yup from 'yup';
import colors from '../config/colors';

// Components
import AppButton from '../components/AppButton';
import AppTextInput from '../components/AppTextInput';
import AppText from '../components/AppText';
import ListItemSeparator from '../components/ListItemSeparator';
import Screen from '../components/Screen';

// Assets
import CarToy from '../assets/png/car-toy.png';
import ReplayLogo from '../assets/png/replay-logo.png';
import ErrorMessage from '../components/ErrorMessage';
import AppFormField from '../components/AppFormField';
import SubmitButton from '../components/SubmitButton';
import AppForm from '../components/AppForm';

const validationSchema = Yup.object().shape({
	email: Yup.string().required().email().label('Email'),
	password: Yup.string().required().min(4).label('Password'),
});

function LoginScreen(props) {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const navigation = useNavigation();

	// If user is logged in, navigate them to Home
	useEffect(() => {
		const unsubscribe = auth.onAuthStateChanged((user) => {
			if (user) {
				navigation.navigate('Home');
			}
		});

		return () => {
			unsubscribe();
		};
	}, []);

	// Log in user via email
	const handleEmailLogin = async () => {
		try {
			const userCredentials = await signInWithEmailAndPassword(
				auth,
				email,
				password
			);
			console.log('YAY!');
			// const user = userCredentials.user;
		} catch (error) {
			alert(error.message);
		}
	};

	return (
		<Screen style={styles.container}>
			<Image style={styles.logo} source={ReplayLogo} />
			<ListItemSeparator />
			<Image style={styles.carToy} source={CarToy} />
			<AppText children={'Log into your account'} style={styles.headerText} />

			<AppForm
				initialValues={{ email: '', password: '', name: '' }}
				onSubmit={handleEmailLogin}
				validationSchema={validationSchema}>
				<AppFormField
					autoCapitalize='none'
					autoCorrect={false}
					icon='email'
					keyboardType='email-address'
					name='email'
					placeholder='Username'
					textContentType='username'
				/>

				<AppFormField
					autoCapitalize='none'
					autoCorrect={false}
					icon='lock'
					name='password'
					placeholder='Password'
					secureTextEntry
					textContentType='password'
				/>

				<SubmitButton title='Log In' style={styles.submitButton} />
				<AppButton title='Cancel' bgColor='light' style={styles.cancelButton} />
			</AppForm>
		</Screen>
	);
}
const styles = StyleSheet.create({
	cancelButton: {
		marginTop: 7,
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
		marginTop: 30,
		fontSize: 30,
		fontWeight: 'bold',
	},
	logo: {
		alignSelf: 'center',
		marginBottom: 15,
	},
	submitButton: {
		fontSize: 17,
	},
});

export default LoginScreen;
