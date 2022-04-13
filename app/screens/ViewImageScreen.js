import React from "react";
import { StyleSheet, View, Image } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import colors from "../config/colors";
import text_en from "../config/text_en";

export default function ViewImageScreen(props) {
  return (
    <View style={styles.backgroud}>
      <MaterialCommunityIcons name="close" size={35} style={styles.exitIcon} />
      <MaterialCommunityIcons
        name="trash-can-outline"
        size={35}
        style={styles.deleteIcon}
      />
      <Image
        resizeMode="contain"
        style={styles.image}
        source={require("../assets/background.jpg")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  backgroud: {
    flex: 1,
    backgroundColor: colors.mainBlackTone,
  },
  exitIcon: {
    position: "absolute",
    top: 30,
    left: 20,
    color: colors.white,
  },
  deleteIcon: {
    color: colors.white,
    position: "absolute",
    top: 30,
    right: 20,
  },
  image: {
    width: "100%",
    height: "100%",
  },
});
