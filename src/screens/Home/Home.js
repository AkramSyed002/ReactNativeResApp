//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, FlatList, SafeAreaView, Image } from 'react-native';
import { moderateScale, moderateVerticalScale, scale } from 'react-native-size-matters';

import style from './style';
import MyButton from './../../component/MyButton';
import colors from '../../styles/colors';

import dummyData from './../../constant/dummyData';
import imagesPath from './../../constant/imagesPath'
// create a component
const Home = () => {

	const renderItem = ({ item }) => {
		return (
			<View style={style.flatStyle}>
				<View style={style.flexView}>
					<View>
						<Text style={{
							fontSize: scale(12),
							color: colors.blackOpacity80
						}}>{!!item?.date ? item.date.date : 'date not found'}</Text>
						<Text style={{
							fontSize: scale(12),
							color: colors.black,
							fontWeight: 'bold',
							marginTop: moderateVerticalScale(8)
						}}>{item?.name}</Text>

						<View style={{
							flexDirection: 'row',
							alignItems: 'center'
						}}>
							<Image style={{
								width: moderateScale(14),
								height: moderateScale(14),
								tintColor: colors.blackOpacity50
							}} source={imagesPath.Location} />
							<Text style={{
								fontSize: scale(12),
								color: colors.blackOpacity50,
							}}> {item?.address}</Text>
						</View>
					</View>
					<Image source={{
						uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8FuEJbKwDdaz1h387130xmYkAIQbZpahhbQ&usqp=CAU'
					}}
						style={{
							width: moderateScale(64),
							height: moderateScale(64),
							borderRadius: moderateScale(32)
						}}
					/>
				</View>
				<View style={{ ...style.flexView, marginVertical: moderateVerticalScale(8) }}>
					<Text style={{
						fontSize: moderateScale(14),
						color: colors.blackOpacity50,
						textTransform: 'uppercase'

					}}>Price</Text>
					<Text style={{
						fontSize: scale(14),
						color: colors.black,
						fontWeight: 'bold',
					}}>{item?.price}</Text>
				</View>

				<View style={style.flexView}>
					<View style={{ flex: 1 }}>
						<MyButton

							btnText={'Reject'}
							btnStyle={{
								backgroundColor: colors.white,
								borderWidth: 1,
								borderColor: colors.themeColor,
							}}
							btnTextStyle={{ color: colors.themeColor }}

						/>
					</View>
					<View style={{ marginHorizontal: moderateScale(8) }} />
					<View style={{ flex: 1 }}>
						<MyButton
							btnText={'Accept'}
						/>
					</View>
				</View>
			</View>
		)
	}
	return (
		<View style={style.container}>
			<SafeAreaView style={{ flex: 1, backgroundColor: colors.white }}>
				<View style={style.headerStyle}>
					<Text />
					<Text style={style.headerText}>Akram Syed</Text>
					<Image source={imagesPath.notification} style={{ width: 20, height: 20 }} />
				</View>

				<View style={{
					marginTop: moderateVerticalScale(14),
					marginHorizontal: moderateScale(16),
					flex: 1
				}}>
					<FlatList
						showsVerticalScrollIndicator={false}
						data={dummyData}
						renderItem={renderItem}
						ItemSeparatorComponent={() => <View style={{ marginBottom: moderateVerticalScale(16) }} />}
					/>
				</View>
			</SafeAreaView>
		</View>
	);
};
export default Home;