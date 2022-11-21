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
      <View style={styles.spacer}/>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	bell: { position: 'absolute', top: 65, right: 25 },
	container: {
		position: 'relative',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		borderBottomWidth: 1,
		borderBottomColor: colors.blue,
	},
  spacer:{
    padding: 7
  }
});

export default PageHeader;
