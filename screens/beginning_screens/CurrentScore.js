import { StyleSheet, Text, View, Dimensions } from "react-native";
import React from "react";
import { LAYOUT, COLORS } from "../../constants";
import { MText, MButton, HeaderButtons } from "../../components";

const CurrentScore = ({ navigation, route }) => {
  const {
    ORIG_MINUTES = null,
    meditationType = null,
    withStretching = null,
  } = route.params;

  return (
    <View style={{ alignItems: "center" }}>
      <HeaderButtons navigation={navigation} noRightButton />
      <View style={styles.mainContainer}>
        <Text style={{ fontSize: 70, textAlign: "center" }}>Current Score</Text>
        <Text style={styles.scoreText}>00</Text>
        <Text style={styles.whyText}>Why am I doing this?</Text>
        <MButton
          text="Continue"
          onPress={() => {
            if (ORIG_MINUTES === null) {
              navigation.navigate("Timer", { prevScreenIsCurrentScore: true });
              return;
            }
            navigation.replace("Favorite", {
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
  scoreText: {
    fontSize: 50,
    textAlign: "center",
    borderWidth: 3.5,
    borderRadius: 10,
    borderColor: COLORS.primary_blue,
    marginTop: 20,
    paddingVertical: 20,
    paddingHorizontal: 100,
  },
  whyText: {
    fontSize: 28,
    textAlign: "center",
    color: COLORS.primary_blue,
    marginTop: 20,
  },
});
