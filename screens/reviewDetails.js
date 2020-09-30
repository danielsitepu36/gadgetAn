import React from "react";
import { StyleSheet, View, Text, Button } from "react-native";
import { globalStyles } from "../styles/global";
import Card from "../shared/card";

export default function ReviewDetails({ route }) {
  return (
    <View style={globalStyles.container}>
      <Card>
        <Text>{route.params?.title ?? "Title"}</Text>
        <Text>{route.params?.body ?? "Body"}</Text>
        <Text>{route.params?.rating ?? "Rating"}</Text>
      </Card>
    </View>
  );
}
