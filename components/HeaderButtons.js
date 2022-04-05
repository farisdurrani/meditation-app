import React from "react";
import { COLORS } from "../constants";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { HelpButton } from "./index";
import { StyleSheet, TouchableOpacity, View } from "react-native";

const BackCancelButtons = (props) => {
  const { navigation, pause, onSetPause, settings } = props;
  const defaultSize = 40;
  const defaultColor = COLORS.primary_blue;
  return (
    <View style={styles.upperButtons}>
      {pause ? (
        <TouchableOpacity onPress={navigation.goBack}>
          <Ionicons
            name="pause"
            size={defaultSize}
            color={defaultColor}
            onPress={() => {
              onSetPause(true);
            }}
          />
        </TouchableOpacity>
      ) : (
        <TouchableOpacity onPress={navigation.goBack}>
          <Ionicons
            name="arrow-back"
            size={defaultSize}
            color={defaultColor}
            onPress={() => {
              navigation.goBack();
            }}
          />
        </TouchableOpacity>
      )}

      {settings ? (
        <TouchableOpacity>
          <MaterialIcons
            name="settings"
            size={defaultSize}
            color={defaultColor}
            onPress={() => {}}
          />
        </TouchableOpacity>
      ) : (
        <HelpButton
          onPress={() => {
            navigation.navigate("SquareInfo2");
          }}
        />
      )}
    </View>
  );
};

export default BackCancelButtons;

const styles = StyleSheet.create({
  upperButtons: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    width: "90%",
    marginTop: 60,
  },
});
