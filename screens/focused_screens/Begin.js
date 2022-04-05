import { StyleSheet, Text, View, Dimensions } from "react-native";
import React from "react";
import { HeaderButtons, MButton, MText } from "../../components";
import { COLORS } from "../../constants";

const Begin = ({ navigation, route }) => {
  const { chosenWord } = route;
  return (
    <View style={{ alignItems: "center" }}>
      <HeaderButtons navigation={navigation} />
      <View style={{ marginTop: Dimensions.get("window").height * 0.25 }} />
      <Text style={{ color: COLORS.primary_blue, fontSize: 45 }}>
        Chosen Word
      </Text>
      <View style={{ marginVertical: 10 }} />
      <Text
        style={{
          color: COLORS.primary_blue,
          fontSize: 35,
          fontStyle: "italic",
        }}
      >
        {chosenWord ? chosenWord : "Word"}
      </Text>
      <View style={{ marginVertical: 20 }} />
      <MButton text="Begin" />
    </View>
  );
};

export default Begin;

const styles = StyleSheet.create({});
