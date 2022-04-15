import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { COLORS } from "../constants";

const MButton = (props) => {
  const { text, onPress, containerStyle, buttonStyle, textStyle } = props;
  const [buttonPressed, setButtonPressed] = React.useState(false);

  let curButtonStyle = buttonStyle ? buttonStyle : styles.button;
  if (buttonPressed) {
    curButtonStyle = styles.clicked_button;
  }

  return (
    <View style={containerStyle}>
      <TouchableOpacity
        onPress={() => {
          setButtonPressed(!buttonPressed);
          if (onPress) {
            onPress();
          }
        }}
        style={curButtonStyle}
      >
        <Text style={textStyle ? textStyle : styles.buttonText}>{text}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default MButton;

const styles = StyleSheet.create({
  button: {
    backgroundColor: COLORS.primary_blue,
    padding: 15,
    borderRadius: 50,
  },
  clicked_button: {
    backgroundColor: COLORS.navy_blue,
    padding: 15,
    borderRadius: 50,
  },
  buttonText: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
});
