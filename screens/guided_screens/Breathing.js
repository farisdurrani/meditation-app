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
import { allBreathingSessions } from "../../constants";

const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;
const Breathing = ({ navigation, route }) => {
  const { minutes, withStretching } = route.params;
  return (
    <View style={{ alignItems: "center" }}>
      <HeaderButtons navigation={navigation} noRightButton />
      <View style={{ marginTop: 50 }} />
      <MText
        text={withStretching ? "Breathing with Stretching" : "Breathing"}
      />
      <Text style={{ fontSize: 40, textAlign: "center", marginTop: 80 }}>
        Select Guided Meditation
      </Text>
      <View style={{ marginTop: screenHeight * 0.1 }} />
      <OneRow>
        <MButton
          containerStyle={{ width: screenWidth * 0.5 }}
          text={allBreathingSessions["SquareBreathing"]}
          onPress={() => {
            navigation.navigate("BeginScreen", {
              minutes: minutes,
              meditationType: "SquareBreathing",
              withStretching: withStretching,
            });
          }}
        />
        <HelpButton />
      </OneRow>
      <OneRow>
        <MButton
          containerStyle={{ width: screenWidth * 0.5 }}
          text={allBreathingSessions["DeepBreathing"]}
          onPress={() => {
            navigation.navigate("BeginScreen", {
              minutes: minutes,
              meditationType: "DeepBreathing",
              withStretching: withStretching,
            });
          }}
        />
        <HelpButton />
      </OneRow>
    </View>
  );
};

export default Breathing;

const styles = StyleSheet.create({});
