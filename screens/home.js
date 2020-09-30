import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  Button,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { globalStyles } from "../styles/global";
import Card from "../shared/card";

export default function Home({ navigation }) {
  const [reviews, setReviews] = useState([
    { title: "Iphone 11", rating: 4, body: "lorem", key: "1" },
    { title: "Samsung A71", rating: 5, body: "lorem", key: "2" },
    { title: "Xiaomi", rating: 3, body: "lorem", key: "3" },
  ]);

  const pressHandler = () => {
    navigation.navigate("ReviewDetails");
    // navigation.push("ReviewDetails");
  };

  return (
    <View style={globalStyles.container}>
      <FlatList
        data={reviews}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate("ReviewDetails", item)}
          >
            <Card>
              <Text style={globalStyles.titleText}>{item.title}</Text>
            </Card>
          </TouchableOpacity>
        )}
      ></FlatList>
    </View>
  );
}
