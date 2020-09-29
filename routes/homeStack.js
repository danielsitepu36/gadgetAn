import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import Home from "../screens/home";
import ReviewDetails from "../screens/reviewDetails";

const Stack = createStackNavigator();

function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          title: "GadgetAn",
          headerStyle: {
            backgroundColor: "#eee",
            height: 60,
          },
          headerTintColor: "222",
        }}
      />
      <Stack.Screen
        name="ReviewDetails"
        component={ReviewDetails}
        options={{
          title: "Review Details",
          headerStyle: {
            backgroundColor: "#eee",
            height: 60,
          },
          headerTintColor: "222",
        }}
      />
    </Stack.Navigator>
  );
}

export default function Navigator() {
  return <NavigationContainer>{HomeStack()}</NavigationContainer>;
}
