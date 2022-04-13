import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import FeedNavigator from "./FeedNavigator";
import ListingEditScreen from "../screens/ListingEditScreen";
import AccountScreen from "../screens/AccountScreen";

const Tab = createBottomTabNavigator();

const MainNavigator = () => (
  <Tab.Navigator>
    <Tab.Screen name="Feed" component={FeedNavigator} />
    <Tab.Screen name="Listing Edit" component={ListingEditScreen} />
    <Tab.Screen name="Account" component={AccountScreen} />
  </Tab.Navigator>
);

export default MainNavigator;
