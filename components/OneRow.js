import { StyleSheet, Text, View } from "react-native";
import React from "react";

const OneRow = (props) => {
  return <View style={styles.oneRow}>{props.children}</View>;
};

export default OneRow;

const styles = StyleSheet.create({
  oneRow: {
    display: "flex",
    width: "90%",
    marginBottom: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
});
