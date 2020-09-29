import React from "react";
import { StyleSheet, View, Text, Button } from "react-native";
import { globalStyles } from "../styles/global";

export default function ReviewDetails({ route }) {
  return (
    <View style={globalStyles.container}>
      <Text>{route.params?.title ?? "Title"}</Text>
      <Text>{route.params?.body ?? "Body"}</Text>
      <Text>{route.params?.rating ?? "Rating"}</Text>
    </View>
  );
}
