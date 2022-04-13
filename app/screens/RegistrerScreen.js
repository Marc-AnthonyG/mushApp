import React from "react";
import { StyleSheet, Image } from "react-native";
import * as Yup from "yup";

import Screen from "../components/AppBasic/Screen";
import { AppFormField, SubmitButton, AppForm } from "../components/forms/index";

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});

function RegistrerScreen(props) {
  return (
    <Screen style={styles.container}>
      <AppForm
        initialValues={{ name: "", email: "", password: "" }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
        <AppFormField
          name="name"
          autoCapitalize="words"
          autoCorrect={false}
          icon="account"
          keyboardType="default"
          textContentType="username"
          placeholder="Email"
        />
        <AppFormField
          name="email"
          autoCapitalize="none"
          autoCorrect={false}
          icon="email"
          keyboardType="email-address"
          textContentType="emailAddress"
          placeholder="Email"
        />
        <AppFormField
          autoCapitalize="none"
          autoCorrect={false}
          icon="lock"
          placeholder="Password"
          secureTextEntry
          textContentType="password"
          name="password"
        />
        <SubmitButton title="Registrer" />
      </AppForm>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});
export default RegistrerScreen;
