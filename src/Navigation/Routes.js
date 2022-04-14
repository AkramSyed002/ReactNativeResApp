// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AuthStack from './AuthStack';


function Routes() {
	return (
		<NavigationContainer>
			{AuthStack()}
		</NavigationContainer>
	);
}

export default Routes;