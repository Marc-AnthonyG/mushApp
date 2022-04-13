import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import WelcomeScreen from "../screens/WelcomeScreen";
import RegistrerScreen from "../screens/RegistrerScreen";
import LoginScreen from "../screens/LogingScreen";

const Stack = createStackNavigator();

const AuthNavigator = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
    <Stack.Screen name="Login" component={LoginScreen} />
    <Stack.Screen name="Registrer" component={RegistrerScreen} />
  </Stack.Navigator>
);

export default AuthNavigator;
