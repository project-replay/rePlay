import { useContext, useEffect, useRef, useState } from 'react';
import {
	Button,
	Image,
	SafeAreaView,
	StyleSheet,
	Text,
	TouchableOpacity,
} from 'react-native';
import { Camera } from 'expo-camera';
import * as MediaLibrary from 'expo-media-library';
import { StatusBar } from 'expo-status-bar';
import { Ionicons } from '@expo/vector-icons';
import { AppStateContext } from '../../App';

export default function App({ navigation }) {
	const cameraRef = useRef();
	const [hasCameraPermission, setHasCameraPermission] = useState();
	const [hasMediaLibraryPermission, setHasMediaLibraryPermission] = useState();
	const [photo, setPhoto] = useState();
	const { setImageUrl } = useContext(AppStateContext);

	useEffect(() => {
		(async () => {
			const cameraPermission = await Camera.requestCameraPermissionsAsync();
			const mediaLibraryPermission =
				await MediaLibrary.requestPermissionsAsync();
			setHasCameraPermission(cameraPermission.status === 'granted');
			setHasMediaLibraryPermission(mediaLibraryPermission.status === 'granted');
		})();
	}, []);

	if (hasCameraPermission === undefined) {
		return <Text>Requesting permissions...</Text>;
	} else if (!hasCameraPermission) {
		return (
			<Text>
				Permission for camera not granted. Please change this in Settings.
			</Text>
		);
	}

	let takePic = async () => {
		let options = {
			quality: 1,
			base64: true,
			exif: false,
		};

		let newPhoto = await cameraRef.current.takePictureAsync(options);
		setPhoto(newPhoto);
	};

	if (photo) {
		const savePhoto = () => {
			// Save to Cloudinary
			let base64Img = `data:image/jpg;base64,${photo.base64}`;
			let apiUrl = 'https://api.cloudinary.com/v1_1/dwppzi7rk/image/upload';
			let data = {
				file: base64Img,
				upload_preset: 'replayUploadPreset',
			};

			fetch(apiUrl, {
				body: JSON.stringify(data),
				headers: {
					'content-type': 'application/json',
				},
				method: 'POST',
			})
				.then((response) => {
					return response.json();
				})
				.then((data) => {
					if (data.secure_url) {
						setImageUrl(data.secure_url);
					}
				})
				.catch((err) => {
					alert('Cannot upload. Please try again later.');
				});

			// Save to phone
			MediaLibrary.saveToLibraryAsync(photo.uri).then(() => {
				setPhoto(undefined);
			});
		};

		return (
			<SafeAreaView style={styles.container}>
				<Image
					style={styles.preview}
					source={{ uri: 'data:image/jpg;base64,' + photo.base64 }}
				/>
				{hasMediaLibraryPermission ? (
					<Button
						title='Save'
						onPress={() => {
							savePhoto();
							navigation.navigate('New Listing');
						}}
					/>
				) : undefined}
				<Button title='Discard' onPress={() => setPhoto(undefined)} />
			</SafeAreaView>
		);
	}

	return (
		<Camera style={styles.container} ref={cameraRef}>
			<TouchableOpacity style={styles.cameraButtonContainer} onPress={takePic}>
				<Ionicons name='ios-radio-button-on' size={75} color='white' />
			</TouchableOpacity>
			<StatusBar style='auto' />
		</Camera>
	);
}

const styles = StyleSheet.create({
	buttonContainer: {
		backgroundColor: '#fff',
		alignSelf: 'flex-end',
	},
	cameraButtonContainer: {
		position: 'absolute',
		bottom: 75,
	},
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},
	preview: {
		alignSelf: 'stretch',
		flex: 1,
	},
});
