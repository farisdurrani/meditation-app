import { StyleSheet, Text, View, Dimensions, Image } from "react-native";
import React, { useState, useEffect } from "react";
import { COLORS } from "../../constants";
import { HeaderButtons, DropDown, MButton, MText } from "../../components";

const Exercise = ({ navigation, route }) => {
  // const {minutesLeft} = route.params;

  const minutes = 10.001;

  const title = "Hands Above Head";
  const [secondsLeft, setTimeLeft] = useState(20);
  const [paused, setPaused] = useState(false);

  if (!paused && secondsLeft >= 0) {
    setTimeout(() => {
      setTimeLeft(secondsLeft - 1);
    }, 1000);
  }

  return (
    <View style={{ alignItems: "center" }}>
      <HeaderButtons
        navigation={navigation}
        timer={minutes * 60}
        pause
        onPause={() => {
          setPaused(!paused);
        }}
        onTimerZero={() => {
          navigation.replace("ExerciseTouchToes");
        }}
      />
      <View marginTop={20} />
      <Text style={styles.text}>{title}</Text>
      <View marginTop={20} />
      <Image
        source={require("../../assets/exercise_positions/exercisehold.png")}
        style={{ maxHeight: Dimensions.get("window").height * 0.65}}
      />
      <View marginTop={10} />
      <MText text={secondsLeft} />
    </View>
  );
};

export default Exercise;

const styles = StyleSheet.create({
  text: {
    fontSize: 40,
    fontWeight: "500",
    color: COLORS.primary_blue,
    textAlign: "center",
  },
});
