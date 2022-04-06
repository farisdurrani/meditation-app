import React from "react";
import { COLORS } from "../constants";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import HelpButton from "./HelpButton";
import { Text, StyleSheet, TouchableOpacity, View } from "react-native";

const BackCancelButtons = (props) => {
  const {
    navigation,
    pause,
    onPause,
    noRightButton,
    settings,
    timer,
    onTimerZero,
  } = props;
  const defaultSize = 40;
  const defaultColor = COLORS.primary_blue;
  const [paused, setPaused] = React.useState(false);
  const [timeLeft, setTimeLeft] = React.useState(timer);

  const clock = `${Math.floor(timeLeft / 60)}:${timeLeft % 60 < 10 ? "0" : ""}${
    timeLeft % 60
  }`;

  const RightButton = () => {
    if (noRightButton) {
      return <View />;
    } else if (settings) {
      return (
        <TouchableOpacity>
          <MaterialIcons
            name="settings"
            size={defaultSize}
            color={defaultColor}
            onPress={() => {}}
          />
        </TouchableOpacity>
      );
    } else {
      return (
        <HelpButton
          onPress={() => {
            navigation.navigate("SquareInfo2");
          }}
        />
      );
    }
  };

  if (!paused) {
    if (timeLeft > 0) {
      setTimeout(() => {
        setTimeLeft(timeLeft - 1);
      }, 1000);
    } else if (onTimerZero) {
      onTimerZero();
    }
  }

  return (
    <View style={styles.upperButtons}>
      {pause ? (
        <TouchableOpacity onPress={navigation.goBack}>
          <Ionicons
            name={paused ? "play" : "pause"}
            size={defaultSize}
            color={defaultColor}
            onPress={() => {
              onPause();
              setPaused(!paused);
            }}
          />
        </TouchableOpacity>
      ) : (
        <TouchableOpacity onPress={navigation.goBack}>
          <Ionicons
            name="arrow-back"
            size={defaultSize}
            color={defaultColor}
            onPress={() => {
              navigation.goBack();
            }}
          />
        </TouchableOpacity>
      )}

      {timer ? <Text style={styles.timer}>{clock}</Text> : undefined}

      <RightButton />
    </View>
  );
};

export default BackCancelButtons;

const styles = StyleSheet.create({
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
