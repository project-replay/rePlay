import React from 'react';
import { FlatList, StyleSheet } from 'react-native';
import Card from '../components/Card';
import Screen from '../components/Screen';
import colors from '../config/colors';
import route from '../navigation/route';

const listings = [
    {
        id: 1,
        title: 'Red Jacket for Sale',
        price: 100,
        description: 'Red Jacket',
        descriptionText: 'Beautiful Red Jacket that will make you look cool',
        condition: 'Used: Like New',
        location: 'Near You',
        tags: "Jacket, Clothes, Fashion",
        image: require('../assets/jacket.jpg')
    },
    {
        id: 2,
        title: 'Couch',
        price: 1000,
        description: 'Couch',
        descriptionText: 'Beautiful Couch that will make your guests never leave',
        condition: 'Used: Like New',
        location: 'Near You',
        tags: "Couch, Furniture, Living",
        image: require('../assets/couch.jpg')
    },
    
];

function ListingsScreen({navigation}) {
    return (
        <Screen style={styles.screen}>
            <FlatList 
            data={listings}
            keyExtractor={listing => listing.id.toString()}
            renderItem={({ item }) =>
                <Card 
                title={item.title}
                subTitle={"$" + item.price}
                image={item.image}
                onPress={() => navigation.navigate(route.LISTING_DETAILS, item)}
                />
            }
            />
        </Screen>
    );
}

const styles = StyleSheet.create({
    screen: {
        padding: 20,
        backgroundColor: colors.light
    }
})

export default ListingsScreen;