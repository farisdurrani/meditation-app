import React from "react";
import { COLORS } from "../../constants";
import { HeaderButtons, MButton } from "../../components";
import { Slider } from "@miblanchard/react-native-slider";
import { StyleSheet, Text, View, Switch } from "react-native";
import { meditationSounds } from "./FocusedMeditation";

const SettingPage = ({ navigation, route }) => {
  const { minutesLeft, chosenWord } = route.params;

  const meditationSoundsTitles = meditationSounds.map((e) => e.title);

  const [isEnabledSound, setIsEnabledSound] = React.useState(false);
  const [isEnabledTextToSpeech, setIsEnabledTextToSpeech] =
    React.useState(false);
  const [textSize, setTextSize] = React.useState(0.3);
  const [chosenMusic, setChosenMusic] = React.useState(
    meditationSoundsTitles[0]
  );

  const _DropDown = () => {
    const labelAndValue = meditationSounds.map((e) => ({ label: e, value: e }));
    const [items, setItems] = React.useState(labelAndValue);
    const [open, setOpen] = React.useState(false);

    return (
      <DropDownPicker
        open={open}
        value={chosenMusic}
        items={items}
        setOpen={setOpen}
        setValue={setChosenMusic}
        setItems={setItems}
        containerStyle={{ width: "90%" }}
        textStyle={{ fontSize: 20, color: COLORS.primary_blue }}
      />
    );
  };

  return (
    <View style={styles.mainContainer}>
      <HeaderButtons navigation={navigation} />
      <Text
        style={{ fontSize: 40, color: COLORS.primary_blue, marginBottom: 20 }}
      >
        Settings
      </Text>
      <View style={styles.oneRow}>
        <Text style={{ fontSize: 30, color: COLORS.primary_blue }}>Sound</Text>
        <Switch
          trackColor={{ true: COLORS.primary_blue }}
          onValueChange={() => {
            setIsEnabledSound(!isEnabledSound);
          }}
          value={isEnabledSound}
        />
      </View>
      <_DropDown listOfItems={meditationSounds.map((e) => e.title)} />
      <View style={styles.oneRow}>
        <Text style={{ fontSize: 30, color: COLORS.primary_blue }}>
          Text to Speech
        </Text>
        <Switch
          trackColor={{ true: COLORS.primary_blue }}
          onValueChange={() => {
            setIsEnabledTextToSpeech(!isEnabledTextToSpeech);
          }}
          value={isEnabledTextToSpeech}
        />
      </View>
      <View style={styles.oneRow}>
        <Text style={{ fontSize: 30, color: COLORS.primary_blue }}>
          Text Size
        </Text>
      </View>
      {/* from https://snack.expo.dev/@miblanchard/@miblanchard-react-native-slider */}
      <Slider
        animateTransitions
        minimumTrackTintColor={COLORS.primary_blue}
        thumbStyle={customStyles3.thumb}
        trackStyle={customStyles3.track}
        value={textSize}
        onValueChange={setTextSize}
        containerStyle={{ width: "90%" }}
      />
      <MButton
        text="SAVE"
        onPress={() =>
          navigation.navigate("FocusedMeditation", {
            minutes: minutesLeft,
            chosenWord: chosenWord,
            chosenMusic: chosenMusic,
          })
        }
      />
    </View>
  );
};

export default SettingPage;

const styles = StyleSheet.create({
  mainContainer: {
    alignItems: "center",
  },
  oneRow: {
    display: "flex",
    width: "90%",
    marginVertical: 25,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
});

const customStyles3 = StyleSheet.create({
  thumb: {
    backgroundColor: COLORS.primary_blue,
    borderRadius: 20,
    height: 30,
    width: 30,
  },
  track: {
    backgroundColor: COLORS.light_blue,
    borderRadius: 5,
    height: 10,
  },
  disabledThumb: {
    backgroundColor: COLORS.dark_gray,
    borderRadius: 20,
    height: 30,
    width: 30,
  },
  disabledTrack: {
    backgroundColor: "#d0d0d0",
    borderRadius: 5,
    height: 10,
  },
});
