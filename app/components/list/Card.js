import React from "react";
import { View, StyleSheet, Image, Text } from "react-native";

import colors from "../config/colors";
import AppText from "./AppBasic/AppText";

function Card({ title, subtitle, image, styleImage, ...otherProps }) {
  return (
    <View style={styles.background}>
      <Image style={[styles.image, styleImage]} source={image} />
      <View style={styles.text}>
        <AppText {...otherProps} style={styles.title}>
          {title}
        </AppText>
        <AppText {...otherProps} style={styles.subtitle}>
          {subtitle}
        </AppText>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    borderRadius: 15,
    backgroundColor: colors.white,
    marginBottom: 20,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: 200,
  },
  text: {
    padding: 20,
  },
  title: {
    marginBottom: 7,
  },
  subtitle: {
    color: colors.secondary,
    fontWeight: "bold",
  },
});
export default Card;
