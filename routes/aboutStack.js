import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
// import { NavigationContainer } from "@react-navigation/native";
import About from "../screens/about";

const Stack = createStackNavigator();

function AboutStack() {
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
        name="About"
        component={About}
        options={{
          title: "GadgetAn",
        }}
      />
    </Stack.Navigator>
  );
}

// export default function AboutNavigator() {
//   return <NavigationContainer>{AboutStack()}</NavigationContainer>;
// }

export default AboutStack;
