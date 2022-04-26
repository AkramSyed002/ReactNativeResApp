import * as React from "react";
import { StyleSheet, Image } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import navigationStrings from "../constant/navigationStrings";
import { Booking, Home, Profile } from "../screens";
import imagesPath from "../constant/imagesPath";

const BottomTab = createBottomTabNavigator();

export default function TabRoutes() {
	return (
		<BottomTab.Navigator

			screenOptions={{ tabBarInactiveTintColor: 'grey', tabBarActiveTintColor: 'black', headerShown: false }}>
			{bottomScreenOptions.map((item, index) => (
				<BottomTab.Screen
					key={index.toString()}

					options={{
						tabBarIcon: ({ focused }) => {
							return <Image source={item.icon} style={[styles.imageStyle, { tintColor: focused ? 'black' : 'grey', color: focused ? 'black' : 'grey' }]} />;


						},
					}}
					name={item.name}
					component={item.component}
				/>
			))}
		</BottomTab.Navigator>
	);
}

const styles = StyleSheet.create({
	imageStyle: { width: 20, height: 20, },
});

const bottomScreenOptions = [
	{ name: navigationStrings.Home, component: Home, icon: imagesPath.home },
	{
		name: navigationStrings.Booking,
		component: Booking,
		icon: imagesPath.booking,
	},
	{
		name: navigationStrings.Profile,
		component: Profile,
		icon: imagesPath.profile,
	},
];
