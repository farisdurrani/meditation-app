import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  TouchableOpacity,
} from "react-native";
import React, { useState, useEffect, useRef } from "react";
import { COLORS, defaultIconColor, defaultIconSize } from "../../constants";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import {
  HeaderButtons,
  DropDown,
  MButton,
  MText,
  HelpButton,
} from "../../components";

const Exercise = ({ navigation, route }) => {
  const { ORIG_MINUTES, mainSecondsLeftCopy, meditationType } = route.params;

  const [title, imgSource] = [
    "Release",
    require("../../assets/exercise_positions/release_hands.png"),
  ];
  const [secondsLeft, setSecondsLeft] = useState(20);
  const [mainSecondsLeft, setMainSecondsLeft] = useState(mainSecondsLeftCopy);
  const [paused, setPaused] = useState(false);

  if (!paused) {
    if (mainSecondsLeft >= 0 && secondsLeft >= 0) {
      setTimeout(() => {
        setSecondsLeft(secondsLeft - 1);
        setMainSecondsLeft(mainSecondsLeft - 1);
      }, 1000);
    } else if (mainSecondsLeft < 0) {
      navigation.replace("CurrentScore", {
        ORIG_MINUTES: ORIG_MINUTES,
        meditationType: meditationType,
        withStretching: true,
        nextScreen: "Favorite",
      });
    } else if (secondsLeft < 0) {
      navigation.replace("InhaleHold", {
        minutes: mainSecondsLeft / 60,
        meditationType: meditationType,
        withStretching: true,
      });
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
            onPress={() => setPaused(!paused)}
          />
        </TouchableOpacity>
        <Text style={header_styles.timer}>{clock}</Text>
        <HelpButton onPressHelp={() => navigation.navigate("SquareInfo")} />
      </View>
    );
  };

  return (
    <View style={{ alignItems: "center" }}>
      <_HeaderButtons />
      <View marginTop={20} />
      <Text style={styles.text}>{title}</Text>
      <View marginTop={20} />
      <Image
        source={imgSource}
        style={{
          maxHeight: Dimensions.get("window").height * 0.65,
          maxWidth: Dimensions.get("window").width,
        }}
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
