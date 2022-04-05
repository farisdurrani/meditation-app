import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  Dimensions,
} from "react-native";
import React from "react";
import { HeaderButtons, MButton } from "../../components";
import { COLORS } from "../../constants";
import { Bar } from "react-native-progress";
import { Button, Overlay } from "react-native-elements";

const FocusedMeditation = ({ navigation, route }) => {
  const { chosenWord } = route;
  const [overlay, setOverlay] = React.useState(true);

  const _toggleOverlay = () => {
    setOverlay(!overlay);
  };

  return (
    <ImageBackground
      source={require("../../assets/background.png")}
      resizeMode="cover"
      style={{ flex: 1 }}
    >
      <View style={styles.mainContainer}>
        <HeaderButtons
          pause={true}
          onPause={_toggleOverlay}
          navigation={navigation}
          timer
        />
        <Text style={styles.chosenWord}>
          {chosenWord ? chosenWord : "Chosen Word"}
        </Text>
        <View style={{ marginTop: screenHeight * 0.3 }}>
          <Bar
            progress={0.3}
            color={COLORS.primary_blue}
            height={20}
            width={screenWidth * 0.9}
            borderRadius={10}
          />
        </View>

        <Overlay isVisible={overlay} onBackdropPress={_toggleOverlay}>
          <View
            style={{
              width: screenWidth * 0.7,
              height: screenHeight * 0.4,
              borderRadius: 20,
              alignItems: "center",
              padding: 20,
              justifyContent: "space-around",
            }}
          >
            <Text
              style={{
                fontSize: 40,
                fontWeight: "bold",
                color: COLORS.primary_blue,
                marginBottom: 20,
              }}
            >
              PAUSE
            </Text>
            <MButton
              containerStyle={{ width: "90%" }}
              text="Continue"
              onPress={_toggleOverlay}
            />
            <MButton containerStyle={{ width: "90%" }} text="Home" />
            <MButton containerStyle={{ width: "90%" }} text="Settings" />
          </View>
        </Overlay>
      </View>
    </ImageBackground>
  );
};

export default FocusedMeditation;

const [screenWidth, screenHeight] = [
  Dimensions.get("window").width,
  Dimensions.get("window").height,
];

const styles = StyleSheet.create({
  mainContainer: {
    alignItems: "center",
  },
  chosenWord: {
    color: COLORS.white,
    fontWeight: "bold",
    fontSize: 45,
    marginTop: screenHeight * 0.3,
  },
});
