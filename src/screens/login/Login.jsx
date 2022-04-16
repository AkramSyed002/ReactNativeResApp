import React, { useState } from "react";
import {
  scale,
  verticalScale,
  moderateScale,
  moderateVerticalScale,
} from "react-native-size-matters";
import {
  StyleSheet,
  Text,
  View,
  Button,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import navigationStrings from "../../constant/navigationStrings";
import MyInputField from "../../component/MyInputField";
import MyButton from "../../component/MyButton";
import imagesPath from "../../constant/imagesPath";
import colors from "../../styles/colors";

const Login = ({ navigation }) => {
  const [visible, setVisible] = useState(true);
  const handleOnPress = () => {
    alert("hi");
  };

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
          inputStyle={{ marginBottom: moderateVerticalScale(28) }}
          keyboardType="email-address"
        />
        <MyInputField
          title="Password"
          placeHolder="Enter Your Password"
          secureTextEntry={visible}
          keyboardType=""
          rightIcon={
            !visible ? imagesPath.icNotShowPass : imagesPath.icShowPass
          }
          onPressIcon={() => setVisible(!visible)}
        />

        <TouchableOpacity
          activeOpacity="0.7"
          style={{
            alignSelf: "flex-end",
            marginVertical: moderateVerticalScale(24),
          }}
        >
          <Text
            style={{
              color: colors.themeColor,
              fontWeight: "200",
              fontSize: scale(16),
            }}
          >
            Forgot Password?
          </Text>
        </TouchableOpacity>
        <MyButton btnText="Login" onPress={handleOnPress} />
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            marginTop: moderateVerticalScale(72),
          }}
        >
          <Text>Not a Member</Text>
          <TouchableOpacity
            onPress={() => navigation.navigate(navigationStrings.Register)}
          >
            <Text> Join Now</Text>
          </TouchableOpacity>
        </View>
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
