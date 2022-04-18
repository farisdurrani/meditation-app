import { Dimensions, StyleSheet, Text, View } from "react-native";
import React from "react";
import { COLORS, LAYOUT } from "../constants";
import { MButton } from "../components";

const Favorite = ({ navigation, route }) => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.container}>
        <Text style={styles.title}>
          Would you like to add this session to favorites?
        </Text>
        <View>
          <Text style={styles.text}>20 minutes</Text>
          <View marginBottom={10} />
          <Text style={styles.text}>Breathing w/ stretching</Text>
          <View marginBottom={10} />
          <Text style={styles.text}>Deep breathing</Text>
        </View>
        <View style={LAYOUT.row}>
          <MButton
            text="No"
            containerStyle={styles.button}
            onPress={() => navigation.navigate("CurrentScore")}
          />
          <MButton
            text="Yes"
            containerStyle={styles.button}
            onPress={() => navigation.navigate("CurrentScore")}
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
