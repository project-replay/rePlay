import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { Formik } from 'formik';
// import * as Yup from 'yup';
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

function LoginScreen(props) {
	// const validationSchema = Yup.object().shape({
	// 	username: Yup.string().required(),
	// 	password: Yup.string().required(),
	// });

	// const handleLoginSubmit = async (values) => {
	// 	const response = await axios
	// 		.post('http://localhost:3001/api/users/login', values)
	// 		.catch((err) => {
	// 			alert('Please try again.');
	// 		});

	// 	if (response) {
	// 		alert('Welcome back in. Authenticating...');
	// 	}
	// };

	return (
		<Screen style={styles.container}>
			<Image style={styles.logo} source={ReplayLogo} />
			<ListItemSeparator />
			<Image style={styles.carToy} source={CarToy} />
			<AppText children={'Log into your account'} style={styles.headerText} />

			<Formik
				// initialValues={{ username: '', password: '' }}
				// onSubmit={handleLoginSubmit}
				// validationSchema={validationSchema}>
				initialValues={{ email: '', password: '' }}
				onSubmit={(values) => console.log(values)}>
				{({ handleChange, handleSubmit }) => (
					<>
						<AppTextInput
							autoCapitalize='none'
							autoCorrect={false}
							// icon='email'
							// keyboardType='email-address'
							onChangeText={handleChange('username')}
							placeholder='Username'
							textContentType='username'
						/>
						<AppTextInput
							autoCapitalize='none'
							autoCorrect={false}
							// icon='lock'
							onChangeText={handleChange('password')}
							placeholder='Password'
							secureTextEntry
							textContentType='password'
						/>
						<AppButton
							style={styles.text}
							title='Login'
							onPress={handleSubmit}
							bgColor='primary'
						/>
					</>
				)}
			</Formik>
		</Screen>
	);
}
const styles = StyleSheet.create({
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
});

export default LoginScreen;
