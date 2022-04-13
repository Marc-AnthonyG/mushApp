import React from "react";
import { View, StyleSheet, FlatList } from "react-native";

import { Screen, Icon } from "../components/AppBasic/index";
import { Separator, ListItem } from "../components/list/index";

import colors from "../config/colors";

const menuItems = [
  {
    title: "My Listings",
    icon: {
      backgroundColor: colors.primary,
      name: "format-list-bulleted",
    },
  },
  {
    title: "My Messages",
    icon: {
      backgroundColor: colors.secondary,
      name: "email",
    },
  },
];

function AccountScreen(props) {
  return (
    <Screen style={{ backgroundColor: colors.lightblack }}>
      <View style={styles.container}>
        <ListItem
          title={"Mosh Hamedani"}
          subtitle={"proggramingwithmosh@gmail.com"}
          image={require("../assets/mosh.jpg")}
        />
      </View>
      <View style={styles.fowardButton}>
        <FlatList
          data={menuItems}
          keyExtractor={(menuItem) => menuItem.title}
          renderItem={({ item }) => (
            <ListItem
              title={item.title}
              ImageComponent={
                <Icon
                  name={item.icon.name}
                  backgroundColor={item.icon.backgroundColor}
                />
              }
            />
          )}
          ItemSeparatorComponent={Separator}
        />
      </View>
      <View style={styles.fowardButton}>
        <ListItem
          title={"Log Out"}
          ImageComponent={
            <Icon name={"logout"} backgroundColor={colors.yellow} />
          }
          onPress={() => console.log("cliked")}
        />
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  profilePicture: {
    marginVertical: 20,
  },
  fowardButton: { backgroundColor: colors.white, marginTop: 30 },
  logOut: {},
  container: {
    backgroundColor: colors.white,
  },
});

export default AccountScreen;
