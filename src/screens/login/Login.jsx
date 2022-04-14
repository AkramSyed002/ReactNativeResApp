import React from "react";
import {
  scale,
  verticalScale,
  moderateScale,
  moderateVerticalScale,
} from "react-native-size-matters";
import { StyleSheet, Text, View, Button, ImageBackground } from "react-native";
import navigationStrings from "../../constant/navigationStrings";
import MyInputField from "../../component/MyInputField";

const Login = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.image}
        source={{
          uri: "https://im.indiatimes.in/content/itimes/photo/2016/Jul/21/1469099512-cutest-baby-images-you-cant-ignore-this-little-one.jpg",
        }}
      >
        <Text style={styles.loginText}>Login</Text>
      </ImageBackground>
      <View style={styles.inputContainer}>
        <MyInputField
          title="Email Address"
          placeHolder="Enter Your Email Address"
        />
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width: "100%",
    height: moderateScale(200),
    justifyContent: "center",
    alignItems: "center",
  },
  loginText: {
    fontSize: scale(32),
    color: "white",
    fontWeight: "bold",
  },
  inputContainer: {
    paddingHorizontal: moderateScale(24),
    paddingVertical: moderateVerticalScale(44),
  },
});
