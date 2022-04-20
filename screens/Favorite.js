import { Dimensions, StyleSheet, Text, View } from "react-native";
import React from "react";
import { COLORS, LAYOUT } from "../constants";
import { MButton } from "../components";

const Favorite = ({ navigation, route }) => {
  const { ORIG_MINUTES, meditationType, withStretching } = route.params;

  const moveToHomeScreen = () => {
    moveToHomeScreen();
  };

  return (
    <View style={styles.mainContainer}>
      <View style={styles.container}>
        <Text style={styles.title}>
          Would you like to add this session to favorites?
        </Text>
        <View>
          <Text style={styles.text}>{`${ORIG_MINUTES} minutes`}</Text>
          <View marginBottom={10} />
          <Text style={styles.text}>{`Breathing ${
            withStretching ? "w/ Stretching" : ""
          }`}</Text>
          <View marginBottom={10} />
          <Text style={styles.text}>{`${meditationType}`}</Text>
        </View>
        <View style={LAYOUT.row}>
          <MButton
            text="No"
            containerStyle={styles.button}
            onPress={() => moveToHomeScreen()}
          />
          <MButton
            text="Yes"
            containerStyle={styles.button}
            onPress={() => moveToHomeScreen()}
          />
        </View>
      </View>
    </View>
  );
};

export default Favorite;

const styles = StyleSheet.create({
  mainContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: Dimensions.get("window").height,
  },
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    height: "50%",
    width: "90%",
  },
  title: {
    fontSize: 30,
    color: COLORS.primary_blue,
    fontWeight: "bold",
    textAlign: "center",
  },
  text: {
    fontSize: 20,
    color: COLORS.primary_blue,
    fontWeight: "bold",
    textAlign: "center",
  },
  button: {
    width: 150,
    marginHorizontal: 10,
  },
});
