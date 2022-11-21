import { useContext, useEffect, useRef, useState } from 'react';
import { Image, Text, View, StyleSheet } from 'react-native';
import colors from '../config/colors';
import { AppStateContext } from '../../App';

// Components
import AppButton from '../components/AppButton';
import AppText from '../components/AppText';
import ListItem from '../components/ListItem';
import PageHeaderWithBell from '../components/PageHeaderWithBell';
import PageFooter from '../components/PageFooter';
import Screen from '../components/Screen';

function CreateListingScreen() {
	const { imageUrl } = useContext(AppStateContext);

	return (
		<Screen>
			<PageHeaderWithBell />
			<AppText children={'Create Listing'} style={styles.header} />
			<Image
				source={{
					uri: 'https://res.cloudinary.com/dwppzi7rk/image/upload/v1669005468/z1btqpgaqb5azlxi92nc.jpg',
				}}
				style={{ width: 100, height: 100 }}
			/>
			<PageFooter />
		</Screen>
	);
}

const styles = StyleSheet.create({});

export default CreateListingScreen;
