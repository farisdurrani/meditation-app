import { StyleSheet, Text, View, Dimensions, Image } from "react-native";
import React, { useState, useEffect } from "react";
import { COLORS } from "../../constants";
import { HeaderButtons, DropDown, MButton, MText } from "../../components";

const Exercise2 = ({ navigation, route }) => {
  const minutes = 10;

  const title = "Touch Toes";
  const [timeLeft, setTimeLeft] = useState(20);
  const [paused, setPaused] = useState(false);

  if (!paused && timeLeft >= 0) {
    setTimeout(() => {
      setTimeLeft(timeLeft - 1);
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
        source={require("../../assets/exercise_positions/touchtoes.png")}
        style={{ maxHeight: Dimensions.get("window").height * 0.65 }}
      />
      <View marginTop={10} />
      <MText text={timeLeft} />
    </View>
  );
};

export default Exercise2;

const styles = StyleSheet.create({
  text: {
    fontSize: 40,
    fontWeight: "500",
    color: COLORS.primary_blue,
    textAlign: "center",
  },
});
