import React from 'react';
import { Image, SafeAreaView, StyleSheet, View } from 'react-native';
import colors from '../config/colors';

// Assets
import NotificationBell from '../assets/png/notification-bell.png';
import ReplayLogo from '../assets/png/replay-logo.png';

function PageHeaderNoBell(props) {
	return (
		<SafeAreaView style={styles.container}>
			<Image style={styles.logo} source={ReplayLogo} />
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	bell: { marginLeft: 100, marginRight: 25 },
	container: {
		justifyContent: 'center',
		alignItems: 'center',
		height: 60,
		marginTop: -5,
		borderBottomWidth: 1,
		borderBottomColor: colors.blue,
	},
	logo: { marginBottom: 0 },
});

export default PageHeaderNoBell;
