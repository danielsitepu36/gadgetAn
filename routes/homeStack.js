import React from "react";
import { Image, StyleSheet } from "react-native";
import {
  createStackNavigator,
  HeaderBackground,
} from "@react-navigation/stack";

import Home from "../screens/home";
import ReviewDetails from "../screens/reviewDetails";
import Header from "../shared/header";

const Stack = createStackNavigator();

function HomeStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: "#333",
        },
        headerTintColor: "#333",
        headerBackground: () => (
          <Image
            style={styles.BGImage}
            source={require("../assets/game_bg.png")}
          ></Image>
        ),
      }}
    >
      <Stack.Screen
        name="Home"
        component={Home}
        options={({ navigation }) => {
          return {
            headerTitle: () => (
              <Header navigation={navigation} title="GadgetAn" />
            ),
          };
        }}
      />
      <Stack.Screen
        name="ReviewDetails"
        component={ReviewDetails}
        options={{
          headerTitle: "Review Details",
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

// export default function HomeNavigator() {
//   return <NavigationContainer>{HomeStack()}</NavigationContainer>;
// }

export default HomeStack;
