import * as React from 'react';
import { Text, View, FlatList, Image } from 'react-native';

// PNG images
import BabyClothes from '../assets/png/baby-clothes.png';
import Blocks from '../assets/png/blocks.png';
import BoxOfItems from '../assets/png/box-of-items.png';
import Stroller from '../assets/png/stroller.png';
import Train from '../assets/png/train.png';
import Truck from '../assets/png/truck.png';

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
	const [current, setCurrent] = React.useState(0);
	const length = data.length;
	const flatListRef = React.useRef();

	const renderItem = ({ item }) => {
		return (
			<View style={{ width: 300, height: 500 }}>
				<Image source={item.image} />
				<Text>{item.description}</Text>
			</View>
		);
	};

	const goNextSlide = () => {
		setCurrent(current === length - 1 ? 0 : current + 1);
		flatListRef.current.scrollToIndex({ index: current, animated: true });
	};
	const goPrevSlide = () => {
		setCurrent(current === 0 ? length - 1 : current - 1);
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
