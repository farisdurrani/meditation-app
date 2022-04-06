import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { LAYOUT, COLORS } from "../../constants";
import { MText, MButton, HeaderButtons } from "../../components";

const CurrentScore = ({ navigation }) => {
  return (
    <View style={{ alignItems: "center" }}>
      <Text style={{ fontSize: 80, textAlign: "center" }}>Current Score</Text>
      <Text style={{ fontSize: 80, textAlign: "center", borderWidth: 2 }}>
        00
      </Text>
      <Text
        style={{
          fontSize: 80,
          textAlign: "center",
          color: COLORS.primary_blue,
        }}
      >
        Why am I doing this?
      </Text>
      <MButton
        text="Continue"
        onPress={() => {
          navigation.navigate("Timer");
        }}
      />
    </View>
  );
};

export default CurrentScore;

const styles = StyleSheet.create({});
