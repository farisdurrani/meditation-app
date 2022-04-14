import { StyleSheet, Text, View, Dimensions } from "react-native";
import React from "react";
import { MText, MButton } from "../../components";
import { LAYOUT, COLORS } from "../../constants";

const FocusedInfo = () => {
    return (
        <View style={styles.mainContainer}>
          <Text style = {{fontSize: 60, textAlign: "center", color: COLORS.primary_blue}}>Focused Meditation</Text>
          <Text style = {{fontSize: 40, textAlign: "center", marginTop: 50}}>self meditation using a word to focus on</Text>
          <MButton
            text="CLOSE"
            containerStyle={{ width: 200, marginTop: 120}}
          />
        </View>
      );
}

export default FocusedInfo;

const styles = StyleSheet.create({
  mainContainer: {
    marginTop: Dimensions.get("window").height * 0.12,
    alignItems: "center",
  }
});