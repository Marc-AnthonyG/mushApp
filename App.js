import React from 'react';
import { Text } from 'react-native';
import Screen from "./app/components/AppBasic/Screen";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'

const Tweet = ()=> (
  <Screen><Text> 
    Tweet</Text></Screen>
)

const TweetDetail = ()=> (
  <Screen><Text> 
    Tweet Detail</Text></Screen>
)

const Stack = createStackNavigator();

const StackNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen name="Tweets" component={Tweet} />
    <Stack.Screen name="Tweet Detail" component={TweetDetail} />
  </Stack.Navigator>
)

export default function App() {
  return (<NavigationContainer>
    <StackNavigator/>
  </NavigationContainer>);
}