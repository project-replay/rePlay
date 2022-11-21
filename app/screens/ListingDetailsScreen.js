'react';
import { Image, View, StyleSheet } from 'react-native';
import AppText from '../components/AppText';
import colors from '../config/colors';
import ListItem from '../components/ListItem';
import AppButton from '../components/AppButton';


function ListingDetailsScreen(props) {
    return (
        <View>
            <Image style={styles.image} source={require('../assets/jacket.jpg')} />
            <View style={styles.detailsContainer}>
                <AppText style={styles.title}>Red Jacket for Sale!</AppText>
                <AppText style={styles.price}>$100</AppText>
                <AppText style={styles.description}>Description</AppText>
                <AppText style={styles.descriptionText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </AppText>
                <AppText style={styles.condition}>Condition:</AppText>
                <AppText style={styles.location}>Location:</AppText>
                <AppText style={styles.tags}>Tags</AppText>
                <View style={styles.userContainer}>
                    <ListItem
                        image={{ uri: "https://picsum.photos/200/300" }}
                        title="Name Here"
                        subTitle="5 Listings"
                    />
                </View>
                <AppButton
                    title={'Edit Listing'}


                />
            </View>
        </View>
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
