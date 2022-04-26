import { StyleSheet, Text, View, SafeAreaView, Image } from 'react-native'
import React from 'react'
import MyHeader from '../../component/MyHeader'
import { moderateScale, moderateVerticalScale } from 'react-native-size-matters'
import MyButton from '../../component/MyButton'
import imagesPath from '../../constant/imagesPath'
import { scale } from 'react-native-size-matters';
import navigationStrings from '../../constant/navigationStrings'

const ChooseAccount = ({ navigation }) => {
	return (
		<SafeAreaView style={{ flex: 1 }}>
			<View style={{ paddingHorizontal: moderateScale(24) }}>

				<MyHeader />
			</View>
			<View style={styles.container}>
				<Text style={{ fontSize: scale(24), textAlign: 'center', fontWeight: 'bold', textTransform: 'uppercase' }}>Choose your account Type</Text>
				<View style={{ alignItems: 'center', }}>
					<Image
						source={{ uri: 'https://s3fs.paintnite.com/yaymaker-images/venue/original/wjgav-10014375-virtual-event-create-from-home.jpg' }}
						style={styles.image}
					/>
					<Text style={styles.textStyle}>Agency</Text>
				</View>

				<View style={{ alignItems: 'center', }}>
					<Image
						source={{ uri: 'https://cdn-icons-png.flaticon.com/512/236/236831.png' }}
						style={styles.image}
					/>
					<Text style={styles.textStyle}>Freelancer</Text>
				</View>
				<MyButton btnText='continue' btnStyle={{ width: '100%' }} onPress={() => navigation.navigate(navigationStrings.Register)} />
			</View>
		</SafeAreaView>
	)
}

export default ChooseAccount

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: moderateScale(24),
		justifyContent: 'space-between',
		alignItems: 'center'
	},
	image: {
		width: moderateScale(160),
		height: moderateScale(160)
	},
	textStyle: {
		fontSize: scale(20),
		fontWeight: '400',
		marginTop: moderateVerticalScale(16)
	}

})