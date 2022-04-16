import { StyleSheet, Text, View, Dimensions, Image } from "react-native";
import React, { useState, useEffect } from "react";
import { COLORS } from "../../constants";
import { HeaderButtons, DropDown, MButton, MText } from "../../components";

const Exercise = ({ navigation, route }) => {
  const { mainSecondsLeftCopy } = route.params;

  const title = "Hands Above Head";
  const [secondsLeft, setSecondsLeft] = useState(mainSecondsLeftCopy);
  const [mainSecondsLeft, setMainSecondsLeft] = useState(minutes * 60);
  const [paused, setPaused] = useState(false);

  if (!paused) {
    if (mainSecondsLeft >= 0 && secondsLeft >= 0) {
      setTimeout(() => {
        setSecondsLeft(secondsLeft - 1);
        setMainSecondsLeft(mainSecondsLeft - 1);
      }, 1000);
    } else if (mainSecondsLeft < 0) {
      navigation.navigate("CurrentScore");
    } else if (secondsLeft < 0) {
      navigation.navigate("Exhale2", {
        mainSecondsLeftCopy: mainSecondsLeft,
        text: "Relax hands",
        prevScreen: "Exercise",
      });
    }
  }

  const _HeaderButtons = () => {
    const clock = `${Math.floor(secondsLeft / 60)}:${
      secondsLeft % 60 < 10 ? "0" : ""
    }${Math.round(secondsLeft % 60)}`;

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
        <HelpButton
          onPress={() =>
            navigation.navigate("HelpScreen", {
              mainSecondsLeft: mainSecondsLeft,
            })
          }
        />
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
        source={require("../../assets/exercise_positions/exercisehold.png")}
        style={{ maxHeight: Dimensions.get("window").height * 0.65 }}
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
