
import * as React from 'react';
import { View, Text } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home } from "../screens";
import navigationStrings from '../constant/navigationStrings';
import navigationScreenOptions from '../constant/navigationScreenOptions';
import TabRoutes from './TabRoutes';

const Stack = createNativeStackNavigator();

export default function HomeStack() {
	return (

		<Stack.Navigator screenOptions={{ headerShown: false }} >
			<Stack.Screen
				name={navigationStrings.TabRoutes} component={TabRoutes}
			/>
		</Stack.Navigator>
	);
}

