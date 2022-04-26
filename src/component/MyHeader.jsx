import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import React from "react";
import {} from "react-native-web";
import imagesPath from "../constant/imagesPath";
import { useNavigation } from "@react-navigation/native";
import { moderateScale } from "react-native-size-matters";

const MyHeader = ({ onPress, headerText }) => {
  const { goBack } = useNavigation();
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => (!!onPress ? onPress : goBack())}>
        <Image source={imagesPath.icBack} style={{ width: 20, height: 20 }} />
      </TouchableOpacity>

      <Text>{headerText && headerText}</Text>
    </View>
  );
};

export default MyHeader;

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    flexDirection: "row",
    height: moderateScale(42),
    alignItems: "center",
    // backgroundColor: "red",
  },
});
