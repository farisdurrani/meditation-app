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
import {
  COLORS,
  defaultIconColor,
  defaultIconSize,
  breathingHelpScreens,
} from "../../constants";
import { Button, Overlay } from "react-native-elements";

const InhaleHold = ({ navigation, route }) => {
  const {
    ORIG_MINUTES,
    minutes,
    meditationType,
    withStretching,
    initIndex = 0,
    initSequence = 0,
    initSecondsLeft = null,
  } = route.params;

  const [mainSecondsLeft, setMainSecondsLeft] = useState(minutes * 60);
  const [index, setIndex] = useState(initIndex);
  const [paused, setPaused] = useState(false);
  const [sequence, setSequence] = useState(initSequence);
  const [title, setTitle] = useState(
    sequences[meditationType].activities[index]
  );
  const [secondsLeft, setSecondsLeft] = useState(
    initSecondsLeft === null
      ? sequences[meditationType].timeLeft[index]
      : initSecondsLeft
  );

  const _toggleOverlay = () => setPaused(!paused);
  const _updateTitle = () => {
    const length = sequences[meditationType].activities.length;
    if (withStretching && index + 1 === length) {
      setSequence(sequence + 1);
    }
    const newIndex = (index + 1) % length;
    setIndex(newIndex);
    const newTitle = sequences[meditationType].activities[newIndex];
    setTitle(newTitle);
    const newTimeLeft = sequences[meditationType].timeLeft[newIndex];
    setSecondsLeft(newTimeLeft);
  };

  React.useEffect(() => {
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
        });
      } else if (secondsLeft < 0) {
        _updateTitle();
      }
    }
  }, [mainSecondsLeft, index, paused]);

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
            onPress={() => setPaused(!paused)}
          />
        </TouchableOpacity>
        <Text style={header_styles.timer}>{clock}</Text>
        <HelpButton
          onPressHelp={() => {
            const helpScreen = breathingHelpScreens[meditationType];
            navigation.replace(helpScreen, {
              prevScreen: "InhaleHold",
              ORIG_MINUTES: ORIG_MINUTES,
              minutes: mainSecondsLeft / 60,
              meditationType: meditationType,
              withStretching: withStretching,
              initIndex: index,
              initSequence: sequence,
              initSecondsLeft: secondsLeft,
            });
          }}
        />
      </View>
    );
  };

  useEffect(() => {
    if (withStretching && sequence === 2) {
      const randomExerciseScreen =
        allExerciseScreens[
          Math.floor(Math.random() * allExerciseScreens.length)
        ];
      navigation.replace(randomExerciseScreen, {
        ORIG_MINUTES: ORIG_MINUTES,
        mainSecondsLeftCopy: mainSecondsLeft,
        meditationType: meditationType,
      });
    }
  }, [mainSecondsLeft, index, paused]);

  return (
    <View style={{ alignItems: "center" }}>
      <_HeaderButtons />
      <View marginTop={Dimensions.get("window").height * 0.25} />
      <MText text={title} />
      <MText text={secondsLeft} />
      <Overlay isVisible={paused} onBackdropPress={_toggleOverlay}>
        <View style={styles.overlayView}>
          <Text style={styles.overlayTitle}>PAUSE</Text>

          <Text style={{ fontSize: 20, marginVertical: 40 }}>
            Do you want to go to Home?
          </Text>
          <View style={styles.parent}>
            <MButton
              containerStyle={{ width: "50%" }}
              text="Home"
              onPress={() => {
                _toggleOverlay();
                navigation.replace("Timer");
              }}
            />
            <MButton
              containerStyle={{ width: "50%" }}
              text="Resume"
              onPress={_toggleOverlay}
            />
          </View>
        </View>
      </Overlay>
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
const [screenWidth, screenHeight] = [
  Dimensions.get("window").width,
  Dimensions.get("window").height,
];

const styles = StyleSheet.create({
  overlayView: {
    width: screenWidth * 0.7,
    height: screenHeight * 0.4,
    borderRadius: 20,
    alignItems: "center",
    padding: 20,
    justifyContent: "space-around",
  },
  overlayTitle: {
    fontSize: 40,
    fontWeight: "bold",
    color: COLORS.primary_blue,
    marginBottom: 20,
  },
  parent: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "space-around",
  },
});

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
