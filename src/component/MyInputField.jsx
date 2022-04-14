import React from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";
import {
  moderateScale,
  moderateVerticalScale,
  scale,
} from "react-native-size-matters";

const MyInputField = ({ title, placeHolder, onChangeText = () => {} }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{title || "Title"}</Text>
      <TextInput
        style={styles.inlineStyle}
        placeholder={placeHolder || "Placeholder"}
        onChangeText={onChangeText}
      />
    </View>
  );
};

export default MyInputField;

const styles = StyleSheet.create({
  container: {
    borderBottomWidth: 1,
    borderBottomColor: "rgba(0,0,0,0.1)",
    borderRadius: moderateScale(4),
    // backgroundColor: "red",
  },
  inlineStyle: {
    paddingVertical: moderateVerticalScale(8),
    fontSize: scale(16),
    color: "rgba(0,0,0,0.8)",
  },
  label: {
    fontSize: scale(14),
    color: "rgba(0,0,0,0.5)",
  },
});
