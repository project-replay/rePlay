import React, { useState } from 'react';
import {Image, StyleSheet, View} from 'react-native'
import AppButton from '../components/AppButton';
import AppTextInput from '../components/AppTextInput';
import Screen from '../components/Screen';
import ReplayLogo from '../assets/svg/ReplayLogo';
import colors from '../config/colors';

function LoginScreen(props) {
const [email, setEmail] = useState();
const [password, setPassword] = useState();

    return (
        <Screen style={styles.container}>
            <View style={styles.header}>
            <ReplayLogo  />
            </View>
            <AppTextInput
            autoCapitalize="none"
            autoCorrect={false}
            icon="email"
            keyboardType="email-address"
            onChangeText={text => setEmail(text)}
            placeholder="Email"
            textContentType="emailAddress"
            />
            <AppTextInput 
            autoCapitalize="none"
            autoCorrect={false}
            icon="lock"
            onChangeText={text => setPassword(text)}
            placeholder="Password"
            secureTextEntry
            textContentType="password"
            />
            <AppButton 
            title="Login"
            onPress={() => console.log(email, password)}
            />
        </Screen>
    );
}
const styles = StyleSheet.create({
    container: {
        padding: 10,
        backgroundColor: colors.light
    },
    header: {
        justifyContent: "center",
        alignSelf: "center",
        margin: 10,
    },
    logo: {
        width: 80,
        height: 80,
        alignSelf: "center",
        marginTop: 50,
        marginBottom: 20,
    }
})

export default LoginScreen;