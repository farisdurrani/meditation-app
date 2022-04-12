import { StyleSheet, Text, View, Dimensions } from "react-native";
import React from "react";
import { MText, MButton } from "../../components";
import { LAYOUT, COLORS } from "../../constants";

const FocusedInfo = () => {
    return (
        <View style={styles.mainContainer}>
          <Text style = {{fontSize: 70, textAlign: "center", colors: COLORS.primary_blue}}>Focused Meditation</Text>
          <Text style = {{fontSize: 70, textAlign: "center"}}>self meditation using a word to focus on</Text>
          <MButton
            text="CLOSE"
          />
        </View>
      );
}

export default FocusedInfo;

const styles = StyleSheet.create({
    
});