import React from 'react';
import { Image, SafeAreaView, StyleSheet, View } from 'react-native';
import colors from '../config/colors';

import NotificationBell from '../assets/png/notification-bell.png';
import ReplayLogo from '../assets/png/replay-logo.png';

function PageHeaderWithBell(props) {
	return (
		<SafeAreaView style={styles.container}>
			<Image style={styles.logo} source={ReplayLogo} />
			<Image style={styles.bell} source={NotificationBell} />
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	bell: { marginLeft: 80, marginRight: 25 },
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
});

export default PageHeaderWithBell;
