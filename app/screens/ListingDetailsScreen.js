import React from "react";
import { View, StyleSheet } from "react-native";

import Card from "../components/list/Card";
import ListItem from "../components/list/ListItem";

function ListingDetailsScreen(props) {
  return (
    <View style={styles.background}>
      <Card
        styleImage={{ height: 300 }}
        image={require("../assets/jacket.jpg")}
        title="Red jacket for sale!"
        subtitle="100$"
      />
      <View style={styles.shortProfileContainer}>
        <ListItem
          image={require("../assets/mosh.jpg")}
          title="Mosh Hamedani"
          subtitle="5 listening"
        ></ListItem>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  shortProfileContainer: {
    margin: 20,
  },
});

export default ListingDetailsScreen;
