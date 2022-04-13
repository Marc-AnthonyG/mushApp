import React from "react";
import { View, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../../config/colors";

function Icon({
  name,
  size = 40,
  backgroundColor = colors.mainBlackTone,
  iconColor = colors.white,
  borderRadius = size / 2,
}) {
  return (
    <View
      style={{
        width: size,
        height: size,
        borderRadius: borderRadius,
        backgroundColor,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <MaterialCommunityIcons name={name} color={iconColor} size={size / 2} />
    </View>
  );
}

export default Icon;
