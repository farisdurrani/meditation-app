import { StyleSheet, Text, View, Dimensions } from "react-native";
import React from "react";
import { MText, MButton } from "../../components";
import { COLORS } from "../../constants";

const SquareInfo3 = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.mainContainer}>
        <MText text="Square Breathing" />
        <Text style={styles.text}>
          inhale for 4 seconds hold for 4 seconds \n exhale for 4 seconds \n
          hold for 4 seconds
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

export default SquareInfo3;

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