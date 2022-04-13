import React from "react";
import { View, StyleSheet, Image, TouchableHighlight } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import colors from "../../config/colors";
import AppText from "../AppBasic/AppText";
import { Swipeable } from "react-native-gesture-handler";

function ListItem({
  title,
  subtitle,
  image,
  ImageComponent,
  onPress,
  swipRight,
  showChevrons,
  ...otherProps
}) {
  return (
    <Swipeable renderRightActions={swipRight}>
      <TouchableHighlight underlayColor={colors.lightblack} onPress={onPress}>
        <View style={styles.background}>
          {ImageComponent}
          {image && <Image source={image} style={styles.image} />}
          <View style={styles.text}>
            <AppText {...otherProps} style={styles.title}>
              {title}
            </AppText>
            {subtitle && (
              <AppText {...otherProps} style={styles.subtitle}>
                {subtitle}
              </AppText>
            )}
          </View>
          {showChevrons && (
            <MaterialCommunityIcons
              name="chevron-right"
              size={24}
              color={colors.medium}
            />
          )}
        </View>
      </TouchableHighlight>
    </Swipeable>
  );
}

const styles = StyleSheet.create({
  background: {
    flexDirection: "row",
    padding: 15,
    width: "100%",
    alignItems: "center",
  },
  image: {
    borderRadius: 35,
    width: 70,
    height: 70,
  },
  title: {
    fontWeight: "500",
  },
  subtitle: {
    color: colors.medium,
  },
  text: {
    marginLeft: 10,
    justifyContent: "center",
    flex: 1,
  },
});
export default ListItem;
