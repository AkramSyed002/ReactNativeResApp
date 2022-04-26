// In App.js in a new project

import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AuthStack from './AuthStack';
import HomeStack from './HomeStack';


function Routes() {
	const [user, setUser] = useState(false)
	return (
		<NavigationContainer>
			{user ? HomeStack() : AuthStack()}
		</NavigationContainer>
	);
}

export default Routes;