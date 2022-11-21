'react';
import { Image, View, StyleSheet, ScrollView } from 'react-native';
import AppText from '../components/AppText';
import colors from '../config/colors';
import ListItem from '../components/ListItem';
import AppButton from '../components/AppButton';


function ListingDetailsScreen({route, navigation}) {
    const listing = route.params;
    return (
        <ScrollView>
        <View>
            <Image style={styles.image} source={listing.image} />
            <View style={styles.detailsContainer}>
                <AppText style={styles.title}>{listing.title}</AppText>
                <AppText style={styles.price}>${listing.price}</AppText>
                <AppText style={styles.description}>{listing.description}</AppText>
                <AppText style={styles.descriptionText}>Description: {listing.descriptionText}</AppText>
                <AppText style={styles.condition}>Condition: {listing.condition}:</AppText>
                <AppText style={styles.location}>Location: {listing.location}:</AppText>
                <AppText style={styles.tags}>Tags: {listing.tags}</AppText>
                <View style={styles.userContainer}>
                    <ListItem
                        image={{ uri: "https://picsum.photos/200/300" }}
                        title="Name Here"
                        subTitle="5 Listings"
                    />
                </View>
                <AppButton
                    title={'Edit Listing'}
                    onPress={() => navigation.navigate("Edit Listing")}


                />
            </View>
        </View>
        </ScrollView>
        
    );
}

const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: 300,
    },
    detailsContainer: {
        padding: 20,
    },
    price: {
        color: "green",
        fontWeight: "bold",
        fontSize: 20,
        marginVertical: 10,
    },
    title: {
        fontSize: 24,
        fontWeight: "500",
    },
    userContainer: {
        marginVertical: 40,
    },
    description: {
        fontWeight: '500'
    },
    descriptionText: {
        fontWeight: '100',
        paddingTop: 10,
    },
    condition: {
        fontWeight: '500',
        paddingTop: 15,
    },
    location: {
        fontWeight: '500',
        paddingTop: 15,
    },
    tags: {
        fontWeight: '500',
        paddingTop: 15,
    }
})

export default ListingDetailsScreen;
