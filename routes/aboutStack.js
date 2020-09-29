import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import About from "../screens/about";
import Header from "../shared/header";

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
        options={({ navigation }) => {
          return {
            headerTitle: () => (
              <Header navigation={navigation} title="About GadgetAn" />
            ),
          };
        }}
      />
    </Stack.Navigator>
  );
}

// export default function AboutNavigator() {
//   return <NavigationContainer>{AboutStack()}</NavigationContainer>;
// }

export default AboutStack;
