import { StyleSheet, Text, View, Dimensions } from "react-native";
import React from "react";
import {
  HeaderButtons,
  DropDown,
  MButton,
  MText,
  OneRow,
  HelpButton,
} from "../../components";

const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;
const Breathing = ({ navigation }) => {
  return (
    <View style={{ alignItems: "center" }}>
      <HeaderButtons navigation={navigation} noRightButton />
      <View style={{ marginTop: 50 }} />
      <MText text="Breathing" />
      <Text style={{ fontSize: 40, textAlign: "center", marginTop: 80 }}>
        Select Guided Meditation
      </Text>
      <View style={{ marginTop: screenHeight * 0.1 }} />
      <OneRow>
        <MButton
          containerStyle={{ width: screenWidth * 0.5 }}
          text="Square Breathing"
        />
        <HelpButton />
      </OneRow>
      <OneRow>
        <MButton
          containerStyle={{ width: screenWidth * 0.5 }}
          text="Deep Breathing"
        />
        <HelpButton />
      </OneRow>
    </View>
  );
};

export default Breathing;

const styles = StyleSheet.create({});
