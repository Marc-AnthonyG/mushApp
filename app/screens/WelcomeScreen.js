import React from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ImageBackground,
  Image,
} from "react-native";

import colors from "../config/colors";
import text_en from "../config/text_en";
import AppButton from "../components/AppBasic/AppButton";

export default function WelcomeScreen(props) {
  return (
    <ImageBackground
      source={require("../assets/background.jpg")}
      style={styles.backgroud}
      blurRadius={3}
    >
      <View style={styles.logoSloganView}>
        <Image source={require("../assets/logo-red.png")} style={styles.logo} />
        <Text style={styles.tagLine}>{text_en.slogan}</Text>
      </View>

      <View style={styles.buttonContainer}>
        <AppButton title="Login" />
        <AppButton title="register" color="secondary" />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  backgroud: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  logo: {
    width: 100,
    height: 100,
  },
  logoSloganView: {
    alignItems: "center",
    position: "absolute",
    top: 70,
  },
  buttonContainer: {
    width: "100%",
    padding: 20,
  },
  tagLine: {
    textTransform: "capitalize",
    fontSize: 25,
    fontWeight: "600",
    paddingVertical: 20,
  },
});
