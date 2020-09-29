import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import Home from "../screens/home";
import ReviewDetails from "../screens/reviewDetails";

const Stack = createStackNavigator();

function HomeStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: "#ddd",
        },
        headerTintColor: "#333",
      }}
    >
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          title: "GadgetAn",
        }}
      />
      <Stack.Screen
        name="ReviewDetails"
        component={ReviewDetails}
        options={{
          title: "Review Details",
        }}
      />
    </Stack.Navigator>
  );
}

export default function Navigator() {
  return <NavigationContainer>{HomeStack()}</NavigationContainer>;
}
