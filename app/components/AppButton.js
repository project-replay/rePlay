import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import AppText from './AppText';
import colors from '../config/colors';

function AppButton({title, onPress, bgColor = "primary", style ={style}}) {
    return (
        <TouchableOpacity style={[styles.button, { backgroundColor: colors[bgColor]}, style]} onPress={onPress}>
            <Text style={[styles.text, style]}>{title}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
	button: {
        backgroundColor: colors.primary,
        borderRadius: 25,
        justifyContent: "center",
        alignItems: "center",
        padding: 5,
        width: "100%",
    },
    text: {
        color: colors.white,
        fontSize: 18,
        fontWeight: "bold",
    },
});

export default AppButton;
