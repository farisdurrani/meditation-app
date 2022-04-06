import { StyleSheet, Text, View, Dimensions } from "react-native";
import React, { useState, useEffect } from "react";
import { COLORS } from "../../constants";
import { HeaderButtons, DropDown, MButton, MText } from "../../components";

const InhaleHold = ({ navigation }) => {
  const [title, setTitle] = useState("Inhale");
  const [timeLeft, setTimeLeft] = useState(4);

  if (timeLeft > 0) {
    setTimeout(() => {
      setTimeLeft(timeLeft - 1);
    }, 1000);
  }

  return (
    <View style={{ alignItems: "center" }}>
      <HeaderButtons navigation={navigation} timer pause />
      <View marginTop={Dimensions.get("window").height * 0.25} />
      <MText text={title} />
      <MText text={timeLeft} />
    </View>
  );
};

export default InhaleHold;

const styles = StyleSheet.create({});
