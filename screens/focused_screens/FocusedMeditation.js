import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { HeaderButtons, MButton } from "../../components";
import { Ionicons } from "@expo/vector-icons";
import { COLORS, defaultIconColor, defaultIconSize } from "../../constants";
import { Bar } from "react-native-progress";
import { Button, Overlay } from "react-native-elements";
import { Audio } from "expo-av";

const FocusedMeditation = ({ navigation, route }) => {
  const { ORIG_MINUTES, minutes, chosenWord, chosenMusicIndex } = route.params;

  const [paused, setPaused] = useState(false);
  const [progress, setProgress] = useState(
    (ORIG_MINUTES - minutes) / ORIG_MINUTES
  );
  const [currentMusic, setCurrentMusic] = useState(null);

  const progressPerSec = 1 / (ORIG_MINUTES * 60);

  const _toggleOverlay = () => {
    if (!paused) {
      (async () => await currentMusic.pauseAsync())();
    } else {
      (async () => await currentMusic.playAsync())();
    }
    setPaused(!paused);
  };

  if (!paused && progress < 1) {
    setTimeout(() => {
      setProgress(progress + progressPerSec);
    }, 1000);
  }

  const _PauseButton = () => {
    return (
      <TouchableOpacity>
        <Ionicons
          name={paused ? "play" : "pause"}
          size={defaultIconSize}
          color={defaultIconColor}
          onPress={_toggleOverlay}
        />
      </TouchableOpacity>
    );
  };

  React.useEffect(async () => {
    const finalChosenMusicIndex = chosenMusicIndex ? chosenMusicIndex : 0;
    const { sound } = await Audio.Sound.createAsync(
      meditationSounds[finalChosenMusicIndex].source
    );
    setCurrentMusic(sound);
    sound.setIsLoopingAsync(true);
    await sound.replayAsync();
  }, []);

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
          onTimerZero={() => {
            currentMusic.unloadAsync();
            navigation.navigate("CurrentScore", {
              ORIG_MINUTES: null,
              meditationType: null,
              withStretching: null,
              nextScreen: "Timer",
            });
          }}
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
              onPress={() => navigation.navigate("Timer")}
            />
            <MButton
              containerStyle={{ width: "90%" }}
              text="Settings"
              onPress={() =>
                navigation.navigate("SettingPage", {
                  ORIG_MINUTES: ORIG_MINUTES,
                  minutes: minutes,
                  chosenWord: chosenWord,
                  chosenMusicIndex: chosenMusicIndex,
                })
              }
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

export const meditationSounds = [
  {
    title: "Rain sound (빗소리)",
    source: require("../../assets/music/rain.mp3"),
  },
  {
    title: "Cordillera Breeze",
    source: require("../../assets/music/breeze.mp3"),
  },
  {
    title: "Relaxing Flute Music",
    source: require("../../assets/music/flute.mp3"),
  },
];
