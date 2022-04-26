import { StyleSheet, Text, View, Image, SafeAreaView } from 'react-native'
import React from 'react'
import imagesPath from '../../constant/imagesPath'
import { moderateScale, moderateVerticalScale } from 'react-native-size-matters';

const Profile = () => {
	return (
		<SafeAreaView style={{ flex: 1 }}>

			<View style={styles.container}>
				<Image source={imagesPath.myProfile} style={styles.imageStyle} />
				<Text>Akram Syed</Text>
				<View style={styles.detailContent}>
					<Text>Profession:{' '}</Text>
					<Text>React and Native Developer</Text>

				</View>

			</View>
		</SafeAreaView>
	)
}

export default Profile

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		marginTop: moderateVerticalScale(16)
	},
	imageStyle: {
		width: moderateScale(200),
		height: moderateScale(200),
	},
	detailContent: {
		marginTop: moderateVerticalScale(32),
		flexDirection: 'row'
	}

})