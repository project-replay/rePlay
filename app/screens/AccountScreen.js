import React from 'react';
import ListItem from '../components/ListItem';
import Screen from '../components/Screen';
import Icon from '../components/Icon';
import { FlatList, StyleSheet, View } from 'react-native';
import colors from '../config/colors';
import ListItemSeparator from '../components/ListItemSeparator';

const menuItems = [
	{
		title: 'My Listings',
		icon: {
			name: 'format-list-bulleted',
			backgroundColor: colors.primary,
		},
	},
	{
		title: 'Messages',
		icon: {
			name: 'email',
			backgroundColor: colors.secondary,
		},
		targetScreen: "Messages",
	},
];

function AccountScreen({navigation}) {
	return (
		<Screen style={styles.screen}>
			<View style={styles.container}>
				<ListItem
					title='My Name'
					subTitle='youremailhere@gmail.com'
					image={{ uri: 'https://picsum.photos/200' }}
					
				/>
				<ListItemSeparator></ListItemSeparator>
			</View>
			<View style={styles.container}>
				<FlatList
					data={menuItems}
					keyExtractor={(menuItem) => menuItem.title}
					renderItem={({ item }) => (
						<ListItem
							title={item.title}
							IconComponent={
								<Icon
									name={item.icon.name}
									backgroundColor={item.icon.backgroundColor}
								/>
							}
							onPress={() => navigation.navigate(item.title)}
						/>
					)}
				/>
			</View>
			<ListItem
				title='Log Out'
				IconComponent={<Icon name='logout' backgroundColor='#ffe66d' />}
				onPress={() => navigation.navigate("Welcome") }
			/>
		</Screen>
	);
}

const styles = StyleSheet.create({
	container: {
		margin: 10,
	},
	screen: {
		backgroundColor: colors.light,
	},
});

export default AccountScreen;
