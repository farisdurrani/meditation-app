import { StyleSheet, Text, View, Dimensions } from "react-native";
import React from "react";
import { HeaderButtons, MButton } from "../components";

const BeginScreen = ({ navigation, route }) => {
  const { title, minutes } = route.params;
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
        {title}
      </Text>
      <MButton
        containerStyle={{
          width: screenWidth * 0.7,
          marginTop: screenHeight * 0.2,
        }}
        text="Begin"
        onPress={() => {
          navigation.navigate("InhaleHold", {
            meditationType: "SquareBreathing",
            minutes: minutes,
          });
        }}
      />
    </View>
  );
};

export default BeginScreen;

const styles = StyleSheet.create({});
