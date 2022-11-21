import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import AppButton from '../components/AppButton';
import AppTextInput from '../components/AppTextInput';
import Screen from '../components/Screen';
import ReplayLogo from '../assets/svg/ReplayLogo';
import colors from '../config/colors';
import CarToy from '../assets/svg/CarToy';
import AppText from '../components/AppText';
import ListItemSeparator from '../components/ListItemSeparator';
import { Formik } from 'formik';

function EditScreen(props) {
    return (
        <Screen style={styles.container}>
            <View style={styles.header}>
                <ReplayLogo />
            </View>
            <ListItemSeparator />
            <AppText style={styles.editList}>Edit Your Listing</AppText>
            <View style={styles.listPic}>
                <CarToy />
            </View>

            <Formik

                initialValues={{ product: '', type: '', sell: '', condition: '', price: '', description: '', }}
                onSubmit={(values) => console.log(values)}>
                {({ handleChange, handleSubmit }) => (
                    <>
                        <AppTextInput
                            autoCapitalize='none'
                            autoCorrect={false}
                            keyboardType='email-address'
                            onChangeText={handleChange('product')}
                            placeholder='Product'
                        // textContentType='emailAddress'
                        />
                        <AppTextInput
                            autoCapitalize='none'
                            autoCorrect={false}
                            onChangeText={handleChange('type')}
                            placeholder='Type'
                        // textContentType='type'
                        />
                        <AppTextInput
                            autoCapitalize='none'
                            autoCorrect={false}
                            onChangeText={handleChange('sell')}
                            placeholder='Sell'
                        // textContentType='type'
                        />
                        <AppTextInput
                            autoCapitalize='none'
                            autoCorrect={false}
                            onChangeText={handleChange('price')}
                            placeholder='Price'
                        // textContentType='type'
                        />
                        <AppTextInput
                            autoCapitalize='none'
                            autoCorrect={false}
                            onChangeText={handleChange('condition')}
                            placeholder='Condition'
                        // textContentType='type'
                        />
                        <AppTextInput
                            autoCapitalize='none'
                            autoCorrect={false}
                            onChangeText={handleChange('description')}
                            placeholder='Description'
                        // textContentType='type'
                        />
                        <AppButton
                            style={styles.text}
                            title='Done edit'
                            onPress={handleSubmit}
                            bgColor='primary'
                        />
                    </>
                )}
            </Formik>
        </Screen>
    );
}
const styles = StyleSheet.create({
    container: {
        padding: 10,
        backgroundColor: colors.light,
    },
    header: {
        justifyContent: 'center',
        alignSelf: 'center',
        margin: 0,
    },
    logo: {
        width: 80,
        height: 80,
        alignSelf: 'center',
        marginTop: 50,
        marginBottom: 20,
    },
    text: {
        color: 'white',
    },
    listPic: {
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10,

    },
    editList: {
        fontWeight: '500',
        justifyContent: 'center',
        alignSelf: 'center',
        fontSize: 20,
        paddingBottom: 5,
        color: '#434343'
    },


});

export default EditScreen;
