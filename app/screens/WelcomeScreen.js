import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import colors from '../config/colors';

// Components:
import AppButton from '../components/AppButton';
import AppText from '../components/AppText';
import Carousel from '../components/Carousel';

import ReplayLogo from '../assets/svg/ReplayLogo';

function WelcomeScreen({navigation}) {
	return (
		<SafeAreaView style={styles.container}>
			<ScrollView>
			<ReplayLogo />

			{/* <TouchableOpacity style={styles.arrow} onPress={() => {}}>
				<AntDesign name='arrowright' size={25} color={colors.primary} />
			</TouchableOpacity> */}

			<Carousel />

			<AppButton title={'Continue with Google'} onPress={() => {}} />
			<AppButton title={'Continue with Facebook'} onPress={() => {}} />

			{/* The "----- or -----" component */}
			<View
				style={{
					flexDirection: 'row',
					alignItems: 'center',
					width: '90%',
				}}>
				<View
					style={{
						flex: 1,
						marginRight: 10,
						height: 1,
						backgroundColor: colors.primary,
					}}
				/>
				<AppText text={'or'} fontSize={20} textColor={'medium'} />
				<View
					style={{
						flex: 1,
						marginLeft: 10,
						height: 1,
						backgroundColor: colors.primary,
					}}
				/>
			</View>

			<AppButton title={'Create Your Account'} onPress={() => navigation.navigate("Register")} />

			<View style={styles.loginContainer}>
				<AppText
					text={'Already have an account? '}
					paddingTop={20}
					fontSize={17}
					textColor={'medium'}
				/>
				<TouchableOpacity style={[styles.login]} onPress={() => navigation.navigate("Login")}>
					<AppText
						text={'Log in here'}
						paddingTop={20}
						fontSize={17}
						textColor={'primary'}
					/>
				</TouchableOpacity>
			</View>

			<AppButton
				title={'Continue as guest'}
				onPress={() => {}}
				color={'primary'}
			/>
			</ScrollView>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	arrow: { position: 'absolute', alignSelf: 'flex-end', top: 300, right: 50 },
	container: {
		flex: 1,
		justifyContent: 'center',
		backgroundColor: colors.light,
		alignItems: 'center',
	},
	loginContainer: {
		flexDirection: 'row',
	},
	ssoButton: {
		color: colors.black,
	},
});

export default WelcomeScreen;
