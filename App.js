import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import AuthNavigator from "./app/navigation/AuthNavigator";
import MainNavigator from "./app/navigation/MainNavigator";
import navigationTheme from "./app/navigation/navigationTheme";

export default function App() {
  return (
    <NavigationContainer theme={navigationTheme}>
      <MainNavigator />
    </NavigationContainer>
  );
}
