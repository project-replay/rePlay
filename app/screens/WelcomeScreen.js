import React from 'react';
import { SafeAreaView, StyleSheet, TouchableOpacity, View } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import colors from '../config/colors';

// Components:
import AppButton from '../components/AppButton';
import AppText from '../components/AppText';

// SVG Images:
import BabyBlocks from '../assets/svg/BabyBlocks';
import BabyClothes from '../assets/svg/BabyClothes';
import BabyProducts from '../assets/svg/BabyProducts';
import FacebookIcon from '../assets/svg/FacebookIcon';
import GoogleIcon from '../assets/svg/GoogleIcon';
import ReplayLogo from '../assets/svg/ReplayLogo';
import MovingTruck from '../assets/svg/MovingTruck';
import StopSign from '../assets/svg/StopSign';
import Stroller from '../assets/svg/Stroller';
import Train from '../assets/svg/Train';

function WelcomeScreen() {

	return (
		<SafeAreaView style={styles.container}>
			<View>
				<ReplayLogo />
				<Train />
				{/* <MovingTruck />
				<StopSign />
				<BabyProducts />
				<Stroller />
				<BabyClothes />
				<BabyBlocks /> */}
			</View>

			<TouchableOpacity style={styles.arrow} onPress={() => {}}>
				<AntDesign name='arrowright' size={25} color={colors.primary} />
			</TouchableOpacity>

			<AppText
				text={'Give your items a\nsecond chance'}
				paddingTop={35}
				fontSize={20}
				textColor={'medium'}
			/>

			<AppButton
				// component={<GoogleIcon />}
				title={'Continue with Google'}
				onPress={() => {}}
				bgColor={'white'}
				textColor={'black'}
				fontSize={20}
				hasBorder
			/>

			<AppButton
				// component={<FacebookIcon />}
				title={'Continue with Facebook'}
				onPress={() => {}}
				bgColor={'white'}
				textColor={'black'}
				hasBorder
				fontSize={20}
			/>

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

			<AppButton
				title={'Create Your Account'}
				bgColor={'primary'}
				textColor={'light'}
				fontSize={20}
			/>

			<View style={styles.loginContainer}>
				<AppText
					text={'Already have an account? '}
					paddingTop={20}
					fontSize={17}
					textColor={'medium'}
				/>
				<TouchableOpacity style={[styles.login]} onPress={() => {}}>
					<AppText
						text={'Log in here'}
						paddingTop={20}
						fontSize={17}
						textColor={'primary'}
					/>
				</TouchableOpacity>
			</View>

			<TouchableOpacity onPress={() => {}}>
				<AppText
					text={'Continue as guest'}
					paddingTop={20}
					fontSize={17}
					textColor={'medium'}
				/>
			</TouchableOpacity>
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
});

export default WelcomeScreen;
