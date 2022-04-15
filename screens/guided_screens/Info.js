import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { HeaderButtons, DropDown, MButton, MText } from "../../components";

const Info = ({ navigation, route }) => {
  return (
    <View style={{ alignItems: "center" }}>
      <HeaderButtons navigation={navigation} />
      <MText text="Guided Breathing" />
      <Text>Info</Text>
      <MButton text="Begin" />
    </View>
  );
};

export default Info;

const infoText = {
  FocusedMeditation: ["Focused Meditation", "self meditation using a word to focus on"],
  GuidedBreathing: ["Guided Breathing", "guide user in breathing by aligning breath with guide"],
  FocusedMeditation2:["Focused Meditation", "Focus on nothing but the word and sound in the background"],
  SquareBreathing:
    ["Square Breathing", "inhale for 4 seconds, hold for 4 seconds, exhale for 4 seconds, hold for 4 seconds"],
  DeepBreathing:
    ["Deep Breathing", "inhale for 4 seconds, hold for 7 seconds, exhale for 8 seconds"],
};

const styles = StyleSheet.create({});
