import React, { useState } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import ListItem from '../components/ListItem';
import Screen from '../components/Screen';
import ListItemSeparator from '../components/ListItemSeparator';
import ListItemDeleteAction from '../components/ListItemDeleteAction';

const initialMessages = [
	{
		id: 1,
		title: 'T1',
		description: 'Hello New Friend',
		image: { uri: 'https://picsum.photos/200' },
	},
	{
		id: 2,
		title: 'T2',
		description: "It's dangerous to go alone, take This",
		image: { uri: 'https://picsum.photos/200' },
	},
];

function MessagesScreen(props) {
	const [messages, setMessages] = useState(initialMessages);
	const [refreshing, setRefreshing] = useState(false);

	const handleDelete = (message) => {
		setMessages(messages.filter((m) => m.id !== message.id));
	};

	return (
		<Screen>
			<FlatList
				data={messages}
				keyExtractor={(message) => message.id.toString()}
				renderItem={({ item }) => (
					<ListItem
						title={item.title}
						subTitle={item.description}
						image={item.image}
						onPress={() => console.log('Message Selected', item)}
						renderRightActions={() => (
							<ListItemDeleteAction onPress={() => handleDelete(item)} />
						)}
					/>
				)}
				ItemSeparatorComponent={ListItemSeparator}
				refreshing={refreshing}
				onRefresh={() => {
					setMessages([
						{
							id: 2,
							title: 'T2',
							description: 'D2',
							image: { uri: 'https://picsum.photos/200' },
						},
					]);
				}}
			/>
		</Screen>
	);
}

const styles = StyleSheet.create({});

export default MessagesScreen;
