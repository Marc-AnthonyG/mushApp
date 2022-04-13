import React from "react";
import { View, StyleSheet } from "react-native";
import { useFormikContext } from "formik";
import ImageInputList from "../list/ImageInputList";
import { ErrorMessage } from ".";

function FormImagePicker({ name }) {
  const { setFieldValue, errors, touched, values } = useFormikContext();
  const imageUris = values[name];

  const hanldeAdd = (uri) => setFieldValue(name, [...imageUris, uri]);
  const handleRemove = (uri) => {
    setFieldValue(
      name,
      imageUris.filter((imageUri) => imageUri != uri)
    );
  };
  return (
    <>
      <ImageInputList
        imageUris={imageUris}
        onAddImage={hanldeAdd}
        onRemoveImage={handleRemove}
      />
      <ErrorMessage visible={touched[name]} error={errors[name]} />
    </>
  );
}

const styles = StyleSheet.create({
  container: {},
});

export default FormImagePicker;
