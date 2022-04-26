
import { View, Text, StyleSheet, SafeAreaView, Image, TouchableOpacity, Keyboard } from 'react-native';
import { moderateScale, moderateVerticalScale } from 'react-native-size-matters';
import style from './style';

import MyInputField from './../../component/MyInputField';
import MyHeader from '../../component/MyHeader';
import imagesPath from '../../constant/imagesPath';
import navigationStrings from '../../constant/navigationStrings';
import { useState, useEffect } from 'react';
import MyButton from '../../component/MyButton';


// create a component
const ForgotPassword = ({ navigation }) => {


	const [keybaordHeight, setKeyboardHeight] = useState(0)

	useEffect(() => {
		const keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', (event) => {
			console.log("event trigger on show keyboard", event)
			setKeyboardHeight(event.endCoordinates.height - 20)
		})

		const keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', (event) => {
			console.log("event trigger on hide keyboard", event)
			setKeyboardHeight(0)
		});
		return () => {
			keyboardDidShowListener.remove();
			keyboardDidHideListener.remove();
		}
	}, [])
	return (
		<SafeAreaView style={{ flex: 1 }}>
			<View style={style.container}>
				<MyHeader
				/>

				<View style={{ justifyContent: 'center', alignItems: 'center' }}>
					<Image source={imagesPath.home} style={{ width: 50, height: 50 }} />
				</View>
				<Text style={style.headingText}>Forgot Password</Text>
				<Text style={style.descriptionText}>Enter the email address associated with your account.</Text>
				<View style={{ marginVertical: moderateVerticalScale(24), marginBottom: keybaordHeight }}>

					<MyInputField
						title="Enter Email"
						placeHolder="Enter Your Email"
						keyboardType=""

					/>

					<MyButton
						btnText='Send'
						onPress={() => navigation.navigate(navigationStrings.SetPassword)}
						btnStyle={{ borderRadius: moderateScale(56 / 2), width: moderateScale(56), height: moderateScale(56), marginTop: moderateVerticalScale(24), alignSelf: 'flex-end' }}
					/>
				</View>
			</View>

		</SafeAreaView>

	);
};

export default ForgotPassword;