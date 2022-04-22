import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { COLORS, defaultIconColor, defaultIconSize } from "../../constants";
import { MText, MButton, HeaderButtons } from "../../components";
import { Ionicons } from "@expo/vector-icons";

const CurrentScore = ({ navigation, route }) => {
  const {
    ORIG_MINUTES = null,
    meditationType = null,
    withStretching = null,
  } = route.params;

  const updatedScore = Boolean(ORIG_MINUTES);

  const _LeftButton = () => {
    if (!updatedScore) {
      return (
        <TouchableOpacity>
          <Ionicons
            name="arrow-back"
            size={defaultIconSize}
            color={defaultIconColor}
            onPress={() => navigation.goBack()}
          />
        </TouchableOpacity>
      );
    }
    return <View marginTop={defaultIconSize} />;
  };

  return (
    <View style={{ alignItems: "center" }}>
      <HeaderButtons
        navigation={navigation}
        customLeftButton={_LeftButton}
        noRightButton
      />
      <View style={styles.mainContainer}>
        <Text style={{ fontSize: 65, textAlign: "center" }}>
          {updatedScore ? "Updated Score" : "Current Score"}
        </Text>
        <Text style={styles.scoreText}>00</Text>
        <Text style={styles.whyText}>
          {updatedScore ? "" : "Why am I doing this?"}
        </Text>
        <MButton
          text="Continue"
          onPress={() => {
            if (!updatedScore) {
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
