import { Dimensions, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { HeaderButtons, MText } from "../../components";
import { COLORS, defaultIconColor, defaultIconSize } from "../constants";

const Exhale2 = ({ navigation, route }) => {
  const { mainSecondsLeftCopy, text, prevScreen } = route.params;

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
      navigation.navigate("CurrentScore");
    } else if (secondsLeft < 0) {
      navigation.navigate(prevScreen, {
        mainSecondsLeftCopy: mainSecondsLeft,
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
      <View marginTop={Dimensions.get("window").height * 0.3} />
      <MText text={text} containerStyle={{ maxWidth: 375 }} />
    </View>
  );
};

export default Exhale2;

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
