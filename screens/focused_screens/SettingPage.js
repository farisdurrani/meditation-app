import { StyleSheet, Text, View, Switch } from "react-native";
import React from "react";
import { COLORS } from "../../constants";
import { HeaderButtons, DropDown } from "../../components";
import { Slider } from "@miblanchard/react-native-slider";

const SettingPage = ({ navigation }) => {
  const [isEnabledSound, setIsEnabledSound] = React.useState(false);
  const [isEnabledTextToSpeech, setIsEnabledTextToSpeech] =
    React.useState(false);
  const [soundLevel, setSoundLevel] = React.useState(0.3);
  const [textSize, setTextSize] = React.useState(0.3);

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
      {/* from https://snack.expo.dev/@miblanchard/@miblanchard-react-native-slider */}
      <Slider
        animateTransitions
        minimumTrackTintColor={
          isEnabledSound ? COLORS.primary_blue : COLORS.dark_gray
        }
        thumbStyle={
          isEnabledSound ? customStyles3.thumb : customStyles3.disabledThumb
        }
        trackStyle={
          isEnabledSound ? customStyles3.track : customStyles3.disabledTrack
        }
        value={soundLevel}
        disabled={!isEnabledSound}
        onValueChange={setSoundLevel}
        containerStyle={{ width: "90%" }}
      />
      <DropDown listOfItems={["Rainfall", "Banana"]} />
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
