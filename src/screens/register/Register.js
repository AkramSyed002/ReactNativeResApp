// import { StyleSheet, Text, View, SafeAreaView, Image } from 'react-native'
// import React from 'react'
// import MyHeader from '../../component/MyHeader'
// import { moderateScale, moderateVerticalScale } from 'react-native-size-matters'
// import MyButton from '../../component/MyButton'
// import imagesPath from '../../constant/imagesPath'
// import { scale } from 'react-native-size-matters';
// import navigationStrings from '../../constant/navigationStrings'
// import MyInputField from '../../component/MyInputField'

// const Register = ({ navigation }) => {
// 	return (
// 		<SafeAreaView style={{ flex: 1 }}>


// 			<View style={styles.container}>
// 				<MyHeader />
// 				<View style={{ flexDirection: 'row' }}>
// 					<MyInputField
// 						inputStyle={{ flex: 1 }}
// 						title="First Name"
// 						placeHolder="Please Enter Your First Name"
// 						keyboardType=""
// 					/>
// 					<View style={{ marginHorizontal: moderateScale(8) }}></View>
// 					<MyInputField
// 						title="Last Name"
// 						placeHolder="Please Enter Your Last Name"
// 						keyboardType=""
// 						inputStyle={{ flex: 1 }}

// 					/>
// 				</View>


// 				<MyButton btnText='continue' onPress={() => navigation.navigate(navigationStrings.Register)} />
// 			</View>
// 		</SafeAreaView>
// 	)
// }

// export default Register

// const styles = StyleSheet.create({
// 	container: {
// 		flex: 1,
// 		padding: moderateScale(24),

// 	},
// 	image: {
// 		width: moderateScale(160),
// 		height: moderateScale(160)
// 	},
// 	textStyle: {
// 		fontSize: scale(20),
// 		fontWeight: '400',
// 		marginTop: moderateVerticalScale(16)
// 	}

// })import React, { Component, useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, Image, TouchableOpacity } from 'react-native';
import { moderateScale, moderateVerticalScale } from 'react-native-size-matters';
import style from './style';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

import MyInputField from './../../component/MyInputField';
import MyHeader from '../../component/MyHeader';
import imagesPath from '../../constant/imagesPath';
import navigationStrings from '../../constant/navigationStrings';
import { useState } from 'react';
import MyButton from '../../component/MyButton';


// create a component
const Register = ({ navigation }) => {
	const [isTrue, setTrue] = useState(false)

	return (
		<SafeAreaView style={{ flex: 1 }}>
			<View style={style.container}>
				<MyHeader
				/>

				<KeyboardAwareScrollView showsVerticalScrollIndicator={false}>
					<View style={{ flexDirection: "row" }}>
						<MyInputField
							label="First Name"
							placeHolder='Please enter your first name'
							inputStyle={{ flex: 1 }}

						/>
						<View style={{ marginHorizontal: moderateScale(8) }} />
						<MyInputField
							label="Last Name"
							placeHolder='Please enter your last name'
							inputStyle={{ flex: 1 }}
						/>
					</View>

					<MyInputField
						label="Last Name"
						placeHolder='Please enter your last name'
						inputStyle={{ marginVertical: moderateVerticalScale(28) }}
					/>

					<MyInputField
						label="Date of birth"
						placeHolder='Please enter your dob'

					/>

					<MyInputField
						label="Phone Number"
						placeHolder='Please enter your phone number'
						inputStyle={{ marginVertical: moderateVerticalScale(28) }}
					/>
					<MyInputField
						label="Email"
						placeHolder='Enter your email'
						inputStyle={{ marginBottom: moderateVerticalScale(28) }}
						keyboardType='email-address'
					/>


					<View style={{ flexDirection: "row" }}>
						<MyInputField
							label="Country"
							placeHolder='Please enter your country'
							inputStyle={{ flex: 1 }}

						/>
						<View style={{ marginHorizontal: moderateScale(10) }} />
						<MyInputField
							label="Postal/Zip Code"
							placeHolder='Please enter your Postal/Zip Code'
							inputStyle={{ flex: 1 }}
						/>
					</View>

					<MyInputField
						label="Address"
						placeHolder='Please enter your address'
						inputStyle={{ marginVertical: moderateVerticalScale(28) }}
					/>

					<MyInputField
						label="Refferal Code"
						placeHolder='Please enter your code'
					// inputStyle={{ marginVertical: moderateVerticalScale(28) }}
					/>

					<TouchableOpacity
						style={style.bottomView}
						activeOpacity={0.8}
						onPress={() => setTrue(!isTrue)}
					>

						<Image source={isTrue ? imagesPath.activeCheck : imagesPath.inActiveCheck}
							style={{ marginRight: moderateScale(12), width: 20, height: 20 }}
						/>

						<Text>By Logging in, you agree to NOOVVOO’s Privacy Policy and Terms of Use</Text>
					</TouchableOpacity>
					<MyButton
						btnText={'Continue'}

						onPress={() => navigation.navigate(navigationStrings.SetPassword)}
						btnStyle={{ marginVertical: moderateVerticalScale(32) }}
					/>
				</KeyboardAwareScrollView>
			</View>

		</SafeAreaView>

	);
};

export default Register;