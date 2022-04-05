import { StyleSheet, Text, View, Dimensions } from "react-native";
import React from "react";
import { MText, MButton, HeaderButtons } from "../../components";
import { COLORS } from "../../constants";

const WelcomePage = ({ navigation }) => {
  return (
    <View style={styles.mainContainer}>
      <MText text="Welcome" />
      <Text style={{ fontSize: 26, color: COLORS.primary_blue }}>
        Take a deep breath
      </Text>
      <MButton
        text="Continue"
        containerStyle={{ marginTop: 50 }}
        onPress={() => {
          navigation.navigate("LoginScreen");
        }}
      />
    </View>
  );
};

export default WelcomePage;

const styles = StyleSheet.create({
  mainContainer: {
    marginTop: Dimensions.get("window").height * 0.3,
    width: "100%",
    display: "flex",
    alignItems: "center",
  },
});
