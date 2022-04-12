import { StyleSheet, Text, View, Dimensions } from "react-native";
import React from "react";
import { MText, MButton } from "../../components";
import { LAYOUT, COLORS } from "../../constants";

const SquareInfo = () => {
    return (
        <View style={styles.mainContainer}>
          <Text style = {{fontSize: 70, textAlign: "center", color: COLORS.primary_blue}}>Guided Breathing</Text>
          <Text style = {{fontSize: 70, textAlign: "center"}}>guide user in breathing by ailgning breath with guide</Text>
          <MButton
            text="CLOSE"
          />
        </View>
      );
}

export default SquareInfo;

const styles = StyleSheet.create({
});