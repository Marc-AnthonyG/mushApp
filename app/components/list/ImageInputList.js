import React, { useRef } from "react";
import { View, StyleSheet, Button, ScrollView } from "react-native";

import ImageInput from "../AppBasic/ImageInput";

function ImageInputList({ imageUris = [], onAddImage, onRemoveImage }) {
  const scrollView = useRef();

  return (
    <View>
      <ScrollView
        horizontal
        ref={scrollView}
        onContentSizeChange={() => scrollView.current.scrollToEnd()}
      >
        <View style={styles.container}>
          {imageUris.map((uri) => (
            <View style={styles.image} key={uri}>
              <ImageInput
                imageUri={uri}
                onChangeImage={() => onRemoveImage(uri)}
              ></ImageInput>
            </View>
          ))}
          <ImageInput onChangeImage={(uri) => onAddImage(uri)} />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flexDirection: "row" },
  image: { marginRight: 5 },
});

export default ImageInputList;
