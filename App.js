import React, { useState } from "react";
import Home from "./screens/home";
import * as Font from "expo-font";
import { AppLoading } from "expo";

const getFonts = () =>
  Font.loadAsync({
    "nunito-regular": require("./assets/Nunito-Regular.ttf"),
    "nunito-bold": require("./assets/Nunito-Bold.ttf"),
  });

export default function App() {
  const [fontsLoadded, setFontsLoaded] = useState(false);

  if (fontsLoadded) {
    return (<Home />);
  } else {
    return (
      <AppLoading startAsync={getFonts} onFinish={() => setFontsLoaded(true)} />
    );
  }
}
