import React from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { View, TouchableOpacity } from "react-native";
import { defaultIconSize, defaultIconColor } from "../constants";

const HelpButton = (props) => {
  const { onPressHelp } = props;
  return (
    <TouchableOpacity>
      <MaterialIcons
        name="help"
        size={defaultIconSize}
        color={defaultIconColor}
        onPress={onPressHelp ? onPressHelp : () => {}}
      />
    </TouchableOpacity>
  );
};

export default HelpButton;
