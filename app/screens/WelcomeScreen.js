import React from 'react';
import {
	Image,
	SafeAreaView,
	StyleSheet,
	Text,
	TouchableOpacity,
	View,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import colors from '../config/colors';

// Components:
import AppButton from '../components/AppButton';
import AppText from '../components/AppText';

// Screens:
import ListingDetailsScreen from './ListingDetailsScreen';

// SVG Images:
import ReplayLogo from '../assets/svg/ReplayLogo';
import Train from '../assets/svg/Train';
import MovingTruck from '../assets/svg/MovingTruck';
import StopSign from '../assets/svg/StopSign';
import BabyProducts from '../assets/svg/BabyProducts';
import Stroller from '../assets/svg/Stroller';
import BabyClothes from '../assets/svg/BabyClothes';
import BabyBlocks from '../assets/svg/BabyBlocks';

function WelcomeScreen() {
	// const navigation = useNavigation();

	// const navigate = (page) => {
	// 	navigation.navigate(page);
	// };

	return (
		<SafeAreaView style={styles.container}>
			<ReplayLogo />
			<Train />
			{/* <MovingTruck />
			<StopSign />
			<BabyProducts />
			<Stroller />
			<BabyClothes /> 
			<BabyBlocks /> */}

			<View>
				<AppText>Give your items a{'\n'}second chance</AppText>
			</View>

			<AppButton
				title={'Continue with Google'}
				onPress={() => {}}
				bgColor={'white'}
				textColor={'black'}
				hasBorder
			/>

			<View style={styles.buttonContainer}>
				<TouchableOpacity style={styles.button} onPress={() => {}}>
					<Text style={styles.text} Text>
						Continue with Google
					</Text>
				</TouchableOpacity>
				<TouchableOpacity style={styles.button} onPress={() => {}}>
					<Text style={styles.text} Text>
						Continue with Facebook
					</Text>
				</TouchableOpacity>

				<View
					style={{
						flexDirection: 'row',
						alignItems: 'center',
						width: '100%',
						margin: 5,
					}}>
					<View style={{ flex: 1, height: 1, backgroundColor: 'black' }} />
					<View>
						<Text style={{ width: 50, textAlign: 'center' }}>or</Text>
					</View>
					<View style={{ flex: 1, height: 1, backgroundColor: 'black' }} />
				</View>

				<TouchableOpacity
					style={styles.button}
					onPress={() => navigation.navigate('Register')}>
					<Text style={styles.text}>Create an Account</Text>
				</TouchableOpacity>
				<View style={styles.loginContainer}>
					<Text style={styles.text}>Already have an account? </Text>
					<TouchableOpacity onPress={() => navigation.navigate('Login')}>
						<Text style={styles.loginText} Text>
							Log in here
						</Text>
					</TouchableOpacity>
				</View>
				<TouchableOpacity onPress={() => navigation.navigate('Home')}>
					<Text style={styles.text} Text>
						Continue as guest
					</Text>
				</TouchableOpacity>
			</View>
		</SafeAreaView>
	);
}
const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		backgroundColor: colors.light,
		alignItems: 'center',
	},
	ssoButton: {
		color: colors.black,
	},
	button: {
		alignItems: 'center',
		width: '100%',
		margin: 5,
		padding: 15,
		backgroundColor: colors.primary,
		borderRadius: 25,
	},
	buttonContainer: {
		justifyContent: 'center',
		alignItems: 'center',
		width: '60%',
		marginTop: 40,
	},
	loginText: {
		color: colors.primary,
		fontWeight: '500',
		fontSize: 14,
	},
	loginContainer: {
		flexDirection: 'row',
		marginTop: 15,
		marginBottom: 15,
	},
	text: { color: colors.black, fontWeight: '500', fontSize: 14 },
	title: { marginBottom: 5, fontSize: 20, fontWeight: '700' },
	titleBear: { fontSize: 200 },
});

export default WelcomeScreen;
