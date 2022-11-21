import React from 'react';
import { Image, SafeAreaView, StyleSheet, View } from 'react-native';
import colors from '../config/colors';

import NotificationBell from '../assets/png/notification-bell.png';
import ReplayLogo from '../assets/png/replay-logo.png';

function PageHeader(props) {
	return (
		<SafeAreaView style={styles.container}>
			<Image style={styles.logo} source={ReplayLogo} />
			<Image style={styles.bell} source={NotificationBell} />
			<View style={styles.spacer} />
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	bell: { marginLeft: 100, marginRight: 10 },
	container: {
		position: 'relative',
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'flex-end',
		alignItems: 'center',
		height: 60,
		marginTop: -5,
		borderBottomWidth: 1,
		borderBottomColor: colors.blue,
	},
	logo: { marginBottom: 0 },
	spacer: {
		padding: 7,
	},
});

export default PageHeader;
