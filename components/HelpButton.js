import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  MaterialIcons,
} from "react-native";
import React from "react";

const HelpButton = (props) => {
  const { onPressHelp } = props;
  return (
    <TouchableOpacity>
      <MaterialIcons
        name="help"
        size={defaultIconSize}
        color={defaultIconColor}
        onPress={() => onPressHelp(secondsLeft)}
      />
    </TouchableOpacity>
  );
};

export default HelpButton;

const styles = StyleSheet.create({});
