import React from 'react';
import {
	Image,
	ScrollView,
	StyleSheet,
	TouchableOpacity,
	View,
} from 'react-native';
import colors from '../config/colors';

// Components:
import AppButton from '../components/AppButton';
import AppText from '../components/AppText';
import Carousel from '../components/Carousel';
import Screen from '../components/Screen';

// Assets
import ReplayLogo from '../assets/replay-bouncy-text.gif';

function WelcomeScreen({ navigation }) {
	return (
		<Screen style={styles.container}>
			<ScrollView>
				<View style={[styles.subContainer, styles.logoContainer]}>
					<Image source={ReplayLogo} style={styles.logo} />
				</View>

				<Carousel />

				<View style={styles.subContainer}>
					<TouchableOpacity style={styles.ssoButton}>
						<AppText
							style={styles.buttonText}
							children='Continue with Google'
						/>
					</TouchableOpacity>
					<TouchableOpacity style={styles.ssoButton}>
						<AppText
							style={styles.buttonText}
							children='Continue with Facebook'
						/>
					</TouchableOpacity>

					{/* Commenting out below as border is not applying correctly */}
					{/* <AppButton
						title='Continue with Google'
						bgColor='white'
						style={styles.ssoButton}
					/>
					<AppButton
						title={'Continue with Facebook'}
						bgColor='white'
						style={styles.ssoButton}
					/> */}
				</View>

				{/* The "----- or -----" component */}
				<View
					style={{
						flexDirection: 'row',
						justifyContent: 'center',
						alignItems: 'center',
						margin: 10,
					}}>
					<View
						style={{
							flex: 1,
							margin: 10,
							height: 1,
							backgroundColor: colors.primary,
						}}
					/>
					<AppText children={'or'} style={styles.text} />
					<View
						style={{
							flex: 1,
							margin: 10,
							height: 1,
							backgroundColor: colors.primary,
						}}
					/>
				</View>

				<View style={styles.registerButtonContainer}>
					<AppButton
						title={'Create Your Account'}
						onPress={() => navigation.navigate('Register')}
						style={styles.registerButton}
					/>
				</View>

				<View style={styles.loginContainer}>
					<AppText children={'Already have an account? '} style={styles.text} />
					<TouchableOpacity>
						<AppText
							children='Log in here'
							style={[styles.text, styles.loginText]}
						/>
					</TouchableOpacity>
				</View>

				<TouchableOpacity>
					<AppText
						children='Continue as guest'
						style={[styles.text, styles.guestText]}
					/>
				</TouchableOpacity>
			</ScrollView>
		</Screen>
	);
}

const styles = StyleSheet.create({
	buttonText: {
		textAlign: 'center',
		fontWeight: 'bold',
	},
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: colors.light,
	},
	guestText: {
		padding: 15,
		textAlign: 'center',
	},
	loginContainer: {
		flexDirection: 'row',
		justifyContent: 'center',
		marginTop: 25,
	},
	loginText: {
		color: colors.primary,
	},
	logoContainer: {
		marginTop: -10,
		marginBottom: -10,
	},
	registerButton: {
		textAlign: 'center',
		width: '80%',
		padding: 7,
	},
	registerButtonContainer: { justifyContent: 'center', alignItems: 'center' },
	ssoButton: {
		textAlign: 'center',
		margin: 5,
		padding: 10,
		width: '80%',
		backgroundColor: colors.white,
		borderColor: colors.primary,
		borderRadius: 25,
		borderWidth: 1,
		color: colors.black,
	},
	subContainer: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
	},
	text: { fontSize: 16, fontWeight: 'bold', color: colors.blue },
});

export default WelcomeScreen;
