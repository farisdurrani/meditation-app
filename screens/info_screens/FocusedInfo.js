import { StyleSheet, Text, View, Dimensions } from "react-native";
import React from "react";
import { MText, MButton } from "../../components";
import { COLORS } from "../../constants";

const FocusedInfo = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.mainContainer}>
        <MText text="Focused Meditation" />
        <Text style={styles.text}>
          Self meditation using a word to focus on
        </Text>
        <MButton
          text="CLOSE"
          onPress={() => navigation.goBack}
          containerStyle={{ marginTop: 100, width: 200 }}
        />
      </View>
    </View>
  );
};

export default FocusedInfo;

const styles = StyleSheet.create({
  mainContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    height: Dimensions.get("window").height * 0.6,
    paddingHorizontal: 20,
  },
  text: {
    fontSize: 30,
    textAlign: "center",
    color: COLORS.primary_blue,
  },
  container: {
    display: "flex",
    height: Dimensions.get("window").height,
    justifyContent: "center",
    alignItems: "center",
  },
});
