
import * as React from 'react';
import { View, Text } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Login, Register, SetPassword, ForgotPassword, ChooseAccount, Home } from "../screens";
import navigationStrings from '../constant/navigationStrings';
import navigationScreenOptions from '../constant/navigationScreenOptions';

const Stack = createNativeStackNavigator();

export default function AuthStack() {
	return (

		<Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName={Login}>
			{navigationScreenOptions.map((screen, index) => (

				<Stack.Screen name={screen.name} component={screen.component} key={index.toString()} />
			))}
		</Stack.Navigator>
	);
}



const navigationScreens = [
	{ name: navigationStrings.Login, component: Login },
	{ name: navigationStrings.ChooseAccount, component: ChooseAccount },
	{ name: navigationStrings.ForgotPassword, component: ForgotPassword },
	{ name: navigationStrings.Register, component: Register },
	{ name: navigationStrings.SetPassword, component: SetPassword },
	{ name: navigationStrings.Home, component: Home },
]