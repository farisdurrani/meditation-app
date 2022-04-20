import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import React, { useState, useEffect } from "react";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { MButton, MText, HelpButton } from "../../components";
import { COLORS, defaultIconColor, defaultIconSize } from "../../constants";

const InhaleHold = ({ navigation, route }) => {
  const { ORIG_MINUTES, minutes, meditationType, withStretching } =
    route.params;

  const [title, setTitle] = useState("Inhale");
  const [secondsLeft, setSecondsLeft] = useState(4);
  const [mainSecondsLeft, setMainSecondsLeft] = useState(minutes * 60);
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [sequence, setSequence] = useState(0);

  const _updateTitle = () => {
    const length = sequences[meditationType].activities.length;
    if (withStretching && index + 1 === length) {
      setSequence(sequence + 0.5); // to account for double rendering
    }
    setIndex((index + 1) % length);
    setTitle(sequences[meditationType].activities[index]);
    setSecondsLeft(sequences[meditationType].timeLeft[index]);
  };

  if (!paused) {
    if (mainSecondsLeft >= 0 && secondsLeft >= 0) {
      setTimeout(() => {
        setSecondsLeft(secondsLeft - 1);
        setMainSecondsLeft(mainSecondsLeft - 1);
      }, 1000);
    } else if (mainSecondsLeft < 0) {
      navigation.navigate("CurrentScore", {
        ORIG_MINUTES: ORIG_MINUTES,
        meditationType: meditationType,
        withStretching: withStretching,
        nextScreen: "Favorite",
      });
    } else if (secondsLeft < 0) {
      _updateTitle();
    }
  }

  const _HeaderButtons = () => {
    const clock = `${Math.floor(mainSecondsLeft / 60)}:${
      mainSecondsLeft % 60 < 10 ? "0" : ""
    }${Math.round(mainSecondsLeft % 60)}`;
    return (
      <View style={header_styles.upperButtons}>
        <TouchableOpacity>
          <Ionicons
            name={paused ? "play" : "pause"}
            size={defaultIconSize}
            color={defaultIconColor}
            onPress={() => {
              setPaused(!paused);
            }}
          />
        </TouchableOpacity>
        <Text style={header_styles.timer}>{clock}</Text>
        <HelpButton onPressHelp={() => navigation.navigate("SquareInfo")} />
      </View>
    );
  };

  if (withStretching && sequence === 2) {
    const randomExerciseScreen =
      allExerciseScreens[Math.floor(Math.random() * allExerciseScreens.length)];
    navigation.replace(randomExerciseScreen, {
      ORIG_MINUTES: ORIG_MINUTES,
      mainSecondsLeftCopy: mainSecondsLeft,
      meditationType: meditationType,
    });
  }

  return (
    <View style={{ alignItems: "center" }}>
      <_HeaderButtons />
      <View marginTop={Dimensions.get("window").height * 0.25} />
      <MText text={title} />
      <MText text={secondsLeft} />
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

const allExerciseScreens = ["Exercise", "Exercise2", "Exercise3", "Exercise4"];

const styles = StyleSheet.create({});

const header_styles = StyleSheet.create({
  upperButtons: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "90%",
    marginTop: 60,
  },
  timer: {
    fontSize: 20,
    fontWeight: "bold",
    color: COLORS.primary_blue,
  },
});
