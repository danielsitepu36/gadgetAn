import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import HomeStack from "../routes/homeStack";
import AboutStack from "../routes/aboutStack";
import Home from "../screens/home";
import ReviewDetails from "../screens/reviewDetails";

const Drawer = createDrawerNavigator();

function DrawerNav() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: "#ddd",
          },
          headerTintColor: "#333",
        }}
      >
        <Drawer.Screen
          name="HomeStack"
          component={HomeStack}
          options={{
            title: "Home",
          }}
        />
        <Drawer.Screen
          name="AboutStack"
          component={AboutStack}
          options={{
            title: "About",
          }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default DrawerNav;
