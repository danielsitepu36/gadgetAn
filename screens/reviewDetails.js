import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import { globalStyles, images } from "../styles/global";
import Card from "../shared/card";

export default function ReviewDetails({ route }) {
  const rating = route.params?.rating ?? "1";

  return (
    <View style={globalStyles.container}>
      <Card>
        <Text>{route.params?.title ?? "Title"}</Text>
        <Text>{route.params?.body ?? "Body"}</Text>
        <View style={styles.rating}>
          <Text>GadgetAn rating: </Text>
          <Image source={images.ratings[rating]} />
        </View>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  rating: {
    flexDirection: "row",
    justifyContent: "center",
    paddingTop: 16,
    marginTop: 16,
    borderTopWidth: 1,
    borderTopColor: "#eee",
  },
});
