import React, { useState } from "react";
import {
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  Modal,
  Button,
  FlatList,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import defaultStyles from "../../config/styles";
import AppText from "./AppText";
import Screen from "./Screen";
import PickerItem from "./PickerItem";

function AppPicker({
  icon,
  items,
  width,
  onSelectItem,
  PickerItemComponent = PickerItem,
  placeholder,
  selectedItem,
  numberOfColums = 3,
}) {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <React.Fragment>
      <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
        <View style={[styles.container, { width }]}>
          {icon && (
            <MaterialCommunityIcons
              size={20}
              color={defaultStyles.colors.medium}
              style={styles.icon}
              name={icon}
            />
          )}
          {selectedItem ? (
            <AppText style={styles.text}>{selectedItem.label}</AppText>
          ) : (
            <AppText style={styles.placeholder}>{placeholder}</AppText>
          )}

          <MaterialCommunityIcons
            size={20}
            color={defaultStyles.colors.medium}
            name="chevron-down"
          />
        </View>
      </TouchableWithoutFeedback>
      <Modal visible={modalVisible} animationType="slide">
        <Screen>
          <FlatList
            data={items}
            numColumns={numberOfColums}
            keyExtractor={(item) => item.value.toString()}
            renderItem={({ item }) => (
              <PickerItemComponent
                item={item}
                onPress={() => {
                  setModalVisible(false);
                  onSelectItem(item);
                }}
              />
            )}
          />
          <Button title="Close" onPress={() => setModalVisible(false)}></Button>
        </Screen>
      </Modal>
    </React.Fragment>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: defaultStyles.colors.light,
    borderRadius: 25,
    flexDirection: "row",
    width: "100%",
    padding: 15,
    marginVertical: 10,
    alignItems: "center",
  },
  icon: {
    marginRight: 10,
  },
  placeholder: {
    color: defaultStyles.colors.medium,
    flex: 1,
  },
  text: {
    flex: 1,
  },
});

export default AppPicker;
