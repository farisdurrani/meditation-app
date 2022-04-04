import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { MText } from "../components";
import { LAYOUT } from "../constants";

const WelcomePage = () => {
  return (
    <View style={styles.mainContainer}>
      <MText text="Welcome" />
      <Text>Take a deep breath</Text>
    </View>
  );
};

export default WelcomePage;

const styles = StyleSheet.create({
  mainContainer: {
    marginTop: 100,
    width: "100%",
    display: "flex",
    alignItems: "center",
  }
});
