import React, { useContext } from 'react';
import { Image, ScrollView, StyleSheet, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { AppStateContext } from '../../App';
import { Ionicons } from '@expo/vector-icons';
import colors from '../config/colors';

// Components
import AppText from '../components/AppText';
import AppTextInput from '../components/AppTextInput';
import ListItemSquare from '../components/ListItemSquare';
import PageHeaderWithBell from '../components/PageHeaderWithBell';
import PageFooter from '../components/PageFooter';
import Screen from '../components/Screen';

// Assets
import BabyClothes from '../assets/png/baby-clothes.png';
import Backpack from '../assets/png/backpack.png';
import Crib from '../assets/png/crib.png';
import Xylophone from '../assets/png/xylophone.png';

function BrowsingFeedScreen() {
	const { imageUrl } = useContext(AppStateContext);

	return (
		<Screen style={styles.container}>
			<ScrollView>
				<PageHeaderWithBell />

				<AppText children='What can we help you find?' style={styles.header} />
				<AppTextInput
					icon='feature-search-outline'
					onChangeText={() => {}}
					value={''}
					placeholder='Search'
				/>
				<AppTextInput
					icon='filter'
					onChangeText={() => {}}
					value={''}
					placeholder='Filter'
				/>

				{/* <TouchableOpacity
					style={[styles.userListingNotification, styles.border]}>
					<Image
						style={[styles.userListingImage, styles.border]}
						source={{
							uri: 'https://res.cloudinary.com/dwppzi7rk/image/upload/v1669005468/z1btqpgaqb5azlxi92nc.jpg',
						}}
					/>
					<AppText
						children={'Your item has been listed.\nClick here to view it.'}
						style={styles.userListingText}
					/>
					<Ionicons
						name='checkmark-circle-outline'
						size={50}
						color={colors.secondary}
					/>
				</TouchableOpacity> */}

				<AppText children='Shop by categories' style={styles.header} />
				<View style={styles.categoryImageContainer}>
					<ListItemSquare
						imageSource={Xylophone}
						containerWidth={170}
						imageWidth={100}
						color='primary'
						hasText={true}
						text='Toys'
					/>
					<ListItemSquare
						imageSource={Crib}
						containerWidth={170}
						imageWidth={100}
						color='secondary'
						hasText={true}
						text='Baby Furniture'
					/>
					<ListItemSquare
						imageSource={BabyClothes}
						containerWidth={170}
						imageWidth={100}
						color='blue'
						hasText={true}
						text='Baby Clothing'
					/>
					<ListItemSquare
						imageSource={Backpack}
						containerWidth={170}
						imageWidth={100}
						color='yellow'
						hasText={true}
						text='Other'
					/>
				</View>

				<AppText children='For Trade' style={styles.header} />
				<View style={styles.tradeImageContainer}>
					<ListItemSquare
						imageSource={{ uri: 'https://picsum.photos/200' }}
						containerWidth={100}
						imageWidth={99}
						color='primary'
						hasImageBorderRadius
					/>
					<ListItemSquare
						imageSource={{ uri: 'https://picsum.photos/200' }}
						containerWidth={100}
						imageWidth={99}
						color='primary'
						hasImageBorderRadius
					/>
					<ListItemSquare
						imageSource={{ uri: 'https://picsum.photos/200' }}
						containerWidth={100}
						imageWidth={99}
						color='primary'
						hasImageBorderRadius
					/>
					<ListItemSquare
						imageSource={{ uri: 'https://picsum.photos/200' }}
						containerWidth={100}
						imageWidth={99}
						color='primary'
						hasImageBorderRadius
					/>
					<ListItemSquare
						imageSource={{ uri: 'https://picsum.photos/200' }}
						containerWidth={100}
						imageWidth={99}
						color='primary'
						hasImageBorderRadius
					/>
					<ListItemSquare
						imageSource={{ uri: 'https://picsum.photos/200' }}
						containerWidth={100}
						imageWidth={99}
						color='primary'
						hasImageBorderRadius
					/>
				</View>

				<AppText children='For Sale' style={styles.header} />
				<View style={styles.tradeImageContainer}>
					<ListItemSquare
						imageSource={{ uri: 'https://picsum.photos/200' }}
						containerWidth={100}
						imageWidth={99}
						color='secondary'
						hasImageBorderRadius
					/>
					<ListItemSquare
						imageSource={{ uri: 'https://picsum.photos/200' }}
						containerWidth={100}
						imageWidth={99}
						color='secondary'
						hasImageBorderRadius
					/>
					<ListItemSquare
						imageSource={{ uri: 'https://picsum.photos/200' }}
						containerWidth={100}
						imageWidth={99}
						color='secondary'
						hasImageBorderRadius
					/>
					<ListItemSquare
						imageSource={{ uri: 'https://picsum.photos/200' }}
						containerWidth={100}
						imageWidth={99}
						color='secondary'
						hasImageBorderRadius
					/>
					<ListItemSquare
						imageSource={{ uri: 'https://picsum.photos/200' }}
						containerWidth={100}
						imageWidth={99}
						color='secondary'
						hasImageBorderRadius
					/>
					<ListItemSquare
						imageSource={{ uri: 'https://picsum.photos/200' }}
						containerWidth={100}
						imageWidth={99}
						color='secondary'
						hasImageBorderRadius
					/>
				</View>

				<AppText children='Based on your location' style={styles.header} />
				<View style={styles.tradeImageContainer}>
					<ListItemSquare
						imageSource={{ uri: 'https://picsum.photos/200' }}
						containerWidth={100}
						imageWidth={99}
						color='blue'
						hasImageBorderRadius
					/>
					<ListItemSquare
						imageSource={{ uri: 'https://picsum.photos/200' }}
						containerWidth={100}
						imageWidth={99}
						color='blue'
						hasImageBorderRadius
					/>
					<ListItemSquare
						imageSource={{ uri: 'https://picsum.photos/200' }}
						containerWidth={100}
						imageWidth={99}
						color='blue'
						hasImageBorderRadius
					/>
					<ListItemSquare
						imageSource={{ uri: 'https://picsum.photos/200' }}
						containerWidth={100}
						imageWidth={99}
						color='blue'
						hasImageBorderRadius
					/>
					<ListItemSquare
						imageSource={{ uri: 'https://picsum.photos/200' }}
						containerWidth={100}
						imageWidth={99}
						color='blue'
						hasImageBorderRadius
					/>
					<ListItemSquare
						imageSource={{ uri: 'https://picsum.photos/200' }}
						containerWidth={100}
						imageWidth={99}
						color='blue'
						hasImageBorderRadius
					/>
				</View>
			</ScrollView>
		</Screen>
	);
}

const styles = StyleSheet.create({
	border: {
		borderRadius: 10,
		borderStyle: 'solid',
		borderWidth: 1,
	},
	categoryImageContainer: {
		display: 'flex',
		flexDirection: 'row',
		flexWrap: 'wrap',
		justifyContent: 'space-around',
		height: 375,
	},
	container: {
		backgroundColor: colors.light,
		padding: 10,
	},
	header: {
		left: 10,
		paddingTop: 20,
		color: colors.black,
		fontSize: 20,
		fontWeight: 'bold',
	},
	tradeImageContainer: {
		flexDirection: 'row',
		flexWrap: 'no-wrap',
	},
	userListingImage: {
		width: 55,
		height: 55,
		margin: 7,
		borderColor: colors.blue,
	},
	userListingNotification: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		backgroundColor: colors.white,
		borderColor: colors.primary,
	},
	userListingText: {
		textAlign: 'center',
		fontSize: 14,
		fontWeight: 'bold',
	},
});

export default BrowsingFeedScreen;
