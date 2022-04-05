import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  Dimensions,
} from "react-native";
import React from "react";
import { HeaderButtons } from "../../components";
import { COLORS } from "../../constants";
import { Bar } from "react-native-progress";

const FocusedMeditation = ({ navigation, route }) => {
  const { chosenWord } = route;
  return (
    <ImageBackground
      source={require("../../assets/background.png")}
      resizeMode="cover"
      style={styles.image}
    >
      <View style={styles.mainContainer}>
        <HeaderButtons pause={true} navigation={navigation} />
        <Text style={styles.chosenWord}>
          {chosenWord ? chosenWord : "Chosen Word"}
        </Text>
        <View style={{ marginTop: Dimensions.get("window").height * 0.3 }}>
          <Bar
            progress={0.3}
            color={COLORS.primary_blue}
            height={20}
            width={Dimensions.get("window").width * 0.9}
            borderRadius={10}
          />
        </View>
      </View>
    </ImageBackground>
  );
};

export default FocusedMeditation;

const styles = StyleSheet.create({
  mainContainer: {
    alignItems: "center",
  },
  image: {
    flex: 1,
  },
  chosenWord: {
    color: COLORS.white,
    fontWeight: "bold",
    fontSize: 45,
    marginTop: Dimensions.get("window").height * 0.3,
  },
});
