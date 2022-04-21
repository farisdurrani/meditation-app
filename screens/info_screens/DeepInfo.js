import { StyleSheet, Text, View, Dimensions } from "react-native";
import React from "react";
import { MText, MButton } from "../../components";
import { LAYOUT, COLORS } from "../../constants";

const DeepInfo = ({ navigation, route }) => {
  const { prevScreen } = route.params;

  return (
    <View style={styles.mainContainer}>
      <View marginTop={Dimensions.get("window").width * 0.15} />
      <Text style={styles.title}>Deep Breathing</Text>
      <View marginTop={Dimensions.get("window").width * 0.15} />
      <Text style={styles.instruction}>inhale for 4 seconds</Text>
      <Text style={styles.instruction}>hold for 7 seconds</Text>
      <Text style={styles.instruction}>exhale for 8 seconds</Text>
      <View marginTop={Dimensions.get("window").width * 0.5} />
      <MButton
        text="CLOSE"
        onPress={() => navigation.replace(prevScreen, route.params)}
        containerStyle={styles.button}
      />
    </View>
  );
};

export default DeepInfo;

const styles = StyleSheet.create({
  title: {
    fontSize: 65,
    textAlign: "center",
    color: COLORS.primary_blue,
  },
  instruction: { fontSize: 40, textAlign: "center" },
  button: {
    width: 200,
    marginHorizontal: 100,
    marginVertical: 10,
  },
});
