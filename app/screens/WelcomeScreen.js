import React from 'react';
import { Image, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import AppButton from '../components/AppButton';
import AppText from '../components/AppText';
import {MaterialCommunityIcons} from '@expo/vector-icons';
import colors from '../config/colors';

function WelcomeScreen(props) {
    return (
        <SafeAreaView style={{
            flex: 1,
            backgroundColor: colors.white,
            alignItems: "center",
           }}>
            <Text style={styles.header}>rePlay</Text>
            <MaterialCommunityIcons name="teddy-bear" size={300} color="dodgerblue" />
            <View style={styles.body}>
            <AppText>Give your items a second chance</AppText>
            </View>
            <AppButton title="Login" onPress={() => console.log("Tapped Login")}></AppButton>
            <AppText>-------------------- or --------------------</AppText>
            <AppButton title="Sign Up" onPress={() => console.log("Tapped Sign Up")}></AppButton>
          </SafeAreaView>
    );
}
const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: "flex-end",
        alignItems: "center"
    },
    registerButton: {
        width: '100%',
        height: 70,
        backgroundColor: "#4ecdc4",
    },
    logo: {
        width: 100,
        height: 100,
    },
    logoContainer: {
        position: 'absolute',
        top: 70,
        alignItems: "center"
    },
    header: {
        fontSize: 60,
        fontWeight: "900",
        textAlign: "center",
        color: "dodgerblue",
        paddingBottom: 60,
      },
      body: {
        width: "60%",
        paddingHorizontal: 20,
        paddingTop: 30,
        paddingBottom: 20,
      },
});

export default WelcomeScreen;