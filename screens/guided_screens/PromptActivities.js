import { Dimensions, StyleSheet, Text, View } from "react-native";
import React from "react";
import { HeaderButtons, DropDown, MButton, MText } from "../../components";
import { LAYOUT } from "../../constants";

const Prompt = ({ navigation, route }) => {
  const { minutes, meditationType } = route.params;
  const [titleTextIndex, setTitleTextIndex] = React.useState(0);
  return (
    <View style={{ alignItems: "center" }}>
      <HeaderButtons navigation={navigation} pause noRightButton />
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

const styles = StyleSheet.create({});
