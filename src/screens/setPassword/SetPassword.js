
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
const SetPassword = ({ navigation }) => {
	const [isTrue, setTrue] = useState(false)
	const [visible, setVisible] = useState(false);


	return (
		<SafeAreaView style={{ flex: 1 }}>
			<View style={style.container}>
				<MyHeader
				/>

				<KeyboardAwareScrollView showsVerticalScrollIndicator={false}>
					<Text style={style.headingText}>Set Password</Text>
					<Text style={style.descriptionText}>Set a password for your new account <Text style={{ fontWeight: 'bold' }}>(+92) 346-5673700</Text></Text>
					<View style={{ marginVertical: moderateVerticalScale(24) }}></View>
					<MyInputField
						title="Password"
						placeHolder="Enter Your Password"
						secureTextEntry={visible}
						keyboardType=""
						rightIcon={
							!visible ? imagesPath.icNotShowPass : imagesPath.icShowPass
						}
						onPressIcon={() => setVisible(!visible)}
					/>

					<MyButton
						img={true}
						onPress={() => navigation.navigate(navigationStrings.Home)}
						btnStyle={{ borderRadius: moderateScale(56 / 2), width: moderateScale(56), height: moderateScale(56), marginTop: moderateVerticalScale(24), alignSelf: 'flex-end' }}
					/>
				</KeyboardAwareScrollView>
			</View>

		</SafeAreaView>

	);
};

export default SetPassword;