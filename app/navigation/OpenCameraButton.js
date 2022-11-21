import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import colors from '../config/colors';
import { MaterialCommunityIcons } from '@expo/vector-icons';

function OpenCameraButton({onPress}) {
    return (
        <TouchableOpacity onPress={onPress}>
        <View style={styles.container}>
            <MaterialCommunityIcons name="camera" color={colors.white} size={30} />
        </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
       backgroundColor: colors.primary,
       borderColor: colors.light,
       borderWidth: 10,
       height: 80,
       width: 80,
       borderRadius: 40,
       bottom: 20, 
       alignItems: 'center',
       justifyContent: 'center'
    },
})

export default OpenCameraButton;