import React from 'react';
import { Dimensions, FlatList, Image, View } from 'react-native';
import PaginationDot from 'react-native-animated-pagination-dot';

// PNG images
import BabyClothes from '../assets/png/baby-clothes.png';
import Blocks from '../assets/png/blocks.png';
import BoxOfItems from '../assets/png/box-of-items.png';
import Stroller from '../assets/png/stroller.png';
import Train from '../assets/png/train.png';
import Truck from '../assets/png/truck.png';
import colors from '../config/colors';
import styles from '../config/styles';

import AppText from './AppText';
const windowWidth = Dimensions.get('window').width;

const data = [
	{
		id: 0,
		image: Train,
		description: 'Give your items a\nsecond chance',
	},
	{
		id: 1,
		image: Truck,
		description:
			'Trade, sell or donate your\nitems locally, reducing your \ncarbon footprint',
	},
	{
		id: 2,
		image: BoxOfItems,
		description: 'Declutter your space &\nprotect your planet',
	},
	{
		id: 3,
		image: Stroller,
		description: 'Neglected toys will\nhave a new home',
	},
	{
		id: 4,
		image: BabyClothes,
		description: 'Pass on outgrown clothes\nto new families',
	},
	{
		id: 5,
		image: Blocks,
		description: 'Pass on outgrown clothes\nto new families',
	},
];

export default function Carousel() {
	const [current] = React.useState(0);
	const [curPage] = React.useState(0);

	const length = data.length;
	const flatListRef = React.useRef();

	const renderItem = ({ item }) => {
		return (
			<View
				style={{
					justifyContent: 'flex-end',
					alignItems: 'center',
					width: windowWidth,
					height: 300,
					marginBottom: 40,
				}}>
				<Image
					source={item.image}
					style={{
						marginTop: 100,
					}}
				/>
				<AppText
					children={item.description}
					style={{
						marginTop: 20,
						marginBottom: 20,
						textAlign: 'center',
						fontSize: 17,
						fontWeight: 'bold',
						color: colors.blue,
					}}
				/>
				<PaginationDot
					activeDotColor={colors.primary}
					curPage={item.id}
					maxPage={6}
					
				/>
			</View>
		);
	};

	const goNextSlide = () => {
		setCurrent(current === length - 1 ? 0 : current + 1);
		flatListRef.current.scrollToIndex({ index: current, animated: true });
		setCurPage(current);
	};
	const goPrevSlide = () => {
		setCurrent(current === 0 ? length - 1 : current - 1);
		setCurPage(current);
		flatListRef.current.scrollToIndex({ index: current, animated: true });
	};

	return (
		<View style={{ flex: 1 }}>
			<FlatList
				data={data}
				keyExtractor={(item) => item.id}
				renderItem={renderItem}
				horizontal={true}
				showsHorizontalScrollIndicator={false}
				pagingEnabled={true}
				ref={flatListRef}
			/>
		</View>
	);
}
