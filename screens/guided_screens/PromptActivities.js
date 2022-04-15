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
            if (titleTextIndex === 1) {
              navigation.navigate("InhaleHold", {
                minutes: minutes,
                meditationType: meditationType,
                withStretching: true,
              });
            } else {
              setTitleTextIndex(1);
            }
          }}
        />
      </View>
    </View>
  );
};

const promptText = [
  "please move to a clear space",
  "please release all the tension from your body before beginning this session",
];

export default Prompt;

const styles = StyleSheet.create({});
