import { Dimensions, StyleSheet, Text, View } from "react-native";
import React from "react";
import { HeaderButtons, DropDown, MButton, MText } from "../../components";

const Prompt = ({ navigation }) => {
  return (
    <View style={{ alignItems: "center" }}>
      <HeaderButtons navigation={navigation} pause noRightButton />
      <MText
        text="please move to a clear space"
        containerStyle={{
          marginTop: Dimensions.get("window").height * 0.2,
          width: "90%",
        }}
      />
    </View>
  );
};

export default Prompt;

const styles = StyleSheet.create({});
