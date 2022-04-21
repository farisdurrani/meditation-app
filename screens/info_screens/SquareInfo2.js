import { StyleSheet, Text, View, Dimensions } from "react-native";
import React from "react";
import { MText, MButton } from "../../components";
import { COLORS } from "../../constants";

const SquareInfo2 = ({ navigation, route }) => {
  const { prevScreen = null } = route.params;
  return (
    <View style={styles.container}>
      <View style={styles.mainContainer}>
        <MText text="Focused Meditation" />
        <Text style={styles.text}>
          Self meditation using a word to focus on
        </Text>
        <MButton
          text="CLOSE"
          onPress={() => {
            if (prevScreen === null) {
              navigation.goBack();
              return;
            }
            navigation.replace(prevScreen, route.params);
          }}
          containerStyle={{ marginTop: 100, width: 200 }}
        />
      </View>
    </View>
  );
};

export default SquareInfo2;

const styles = StyleSheet.create({
  mainContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    height: Dimensions.get("window").height * 0.6,
    paddingHorizontal: 20,
  },
  text: {
    fontSize: 30,
    textAlign: "center",
    color: COLORS.primary_blue,
  },
  container: {
    display: "flex",
    height: Dimensions.get("window").height,
    justifyContent: "center",
    alignItems: "center",
  },
});
