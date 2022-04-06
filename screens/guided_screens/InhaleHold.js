import { StyleSheet, Text, View, Dimensions } from "react-native";
import React, { useState, useEffect } from "react";
import { COLORS } from "../../constants";
import { HeaderButtons, DropDown, MButton, MText } from "../../components";

const InhaleHold = ({ navigation, route }) => {
  const { minutes, meditationType, withStretching } = route.params;

  const [title, setTitle] = useState("Inhale");
  const [timeLeft, setTimeLeft] = useState(4);
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [sequence, setSequence] = useState(0);

  const updateTitle = () => {
    const length = sequences[meditationType].activities.length;
    setIndex((index + 1) % length);
    setTitle(sequences[meditationType].activities[index]);
    setTimeLeft(sequences[meditationType].timeLeft[index]);
  };

  if (!paused) {
    if (timeLeft >= 0) {
      setTimeout(() => {
        setTimeLeft(timeLeft - 1);
      }, 1000);
    } else {
      updateTitle();
    }
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
          navigation.replace("CurrentScore");
        }}
      />
      <View marginTop={Dimensions.get("window").height * 0.25} />
      <MText text={title} />
      <MText text={timeLeft} />
    </View>
  );
};

export default InhaleHold;

const sequences = {
  SquareBreathing: {
    activities: ["Inhale", "Hold", "Exhale", "Hold"],
    timeLeft: [4, 4, 4, 4],
  },
  DeepBreathing: {
    activities: ["Inhale", "Hold", "Exhale"],
    timeLeft: [4, 7, 8],
  },
};

const styles = StyleSheet.create({});
