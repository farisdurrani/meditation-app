import React from "react";
import { COLORS } from "../../constants";
import { HeaderButtons, MButton } from "../../components";
import { Slider } from "@miblanchard/react-native-slider";
import { StyleSheet, Text, View, Switch } from "react-native";
import { meditationSounds } from "./FocusedMeditation";
import DropDownPicker from "react-native-dropdown-picker";

const SettingPage = ({ navigation, route }) => {
  const { ORIG_MINUTES, minutesLeft, chosenWord, chosenMusicIndex } =
    route.params;

  const meditationSoundsTitles = meditationSounds.map((e) => e.title);
  const [isEnabledSound, setIsEnabledSound] = React.useState(true);
  const [isEnabledTextToSpeech, setIsEnabledTextToSpeech] =
    React.useState(false);
  const [textSize, setTextSize] = React.useState(0.3);
  const [chosenMusic, setChosenMusic] = React.useState(
    meditationSoundsTitles[chosenMusicIndex]
  );

  const _newChosenMusicIndex = () => {
    for (let i = 0; i < meditationSounds.length; i++) {
      if (meditationSounds[i].title === chosenMusic) {
        return i;
      }
    }
  };

  const _DropDown = () => {
    const labelAndValue = meditationSoundsTitles.map((e) => ({
      label: e,
      value: e,
    }));
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
    <View style={{ alignItems: "center" }}>
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
          onValueChange={() => setIsEnabledSound(!isEnabledSound)}
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
          onValueChange={() => setIsEnabledTextToSpeech(!isEnabledTextToSpeech)}
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
        onPress={() => {
          const newChosenMusicIndex = _newChosenMusicIndex();
          navigation.replace("FocusedMeditation", route.params);
        }}
      />
    </View>
  );
};

export default SettingPage;

const styles = StyleSheet.create({
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
