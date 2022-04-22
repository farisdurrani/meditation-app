import { StyleSheet, Text, View, Dimensions } from "react-native";
import React from "react";
import { HeaderButtons, DropDown, MButton } from "../../components";

const FavoriteList = ({ navigation }) => {
  return (
    <View style={{ alignItems: "center" }}>
      <HeaderButtons navigation={navigation} noRightButton />
      <Text style={{ fontSize: 40, marginVertical: 40 }}>Favorite List</Text>
      <DropDown listOfItems={["Favorite 1", "Favorite 2"]} />
      <View style={{ marginVertical: 30 }} />
      <Text style={{ fontSize: 30 }}>• 20 minutes •</Text>
      <Text style={{ fontSize: 30 }}>• Breathing with stretching •</Text>
      <Text style={{ fontSize: 30 }}>• Deep breathing •</Text>
      <MButton
        text="Continue"
        containerStyle={{ marginTop: Dimensions.get("window").height * 0.25 }}
      />
    </View>
  );
};

export default FavoriteList;

const styles = StyleSheet.create({});
