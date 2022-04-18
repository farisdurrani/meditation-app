import { StyleSheet, Text, View, Dimensions } from "react-native";
import React from "react";
import { MText, MButton } from "../../components";
import { LAYOUT, COLORS } from "../../constants";

const DeepInfo = () => {
  return (
    <View style={styles.mainContainer}>
      <View marginTop={Dimensions.get("window").width * 0.15} />
      <Text
        style={{
          fontSize: 65,
          textAlign: "center",
          color: COLORS.primary_blue,
        }}
      >
        Deep Breathing
      </Text>
      <View marginTop={Dimensions.get("window").width * 0.15} />
      <Text style={{ fontSize: 40, textAlign: "center" }}>
        inhale for 4 seconds
      </Text>
      <Text style={{ fontSize: 40, textAlign: "center" }}>
        hold for 7 seconds
      </Text>
      <Text style={{ fontSize: 40, textAlign: "center" }}>
        exhale for 8 seconds
      </Text>
      <View marginTop={Dimensions.get("window").width * 0.5} />
      <MButton text="CLOSE" />
    </View>
  );
};

export default DeepInfo;

const styles = StyleSheet.create({});
