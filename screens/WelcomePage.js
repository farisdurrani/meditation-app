import { StyleSheet, Text, View, Dimensions } from "react-native";
import React from "react";
import { MText } from "../components";
import { LAYOUT, COLORS } from "../constants";

const WelcomePage = () => {
  return (
    <View style={styles.mainContainer}>
      <MText text="Welcome" />
      <Text style={{ fontSize: 26, color: COLORS.primary_blue }}>
        Take a deep breath
      </Text>
    </View>
  );
};

export default WelcomePage;

const styles = StyleSheet.create({
  mainContainer: {
    marginTop: Dimensions.get('window').height * 0.40,
    width: "100%",
    display: "flex",
    alignItems: "center",
  },
});
