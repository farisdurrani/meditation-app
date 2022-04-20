import { StyleSheet, Text, View, Dimensions } from "react-native";
import React, { useState, useEffect } from "react";
import { COLORS } from "../../constants";
import { HeaderButtons, DropDown, MButton, MText } from "../../components";
import { Button, Overlay } from "react-native-elements";

const InhaleHold = ({ navigation, route }) => {
  const { minutes, meditationType, withStretching } = route.params;
  
  const [title, setTitle] = useState("Inhale");
  const [timeLeft, setTimeLeft] = useState(4);
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [sequence, setSequence] = useState(0);

  const _toggleOverlay = () => {
    setPaused(!paused);
  };

  if (withStretching && sequence === 2) {
    const randomExerciseScreen =
      allExerciseScreens[Math.floor(Math.random() * allExerciseScreens.length)];
    navigation.replace(randomExerciseScreen, {
      mainSecondsLeftCopy: 10,
      meditationType: meditationType,
    });
  }

  const updateTitle = () => {
    const length = sequences[meditationType].activities.length;

    if (withStretching && index + 1 === length) {
      setSequence(sequence + 1);
    }

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
        onTimerZero={() => navigation.navigate("CurrentScore")}
      />
      <View marginTop={Dimensions.get("window").height * 0.25} />
      <MText text={title} />
      <MText text={timeLeft} />
      
      <Overlay isVisible={paused} onBackdropPress={_toggleOverlay}>
          <View style={styles.overlayView}>
            <Text style={styles.overlayTitle}>PAUSE</Text>

            <Text style={{ fontSize: 20, marginVertical: 40 }}>Do you want to go Home?</Text>
            <View style={styles.parent}>
            <MButton
                containerStyle={{ width: "50%" }}
                text="Yes"
                onPress={() => {
                  _toggleOverlay()
                  navigation.navigate("Timer");
                }}
              />
              <MButton
                containerStyle={{ width: "50%" }}
                text="No"
                onPress={_toggleOverlay}
              />
            </View>
          </View>
        </Overlay>
    </View>
  );
};

export default InhaleHold;

const [screenWidth, screenHeight] = [
  Dimensions.get("window").width,
  Dimensions.get("window").height,
];

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

const allExerciseScreens = ["Exercise1", "Exercise2", "Exercise3", "Exercise4"];

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
    flexDirection: "row",
    justifyContent: "space-around",
  },
});
