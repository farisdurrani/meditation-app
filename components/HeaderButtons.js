import { StyleSheet, TouchableOpacity, View } from "react-native";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import React from "react";

const BackCancelButtons = (props) => {
  const { navigation } = props;
  return (
    <View style={styles.upperButtons}>
      <TouchableOpacity onPress={navigation.goBack}>
        <Ionicons
          name="arrow-back"
          size={24}
          color="black"
          onPress={() => {
            navigation.goBack();
          }}
        />
      </TouchableOpacity>
      <TouchableOpacity>
        <MaterialIcons
          name="cancel"
          size={24}
          color="black"
          onPress={() => {
            navigation.navigate("Cancellation");
          }}
        />
      </TouchableOpacity>
    </View>
  );
};

export default BackCancelButtons;

const styles = StyleSheet.create({
  upperButtons: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
});
