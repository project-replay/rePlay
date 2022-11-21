import { useContext, useEffect, useRef, useState } from 'react';
import { Image, Text, View, StyleSheet, ScrollView } from 'react-native';
import colors from '../config/colors';
import { AppStateContext } from '../../App';
import ReplayLogo from '../assets/svg/ReplayLogo';
import * as Yup from 'yup';

// Components
import AppButton from '../components/AppButton';
import AppForm from '../components/AppForm';
import AppFormField from '../components/AppFormField';
import AppText from '../components/AppText';
import ListItem from '../components/ListItem';
import ListItemSeparator from '../components/ListItemSeparator';
import PageHeaderWithBell from '../components/PageHeaderWithBell';
import Screen from '../components/Screen';
import PickerItem from '../components/PickerItem';
import SubmitButton from '../components/SubmitButton';
import AppPicker from '../components/AppPicker';

const validationSchema = Yup.object().shape({
	title: Yup.string().required().label('Title'),
	category: Yup.string().required().label('Category'),
});

const categories = [
	{ label: 'Toys', value: '1' },
	{ label: 'Baby Furniture', value: '2' },
	{ label: 'Baby Clothing', value: '3' },
	{ label: 'Toddler Toys', value: '4' },
	{ label: 'Toddler Clothing', value: '5' },
];

function CreateListingScreen() {
	const [category, setCategory] = useState();
	const { imageUrl } = useContext(AppStateContext);

	return (
		<Screen style={styles.container}>
			<ScrollView>
				{/* <View
					style={{ alignItems: 'center', marginBottom: 20, marginTop: -15 }}>
					<ReplayLogo />
				</View>
				<ListItemSeparator /> */}
				<PageHeaderWithBell />
				<AppText children={'Create Listing'} style={styles.headerText} />
				<Image source={imageUrl} style={styles.image} />

				<AppForm
					initialValues={{ email: '', password: '', name: '' }}
					onSubmit={(values) => console.log(values)}
					validationSchema={validationSchema}>
					<AppFormField
						autoCorrect={false}
						name='Title'
						placeholder='Title'
						textContentType='title'
					/>

					<AppPicker
						selectedItem={category}
						onSelectItem={(item) => setCategory(item)}
						items={categories}
						placeHolder='Category'
					/>
					<AppFormField
						name='listingType'
						placeholder='Listing Type'
						textContentType='listingType'
					/>
					<AppFormField
						name='condition'
						placeholder='Condition'
						textContentType='condition'
					/>
					<AppFormField
						name='description'
						placeholder='Description'
						textContentType='description'
					/>
					<AppFormField name='tags' placeholder='Tags' textContentType='tags' />

					<SubmitButton title='Submit' />
				</AppForm>
			</ScrollView>
		</Screen>
	);
}
const styles = StyleSheet.create({
	carToy: {
		alignSelf: 'center',
	},
	container: {
		padding: 10,
		backgroundColor: colors.light,
	},
	headerText: {
		alignSelf: 'center',
		marginTop: 30,
		fontSize: 30,
		fontWeight: 'bold',
	},
	image: { width: 200, height: 200 },
	logo: {
		alignSelf: 'center',
		marginBottom: 15,
	},
});

export default CreateListingScreen;
