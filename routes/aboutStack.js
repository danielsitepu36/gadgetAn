import React from "react";
import { Image, StyleSheet } from "react-native";
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
        headerBackground: () => (
          <Image
            style={styles.BGImage}
            source={require("../assets/game_bg.png")}
          ></Image>
        ),
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

const styles = StyleSheet.create({
  BGImage: {
    marginTop: 34,
    width: "100%",
    height: 50,
  },
});
// export default function AboutNavigator() {
//   return <NavigationContainer>{AboutStack()}</NavigationContainer>;
// }

export default AboutStack;
