import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { HeaderButtons, MButton } from "../../components";
import { Ionicons } from "@expo/vector-icons";
import { COLORS, defaultIconColor, defaultIconSize } from "../../constants";
import { Bar } from "react-native-progress";
import { Button, Overlay } from "react-native-elements";

const FocusedMeditation = ({ navigation, route }) => {
  const { minutes, chosenWord } = route.params;
  const [paused, setPaused] = React.useState(false);
  const [progress, setProgress] = React.useState(0);

  const progressPerSec = 1 / (minutes * 60);

  const _toggleOverlay = () => {
    setPaused(!paused);
  };

  if (!paused && progress < 1) {
    setTimeout(() => {
      setProgress(progress + progressPerSec);
    }, 1000);
  }

  const _PauseButton = () => {
    return (
      <TouchableOpacity onPress={navigation.goBack}>
        <Ionicons
          name={paused ? "play" : "pause"}
          size={defaultIconSize}
          color={defaultIconColor}
          onPress={() => {
            setPaused(!paused);
          }}
        />
      </TouchableOpacity>
    );
  };

  return (
    <ImageBackground
      source={require("../../assets/background.png")}
      resizeMode="cover"
      style={{ flex: 1 }}
    >
      <View style={{ alignItems: "center" }}>
        <HeaderButtons
          navigation={navigation}
          timer={minutes * 60}
          customLeftButton={_PauseButton}
        />
        <Text style={styles.chosenWord}>
          {chosenWord ? chosenWord : "Chosen Word"}
        </Text>
        <View style={{ marginTop: screenHeight * 0.3 }}>
          <Bar
            progress={progress}
            color={COLORS.primary_blue}
            height={20}
            width={screenWidth * 0.9}
            borderRadius={10}
          />
        </View>

        <Overlay isVisible={paused} onBackdropPress={_toggleOverlay}>
          <View style={styles.overlayView}>
            <Text style={styles.overlayTitle}>PAUSE</Text>
            <MButton
              containerStyle={{ width: "90%" }}
              text="Continue"
              onPress={_toggleOverlay}
            />
            <MButton
              containerStyle={{ width: "90%" }}
              text="Home"
              onPress={() => {
                navigation.navigate("Timer");
              }}
            />
            <MButton
              containerStyle={{ width: "90%" }}
              text="Settings"
              onPress={() => {
                navigation.navigate("SettingPage");
              }}
            />
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
  chosenWord: {
    color: COLORS.white,
    fontWeight: "bold",
    fontSize: 50,
    marginTop: screenHeight * 0.3,
    textAlign: "center",
  },
  overlayView: {
    width: screenWidth * 0.7,
    height: screenHeight * 0.4,
    borderRadius: 20,
    alignItems: "center",
    padding: 20,
    justifyContent: "space-around",
  },
  overlayTitle: {
    fontSize: 40,
    fontWeight: "bold",
    color: COLORS.primary_blue,
    marginBottom: 20,
  },
});