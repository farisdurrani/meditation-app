import {
  Dimensions,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import React, { useState, useEffect } from "react";
import { HeaderButtons, DropDown, MButton, MText } from "../../components";
import { LAYOUT } from "../../constants";
import { COLORS, defaultIconColor, defaultIconSize } from "../../constants";
import { Overlay } from "react-native-elements";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";

const Prompt = ({ navigation, route }) => {
  const { minutes, meditationType } = route.params;
  const [titleTextIndex, setTitleTextIndex] = React.useState(0);
  const [paused, setPaused] = useState(false);
  const _toggleOverlay = () => setPaused(!paused);

  const _HeaderButtons = () => {
    return (
      <View style={header_styles.upperButtons}>
        <TouchableOpacity>
          <Ionicons
            name={"home"}
            size={defaultIconSize}
            color={defaultIconColor}
            onPress={() => setPaused(!paused)}
          />
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View style={{ alignItems: "center" }}>
      <_HeaderButtons />
      <View style={LAYOUT.centerMiddle}>
        <MText
          text={promptText[titleTextIndex]}
          containerStyle={{
            width: "90%",
          }}
        />
        <MButton
          text="Continue"
          containerStyle={{ marginTop: 30 }}
          onPress={() => {
            if (titleTextIndex === promptText.length - 1) {
              navigation.navigate("InhaleHold", {
                ORIG_MINUTES: minutes,
                minutes: minutes,
                meditationType: meditationType,
                withStretching: true,
              });
            } else {
              setTitleTextIndex(titleTextIndex + 1);
            }
          }}
        />
      </View>
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

const promptText = [
  "Move to a clear space before beginning",
  "Before beginning breathing exercises...",
  "... we will guide you to rduce tension in your body",
  "Start making a fist, squeezing your hand tightly",
  "After a few seconds, open your fist one finger at a time",
  "Focus on feeling the tension leaving your fingers",
  "Next, repeat this process with your other hand",
  "If desired, repeat the process again with both hands",
  "Take notice of your body-where are you feeling tension?",
  "Common places include shoulders, legs, feet, and back",
  "Be sure to avoid places where you may have pain or injury",
  "Follow the same steps as before wherever you need to",
  "Squeeze and release body parts that you feel have tension",
  "When you feel ready, continue on to breathing exercises",
];

export default Prompt;

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
