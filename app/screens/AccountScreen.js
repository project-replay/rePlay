import React from 'react';
import ListItem from '../components/ListItem';
import Screen from '../components/Screen';
import Icon from '../components/Icon';
import { FlatList, StyleSheet, View } from 'react-native';
import colors from '../config/colors';
import ListItemSeperator from '../components/ListItemSeperator';

const menuItems = [
    {
        title: "My Listings",
        icon: {
            name: "format-list-bulleted",
            backgroundColor: colors.primary,
        }
    },
    {
        title: "My Messages",
        icon: {
            name: "email",
            backgroundColor: colors.secondary,
        }
    }
]

function AccountScreen(props) {
    return (
        <Screen style={styles.screen}>
            <View style={styles.continer}>
                <ListItem 
                title="My Name"
                subTitle="youremailhere@gmail.com"
                image={{uri:"https://picsum.photos/200"}}
                />
            </View>
            <View style={styles.continer}>
                <FlatList
                    data={menuItems}
                    keyExtractor={menuItem => menuItem.title}
                    ItemSeparatorComponent={ListItemSeperator}
                    renderItem={({ item }) => 
                        <ListItem
                        title={item.title}
                        IconComponent={
                            <Icon name={item.icon.name}
                            backgroundColor={item.icon.backgroundColor}
                            />
                        }
                        />
                } 
            />
            </View>
            <ListItem
            title="Log Out"
            IconComponent={
                <Icon name="logout"
                backgroundColor='#ffe66d'
                />
            }
            />
        </Screen>
    );
}

const styles = StyleSheet.create({
    continer: {
        marginVertical: 20,
    },
    screen: {
        backgroundColor: colors.light
    }
})

export default AccountScreen;