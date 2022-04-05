import { StyleSheet, Text, View, Dimensions } from "react-native";
import React from "react";
import { HeaderButtons, HelpButton, MButton } from "../../components";
import { COLORS, LAYOUT } from "../../constants";

const Timer = ({ navigation }) => {
  return (
    <View style={styles.mainContainer}>
      <HeaderButtons settings={true} navigation={navigation} />
      <Text
        style={{ fontSize: 40, color: COLORS.primary_blue, marginBottom: 20 }}
      >
        Length of Session
      </Text>
      <View style={styles.oneRow}>
        <MButton containerStyle={{ width: "45%" }} text="2 min" />
        <MButton containerStyle={{ width: "45%" }} text="5 min" />
      </View>
      <View style={styles.oneRow}>
        <MButton containerStyle={{ width: "45%" }} text="10 min" />
        <MButton containerStyle={{ width: "45%" }} text="15 min" />
      </View>
      <Text
        style={{ fontSize: 40, color: COLORS.primary_blue, marginBottom: 20 }}
      >
        Type of Session
      </Text>
      <View style={styles.oneRow}>
        <MButton containerStyle={{ width: "75%" }} text="Focused" />
        <HelpButton />
      </View>
      <View style={styles.oneRow}>
        <MButton containerStyle={{ width: "75%" }} text="Guided breathing" />
        <HelpButton />
      </View>
      <View style={styles.oneRow}>
        <MButton containerStyle={{ width: "75%" }} text="Library" />
      </View>
      <MButton
        containerStyle={{
          width: "90%",
          marginTop: Dimensions.get("window").height * 0.1,
        }}
        text="Continue"
      />
    </View>
  );
};

export default Timer;

const styles = StyleSheet.create({
  mainContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
  },
  oneRow: {
    display: "flex",
    width: "90%",
    marginBottom: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
});
