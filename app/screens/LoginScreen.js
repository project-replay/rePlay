import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { Formik } from 'formik';
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
    email: Yup.string().required().email().label("Email"),
    password: Yup.string().required().min(4).label("Password"),
})

function LoginScreen(props) {
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

			<AppForm 
				initialValues={{ email: '', password: '', name: "" }}
				onSubmit={(values) => console.log(values)}
                    validationSchema={validationSchema}
                >
						<AppFormField
							autoCapitalize='none'
							autoCorrect={false}
							// icon='email'
							keyboardType='email-address'
                            name="email"
							placeholder='Username'
							textContentType='username'
						/>

						<AppFormField
							autoCapitalize='none'
							autoCorrect={false}
							// icon='lock'
                            name="password"
							placeholder='Password'
							secureTextEntry
							textContentType='password'
						/>

                        <SubmitButton title="Login" />

			</AppForm>
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
