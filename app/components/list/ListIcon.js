import React from "react";
import { View, StyleSheet, TouchableHighlight } from "react-native";

import colors from "../../config/colors";
import AppText from "../AppBasic/AppText";
import { MaterialCommunityIcons } from "@expo/vector-icons";

function ListIcon({ title, icon, iconStyle, onPress }) {
  return (
    <TouchableHighlight underlayColor={colors.lightblack} onPress={onPress}>
      <View style={styles.background}>
        <MaterialCommunityIcons
          name="email"
          style={[styles.icon, iconStyle]}
          size={70}
        />
        <View style={styles.text}>
          <AppText style={styles.title}>{title}</AppText>
        </View>
      </View>
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  background: {
    flexDirection: "row",
    padding: 15,
  },
  icon: {
    borderRadius: 35,
    marginRight: 10,
  },
  title: {
    fontWeight: "500",
  },
  text: {
    alignItems: "center",
    justifyContent: "center",
  },
});
export default ListIcon;
