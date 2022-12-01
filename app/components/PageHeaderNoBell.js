import React from 'react';
import { Image, SafeAreaView, StyleSheet } from 'react-native';
import colors from '../config/colors';

// Assets
import ReplayLogo from '../assets/png/replay-logo.png';

function PageHeaderNoBell() {
	return (
		<SafeAreaView style={styles.container}>
			<Image style={styles.logo} source={ReplayLogo} />
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		justifyContent: 'center',
		alignItems: 'center',
		height: 60,
		marginTop: -5,
		marginBottom: 40,
		borderBottomWidth: 1,
		borderBottomColor: colors.blue,
	},
	logo: { marginBottom: 10 },
});

export default PageHeaderNoBell;
