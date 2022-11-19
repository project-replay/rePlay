import { StatusBar } from 'expo-status-bar';
import {
	StyleSheet,
	Text,
	View,
	SafeAreaView,
	Button,
	Image,
	TouchableOpacity,
} from 'react-native';
import { useEffect, useRef, useState } from 'react';
import { Camera } from 'expo-camera';
import { shareAsync } from 'expo-sharing';
import * as MediaLibrary from 'expo-media-library';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';

export default function App() {
	const cameraRef = useRef();
	const [hasCameraPermission, setHasCameraPermission] = useState();
	const [hasMediaLibraryPermission, setHasMediaLibraryPermission] = useState();
	const [photo, setPhoto] = useState();
	const [isPreview, setIsPreview] = useState(false);

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
		// const sharePic = () => {
		// 	shareAsync(photo.uri).then(() => {
		// 		setPhoto(undefined);
		// 	});
		// };

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
				.then(async (response) => {
					let data = await response.json();
					if (data.secure_url) {
						alert('Upload successful!');
					}
				})
				.catch((err) => {
					alert('Cannot upload');
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
				{/* <Button title='Share' onPress={sharePic} /> */}
				{hasMediaLibraryPermission ? (
					<Button title='Save' onPress={savePhoto} />
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
