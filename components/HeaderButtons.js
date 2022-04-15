import React from "react";
import { COLORS, defaultIconColor, defaultIconSize } from "../constants";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import HelpButton from "./HelpButton";
import { Text, StyleSheet, TouchableOpacity, View } from "react-native";

const HeaderButtons = (props) => {
  const {
    navigation,
    pause,
    onPause,
    noRightButton,
    customLeftButton,
    settings,
    timer,
    onTimerZero,
  } = props;
  const [paused, setPaused] = React.useState(false);
  const [timeLeft, setTimeLeft] = React.useState(timer);

  const clock = `${Math.floor(timeLeft / 60)}:${timeLeft % 60 < 10 ? "0" : ""}${
    timeLeft % 60
  }`;

  const _LeftButton = () => {
    if (customLeftButton) {
      return customLeftButton();
    } else if (pause) {
      return (
        <TouchableOpacity onPress={navigation.goBack}>
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
        <TouchableOpacity onPress={navigation.goBack}>
          <Ionicons
            name="arrow-back"
            size={defaultIconSize}
            color={defaultIconColor}
            onPress={() => {
              navigation.goBack();
            }}
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
