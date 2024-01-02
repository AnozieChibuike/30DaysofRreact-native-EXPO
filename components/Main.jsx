import React from "react";
import { ScrollView,Button } from "react-native";
import Cat from "./Cat";
import Home from "./Home";
import { StyleSheet } from "react-native";

export default function Main({navigation}) {

    return (
    <ScrollView contentContainerStyle={styles.container}>
    <Cat name="Tom" />
    <Home />
  </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 40,
    marginHorizontal: 10,
  },
});
