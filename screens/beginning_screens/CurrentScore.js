import { StyleSheet, Text, View, Dimensions } from "react-native";
import React from "react";
import { LAYOUT, COLORS } from "../../constants";
import { MText, MButton, HeaderButtons } from "../../components";

const CurrentScore = ({ navigation, route }) => {
  const { ORIG_MINUTES, meditationType, withStretching, nextScreen } =
    route.params;

  return (
    <View style={{ alignItems: "center" }}>
      <HeaderButtons navigation={navigation} noRightButton />
      <View style={styles.mainContainer}>
        <Text style={{ fontSize: 70, textAlign: "center" }}>Current Score</Text>
        <Text
          style={{
            fontSize: 50,
            textAlign: "center",
            borderWidth: 3.5,
            borderRadius: 10,
            borderColor: COLORS.primary_blue,
            marginTop: 20,
            paddingVertical: 20,
            paddingHorizontal: 100,
          }}
        >
          00
        </Text>
        <Text
          style={{
            fontSize: 28,
            textAlign: "center",
            color: COLORS.primary_blue,
            marginTop: 20,
          }}
        >
          Why am I doing this?
        </Text>
        <MButton
          text="Continue"
          onPress={() => {
            navigation.navigate(nextScreen, {
              ORIG_MINUTES: ORIG_MINUTES,
              meditationType: meditationType,
              withStretching: withStretching,
            });
          }}
          containerStyle={{ marginTop: 40 }}
        />
      </View>
    </View>
  );
};

export default CurrentScore;

const styles = StyleSheet.create({
  mainContainer: {
    marginTop: Dimensions.get("window").height * 0.2,
    alignItems: "center",
  },
});
