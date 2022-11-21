import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import AppButton from '../components/AppButton';
import AppTextInput from '../components/AppTextInput';
import Screen from '../components/Screen';
import ReplayLogo from '../assets/svg/ReplayLogo';
import colors from '../config/colors';
import Train from '../assets/svg/Train';
import ListItemSeparator from '../components/ListItemSeparator';
import { Formik } from 'formik';

function LoginScreen(props) {
	return (
		<Screen style={styles.container}>
			<View style={styles.header}>
				<ReplayLogo />
			</View>
			<ListItemSeparator />
			<View style={styles.train}>
				<Train />
			</View>

			<Formik
				initialValues={{ email: '', password: '' }}
				onSubmit={(values) => console.log(values)}>
				{({ handleChange, handleSubmit }) => (
					<>
						<AppTextInput
							autoCapitalize='none'
							autoCorrect={false}
							icon='email'
							keyboardType='email-address'
							onChangeText={handleChange('email')}
							placeholder='Email'
							textContentType='emailAddress'
						/>
						<AppTextInput
							autoCapitalize='none'
							autoCorrect={false}
							icon='lock'
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
	container: {
		padding: 10,
		backgroundColor: colors.light,
	},
	header: {
		justifyContent: 'center',
		alignSelf: 'center',
		margin: 0,
	},
	logo: {
		width: 80,
		height: 80,
		alignSelf: 'center',
		marginTop: 50,
		marginBottom: 20,
	},
	text: {
		color: 'white',
	},
	train: {
		justifyContent: 'center',
		alignItems: 'center',
		margin: 10,
	},
});

export default LoginScreen;
