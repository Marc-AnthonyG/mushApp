import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";

import AppText from "./AppText";
import Icon from "./Icon";

function CategoryPicker({ item, onPress }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPress}>
        <Icon name={item.icon} backgroundColor={item.color} size={80} />
        <AppText style={styles.text}>{item.label}</AppText>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 30,
    paddingVertical: 15,
    alignItems: "center",
    width: "33%",
  },
  text: {
    marginTop: 5,
    textAlign: "center",
  },
});
export default CategoryPicker;
