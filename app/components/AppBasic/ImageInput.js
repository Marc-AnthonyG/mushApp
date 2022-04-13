import React, { useEffect, useState } from "react";
import * as ImagePicker from "expo-image-picker";
import { Button, Image, TouchableOpacity, View, Alert } from "react-native";

import colors from "../../config/colors";
import Icon from "./Icon";

function ImageInput({ imageUri, onChangeImage, size = 100, imageStyle }) {
  useEffect(() => {
    requestPermission();
  }, []);

  const requestPermission = async () => {
    const { granted } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (!granted) {
      alert("Give us acces please!");
    }
  };

  const chooseImage = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        quality: 0.5,
      });
      if (!result.cancelled) {
        onChangeImage(result.uri);
      }
    } catch (error) {
      console.log("Erreur picker image");
    }
  };
  const handlePress = async () => {
    if (imageUri) {
      Alert.alert(
        "Question",
        "Do you want to delete the image",
        [
          { text: "Cancel" },
          {
            text: "Delete",
            onPress: () => {
              onChangeImage(undefined);
            },
          },
        ],
        { cancelable: true }
      );
    } else {
      chooseImage();
    }
  };

  return (
    <TouchableOpacity onPress={handlePress}>
      <View style={imageStyle}>
        {imageUri ? (
          <Image
            source={{ uri: imageUri }}
            style={{ width: size, height: size }}
            borderRadius={size / 6}
          />
        ) : (
          <Icon
            name={"camera"}
            size={size}
            backgroundColor={colors.light}
            iconColor={colors.medium}
            borderRadius={size / 6}
          />
        )}
      </View>
    </TouchableOpacity>
  );
}
export default ImageInput;
