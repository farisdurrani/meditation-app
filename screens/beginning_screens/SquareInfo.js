import { StyleSheet, Text, View, Dimensions } from "react-native";
import React from "react";
import { MText, MButton } from "../../components";
import { LAYOUT, COLORS } from "../../constants";

const SquareInfo = () => {
    return (
        <View style={styles.mainContainer}>
          <Text style = {{fontSize: 60, textAlign: "center", color: COLORS.primary_blue}}>Guided Breathing</Text>
          <Text style = {{fontSize: 39, textAlign: "center", marginTop: 50}}>guide user in breathing by ailgning breath with guide</Text>
          <MButton
            text="CLOSE"
            containerStyle={{ width: 200, marginTop: 100}}
          />
        </View>
      );
}

export default SquareInfo;

const styles = StyleSheet.create({
  mainContainer: {
    marginTop: Dimensions.get("window").height * 0.12,
    alignItems: "center",
  }
});