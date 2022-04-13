import React from "react";
import { StyleSheet } from "react-native";
import * as Yup from "yup";

import Screen from "../components/AppBasic/Screen";
import { AppFormField, SubmitButton, AppForm } from "../components/forms/index";
import AppFormPicker from "../components/forms/AppFormPicker";
import CategoryPicker from "../components/AppBasic/CategoryPicker";
import FormImagePicker from "../components/forms/FormImagePicker";
import useLocation from "../hooks/useLocation";

const validationSchema = Yup.object().shape({
  title: Yup.string().required().min(1).label("Title"),
  price: Yup.number().required().min(1).max(10000).label("Price"),
  category: Yup.object().required().nullable().label("Category"),
  description: Yup.string().label("Description"),
  images: Yup.array()
    .min(1, "Please select at least one image!")
    .label("Images"),
});

const categories = [
  { label: "Furniture", icon: "floor-lamp", color: "#fc5c65", value: 1 },
  { label: "Cars", icon: "car", color: "#fd9644", value: 2 },
  { label: "Cameras", icon: "camera", color: "#fed330", value: 3 },
  { label: "Games", icon: "cards", color: "#26de81", value: 4 },
  { label: "Clothing", icon: "shoe-heel", color: "#2bcbba", value: 5 },
  { label: "Sports", icon: "basketball", color: "#45aaf2", value: 6 },
  { label: "Movies & Music", icon: "headphones", color: "#4b7bec", value: 7 },
];

function ListingEditScreen(props) {
  const location = useLocation();
  console.log(location);
  return (
    <Screen style={styles.container}>
      <AppForm
        initialValues={{
          title: "",
          price: "",
          description: "",
          category: null,
          images: [],
        }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
        <FormImagePicker name="images" />
        <AppFormField name="title" placeholder="Title" maxLength={255} />
        <AppFormField
          name="price"
          keyboardType="numeric"
          placeholder="Price"
          maxLength={8}
          width={120}
        />
        <AppFormPicker
          items={categories}
          name="category"
          placeholder="Category"
          width={"50%"}
          PickerItemComponent={CategoryPicker}
        />
        <AppFormField
          maxLength={255}
          multiline
          name="description"
          numberOfLines={3}
          placeholder="Description"
        />
        <SubmitButton
          title="Post"
          onSubmit={(values) => console.log(location)}
        />
      </AppForm>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});

export default ListingEditScreen;
