import React from "react";
import { COLORS } from "../constants";
import { MaterialIcons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";

const HelpButton = (props) => {
  const { onPress } = props;
  const defaultSize = 40;
  const defaultColor = COLORS.primary_blue;
  return (
    <TouchableOpacity>
      <MaterialIcons
        name="help"
        size={defaultSize}
        color={defaultColor}
        onPress={onPress ? onPress : () => {}}
      />
    </TouchableOpacity>
  );
};

export default HelpButton;
