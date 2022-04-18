import React, { useState } from "react";
import { COLORS, defaultIconColor, defaultIconSize } from "../constants";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { Text, StyleSheet, TouchableOpacity, View } from "react-native";

const HeaderButtons = (props) => {
  const {
    navigation,
    pause,
    onPause,
    noRightButton,
    customLeftButton,
    onPressHelp,
    settings,
    timer,
    onTimerZero,
  } = props;
  const [paused, setPaused] = useState(false);
  const [secondsLeft, setSecondsLeft] = useState(timer);

  const clock = `${Math.floor(secondsLeft / 60)}:${
    secondsLeft % 60 < 10 ? "0" : ""
  }${Math.round(secondsLeft % 60)}`;

  const _LeftButton = () => {
    if (customLeftButton) {
      return customLeftButton();
    } else if (pause) {
      return (
        <TouchableOpacity>
          <Ionicons
            name={paused ? "play" : "pause"}
            size={defaultIconSize}
            color={defaultIconColor}
            onPress={() => {
              onPause();
              setPaused(!paused);
            }}
          />
        </TouchableOpacity>
      );
    } else {
      return (
        <TouchableOpacity>
          <Ionicons
            name="arrow-back"
            size={defaultIconSize}
            color={defaultIconColor}
            onPress={() => navigation.goBack()}
          />
        </TouchableOpacity>
      );
    }
  };

  const _RightButton = () => {
    if (noRightButton) {
      return <View />;
    } else if (settings) {
      return (
        <TouchableOpacity>
          <MaterialIcons
            name="settings"
            size={defaultIconSize}
            color={defaultIconColor}
          />
        </TouchableOpacity>
      );
    } else {
      return (
        <TouchableOpacity>
          <MaterialIcons
            name="help"
            size={defaultIconSize}
            color={defaultIconColor}
            onPress={() => onPressHelp(secondsLeft)}
          />
        </TouchableOpacity>
      );
    }
  };

  if (!paused) {
    if (secondsLeft > 0) {
      setTimeout(() => setSecondsLeft(secondsLeft - 1), 1000);
    } else if (onTimerZero) {
      requestAnimationFrame(onTimerZero);
    }
  }

  return (
    <View style={styles.upperButtons}>
      <_LeftButton />

      {timer ? <Text style={styles.timer}>{clock}</Text> : undefined}

      <_RightButton />
    </View>
  );
};

export default HeaderButtons;

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
