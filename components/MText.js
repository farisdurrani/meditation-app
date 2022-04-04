import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { COLORS } from "../constants";

const MText = (props) => {
  const { text } = props;
  return (
    <View>
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
