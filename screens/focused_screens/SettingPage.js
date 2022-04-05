import { StyleSheet, Text, View, Switch } from "react-native";
import React from "react";
import { COLORS } from "../../constants";
import { HeaderButtons } from "../../components";
import { Slider } from "@miblanchard/react-native-slider";

const SettingPage = ({ navigation }) => {
  const [isEnabled, setIsEnabled] = React.useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);
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
          onValueChange={toggleSwitch}
          value={isEnabled}
        />
      </View>
      <View style={{ width: "90%" }}>
        {/* from https://snack.expo.dev/@miblanchard/@miblanchard-react-native-slider */}
        <Slider
          animateTransitions
          minimumTrackTintColor={COLORS.dark_gray}
          thumbStyle={customStyles3.thumb}
          trackStyle={customStyles3.track}
          value={0.3}
        />
      </View>
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
    marginBottom: 20,
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
    backgroundColor: "#d0d0d0",
    borderRadius: 5,
    height: 10,
  },
});
