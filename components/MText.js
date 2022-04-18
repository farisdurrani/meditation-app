import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { COLORS } from "../constants";

const MText = (props) => {
  const { text, containerStyle } = props;

  return (
    <View style={containerStyle}>
      <Text style={styles.text}>{text}</Text>
    </View>
  );
};

export default MText;

const styles = StyleSheet.create({
  text: {
    fontSize: 70,
    fontWeight: "500",
    color: COLORS.primary_blue,
    textAlign: "center",
  },
});
