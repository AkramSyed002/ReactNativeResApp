import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  TouchableOpacity,
} from "react-native";
import {
  moderateScale,
  moderateVerticalScale,
  scale,
} from "react-native-size-matters";
import imagesPath from "../constant/imagesPath";
import colors from "../styles/colors";

const MyInputField = ({
  title,
  placeHolder,
  onChangeText = () => {},
  inputStyle = {},
  rightIcon,
  onPressIcon,
  ...props
}) => {
  return (
    <View style={{ ...styles.inputStyle, ...inputStyle }}>
      <Text style={styles.label}>{title || "Title"}</Text>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          borderBottomWidth: 1,
          borderBottomColor: colors.borderColor,
        }}
      >
        <TextInput
          style={styles.inlineStyle}
          placeholder={placeHolder || "Placeholder"}
          onChangeText={onChangeText}
          {...props}
        />
        {rightIcon && (
          <TouchableOpacity activeOpacity={0.8} onPress={onPressIcon}>
            <Image
              source={rightIcon}
              style={{
                width: 20,
                height: 20,
                opacity: "0.3",
              }}
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default MyInputField;

const styles = StyleSheet.create({
  inputStyle: {
    borderBottomWidth: 1,
    borderBottomColor: colors.borderColor,
    borderRadius: moderateScale(4),
  },
  inlineStyle: {
    flex: 1,

    paddingVertical: moderateVerticalScale(8),
    fontSize: scale(16),
    color: colors.borderColor,
  },
  label: {
    fontSize: scale(14),
    color: colors.blackOpacity50,
  },
});
