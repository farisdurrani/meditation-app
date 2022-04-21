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
import { Overlay } from "react-native-elements";

const Exercise3 = ({ navigation, route }) => {
  const { ORIG_MINUTES, mainSecondsLeftCopy, meditationType } = route.params;

  const [title, exhale2Text, imgSource] = [
    "Legs Crossed",
    "Stand up",
    require("../../assets/exercise_positions/legs_crossed.png"),
  ];
  const [secondsLeft, setSecondsLeft] = useState(20);
  const [mainSecondsLeft, setMainSecondsLeft] = useState(mainSecondsLeftCopy);
  const [paused, setPaused] = useState(false);
  const _toggleOverlay = () => setPaused(!paused);

  useEffect(() => {
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
        });
      } else if (secondsLeft < 0) {
        navigation.replace("Exhale2", {
          ORIG_MINUTES: ORIG_MINUTES,
          mainSecondsLeftCopy: mainSecondsLeft,
          text: exhale2Text,
          meditationType: meditationType,
        });
      }
    }
  }, [secondsLeft, mainSecondsLeft, paused]);

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

export default Exercise3;

const [screenWidth, screenHeight] = [
  Dimensions.get("window").width,
  Dimensions.get("window").height,
];

const styles = StyleSheet.create({
  text: {
    fontSize: 40,
    fontWeight: "500",
    color: COLORS.primary_blue,
    textAlign: "center",
  },
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
