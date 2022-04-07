import { StyleSheet, Text, View, Dimensions } from "react-native";
import { COLORS } from "../../constants";
import { HeaderButtons, DropDown, MButton } from "../../components";
import React from "react";

const Guided = ({ navigation, route }) => {
  const { minutes } = route.params;
  return (
    <View style={{ alignItems: "center" }}>
      <HeaderButtons navigation={navigation} />
      <View style={styles.contents}>
        <Text style={{ fontSize: 45 }}>Select a session</Text>
        <MButton
          containerStyle={{ width: screenWidth * 0.5 }}
          text="Breathing"
          onPress={() => {
            navigation.navigate("Breathing", { minutes: minutes });
          }}
        />
        <MButton
          containerStyle={{ width: screenWidth * 0.5 }}
          text="Breathing with stretching"
          onPress={() => {
            navigation.navigate("Breathing", {
              minutes: minutes,
              withStretching: true,
            });
          }}
        />
      </View>
    </View>
  );
};

export default Guided;

const screenHeight = Dimensions.get("window").height;
const screenWidth = Dimensions.get("window").width;
const styles = StyleSheet.create({
  contents: {
    height: screenHeight * 0.3,
    marginTop: screenHeight * 0.2,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
});
