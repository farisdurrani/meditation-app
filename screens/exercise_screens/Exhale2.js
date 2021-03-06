import {
  Dimensions,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import React, { useState, useRef, useEffect } from "react";
import { HeaderButtons, MText, MButton } from "../../components";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import {
  COLORS,
  defaultIconColor,
  defaultIconSize,
  breathingHelpScreens,
} from "../../constants";
import { Overlay } from "react-native-elements";

const Exhale2 = ({ navigation, route }) => {
  const {
    ORIG_MINUTES,
    mainSecondsLeftCopy,
    text,
    meditationType,
    initSecondsLeft = 20,
  } = route.params;

  const [secondsLeft, setSecondsLeft] = useState(initSecondsLeft);
  const [mainSecondsLeft, setMainSecondsLeft] = useState(mainSecondsLeftCopy);
  const [paused, setPaused] = useState(false);
  const _toggleOverlay = () => setPaused(!paused);

  useEffect(() => {
    if (!paused) {
      if (mainSecondsLeft >= 0 && secondsLeft >= 0) {
        setTimeout(() => {
          setSecondsLeft(secondsLeft - 1);
          setMainSecondsLeft(mainSecondsLeft - 1);
        }, 1000);
      } else if (mainSecondsLeft < 0) {
        navigation.replace("CurrentScore", {
          ORIG_MINUTES: ORIG_MINUTES,
          meditationType: meditationType,
          withStretching: true,
        });
      } else if (secondsLeft < 0) {
        navigation.replace("InhaleHold", {
          ORIG_MINUTES: ORIG_MINUTES,
          minutes: mainSecondsLeft / 60,
          meditationType: meditationType,
          withStretching: true,
        });
      }
    }
  }, [secondsLeft, mainSecondsLeft, paused]);

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
            onPress={() => {
              setPaused(!paused);
            }}
          />
        </TouchableOpacity>
        <Text style={header_styles.timer}>{clock}</Text>
        <TouchableOpacity>
          <MaterialIcons
            name="help"
            size={defaultIconSize}
            color={defaultIconColor}
            onPress={() =>
              navigation.replace(breathingHelpScreens[meditationType], {
                prevScreen: "Exhale2",
                ORIG_MINUTES: ORIG_MINUTES,
                mainSecondsLeftCopy: mainSecondsLeft,
                text: text,
                meditationType: meditationType,
                initSecondsLeft: secondsLeft,
              })
            }
          />
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View style={{ alignItems: "center" }}>
      <_HeaderButtons />
      <View marginTop={Dimensions.get("window").height * 0.2} />
      <MText text={text} containerStyle={{ maxWidth: 350 }} />
      <MText text={secondsLeft} containerStyle={{ marginTop: 20 }} />
      <Overlay isVisible={paused} onBackdropPress={_toggleOverlay}>
        <View style={styles.overlayView}>
          <Text style={styles.overlayTitle}>PAUSE</Text>

          <Text style={{ fontSize: 20, marginVertical: 40 }}>
            Do you want to go to Home?
          </Text>
          <View style={styles.parent}>
            <MButton
              containerStyle={{ width: "50%" }}
              text="Home"
              onPress={() => {
                _toggleOverlay();
                navigation.replace("Timer");
              }}
            />
            <MButton
              containerStyle={{ width: "50%" }}
              text="Resume"
              onPress={_toggleOverlay}
            />
          </View>
        </View>
      </Overlay>
    </View>
  );
};

export default Exhale2;

const [screenWidth, screenHeight] = [
  Dimensions.get("window").width,
  Dimensions.get("window").height,
];

const styles = StyleSheet.create({
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
  parent: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "space-around",
  },
});

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
