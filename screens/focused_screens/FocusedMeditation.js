import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useState } from "react";
import { HeaderButtons, MButton, HelpButton } from "../../components";
import { Ionicons } from "@expo/vector-icons";
import { COLORS, defaultIconColor, defaultIconSize } from "../../constants";
import { Bar } from "react-native-progress";
import { Overlay } from "react-native-elements";
import { Audio } from "expo-av";

const FocusedMeditation = ({ navigation, route }) => {
  const { ORIG_MINUTES, minutes, chosenWord, chosenMusicIndex } = route.params;

  const finalChosenMusicIndex = chosenMusicIndex ? chosenMusicIndex : 0;

  const [paused, setPaused] = useState(false);
  const [progress, setProgress] = useState(
    (ORIG_MINUTES - minutes) / ORIG_MINUTES
  );
  const [currentMusic, setCurrentMusic] = useState(null);
  const [mainSecondsLeft, setMainSecondsLeft] = useState(minutes * 60);

  const progressPerSec = 1 / (ORIG_MINUTES * 60);

  const _toggleOverlay = () => {
    if (!paused) {
      (async () => await currentMusic.stopAsync())();
    } else {
      (async () => await currentMusic.playAsync())();
    }
    setPaused(!paused);
  };

  useEffect(() => {
    if (!paused && mainSecondsLeft >= 0) {
      setTimeout(() => {
        setProgress(progress + progressPerSec);
        setMainSecondsLeft(mainSecondsLeft - 1);
      }, 1000);
    }
  }, [mainSecondsLeft, paused, progress, currentMusic]);

  useEffect(async () => {
    const { sound } = await Audio.Sound.createAsync(
      meditationSounds[finalChosenMusicIndex].source
    );
    setCurrentMusic(sound);
    sound.setIsLoopingAsync(true);
    await sound.playAsync();
  }, []);

  const _HeaderButtons = () => {
    const clock = `${Math.floor(mainSecondsLeft / 60)}:${
      mainSecondsLeft % 60 < 10 ? "0" : ""
    }${Math.round(mainSecondsLeft % 60)}`;
    return (
      <View style={header_styles.upperButtons}>
        <TouchableOpacity>
          <Ionicons
            name={paused ? "play" : "pause"}
            size={defaultIconSize}
            color={defaultIconColor}
            onPress={() => _toggleOverlay()}
          />
        </TouchableOpacity>
        <Text style={header_styles.timer}>{clock}</Text>
        <HelpButton
          onPressHelp={() => {
            currentMusic.stopAsync();
            currentMusic.unloadAsync();
            setPaused(true);
            navigation.replace("SquareInfo2", {
              prevScreen: "FocusedMeditation",
              ORIG_MINUTES: ORIG_MINUTES,
              minutes: mainSecondsLeft / 60,
              chosenWord: chosenWord,
              chosenMusicIndex: chosenMusicIndex,
            });
          }}
        />
      </View>
    );
  };

  return (
    <ImageBackground
      source={require("../../assets/background.png")}
      resizeMode="cover"
      style={{ flex: 1 }}
    >
      <View style={{ alignItems: "center" }}>
        <_HeaderButtons />
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
                currentMusic.stopAsync();
                currentMusic.unloadAsync();
                _toggleOverlay();
                navigation.replace("Timer");
              }}
            />
            <MButton
              containerStyle={{ width: "90%" }}
              text="Settings"
              onPress={() => {
                currentMusic.stopAsync();
                currentMusic.unloadAsync();
                _toggleOverlay();
                navigation.replace("SettingPage", {
                  ORIG_MINUTES: ORIG_MINUTES,
                  minutes: mainSecondsLeft / 60,
                  chosenWord: chosenWord,
                  chosenMusicIndex: finalChosenMusicIndex,
                });
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
  {
    title: "Whoosh",
    source: require("../../assets/music/woosh.wav"),
  },
];

const header_styles = StyleSheet.create({
  upperButtons: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "90%",
    marginTop: 60,
  },
  timer: {
    fontSize: 20,
    fontWeight: "bold",
    color: COLORS.primary_blue,
  },
});
