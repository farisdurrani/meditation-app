import { StyleSheet, Text, View, Dimensions } from "react-native";
import React from "react";
import { HeaderButtons, MButton, MText } from "../../components";
import { COLORS } from "../../constants";

const BeginChooseWord = ({ navigation, route }) => {
  const { minutes, chosenWord } = route.params;
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
          textAlign: "center",
        }}
      >
        {chosenWord}
      </Text>
      <View style={{ marginVertical: 20 }} />
      <MButton
        text="Begin"
        onPress={() => {
          navigation.navigate("FocusedMeditation", {
            ORIG_MINUTES: minutes,
            minutes: minutes,
            chosenWord: chosenWord,
            chosenMusicIndex: null,
          });
        }}
      />
    </View>
  );
};

export default BeginChooseWord;

const styles = StyleSheet.create({});
