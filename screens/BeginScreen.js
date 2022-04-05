import { StyleSheet, Text, View, Dimensions } from "react-native";
import React from "react";
import { HeaderButtons, MButton } from "../components";

const BeginScreen = ({ navigation, route }) => {
  const screenWidth = Dimensions.get("window").width;
  const screenHeight = Dimensions.get("window").height;
  return (
    <View style={{ alignItems: "center" }}>
      <HeaderButtons navigation={navigation} noRightButton />
      <Text
        style={{
          fontSize: 50,
          textAlign: "center",
          marginTop: screenHeight * 0.1,
        }}
      >
        SQUARE BREATHING
      </Text>
      <MButton
        containerStyle={{
          width: screenWidth * 0.7,
          marginTop: screenHeight * 0.2,
        }}
        text="Begin"
      />
    </View>
  );
};

export default BeginScreen;

const styles = StyleSheet.create({});
