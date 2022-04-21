import { StyleSheet, Text, View, Dimensions } from "react-native";
import React from "react";
import { HeaderButtons, HelpButton, MButton } from "../../components";
import { COLORS, LAYOUT } from "../../constants";

const Timer = ({ navigation }) => {
  const [minutesSelected, setMinutesSelected] = React.useState(null);
  const [sessionSelected, setSessionSelected] = React.useState(null);

  const _SessionLengthButton = (minutes) => {
    return (
      <MButton
        containerStyle={{ width: "45%" }}
        text={`${minutes} min`}
        onPress={() => setMinutesSelected(minutes)}
      />
    );
  };

  const _SessionTypeButton = (type) => {
    return (
      <MButton
        containerStyle={{ width: "75%" }}
        text={type}
        onPress={() => setSessionSelected(type)}
      />
    );
  };

  const _nextPage = () => {
    if (!minutesSelected || !sessionSelected) {
      alert("Incomplete selections", "Select both a session length and type", [
        { text: "OK", onPress: () => {} },
      ]);
      return;
    }
    switch (sessionSelected) {
      case "Focused": {
        navigation.navigate("ChooseWordPage", {
          minutes: minutesSelected,
        });
        break;
      }
      case "Guided breathing": {
        navigation.navigate("Guided", {
          minutes: minutesSelected,
        });
        break;
      }
      case "Library": {
        navigation.navigate("FavoriteList", {
          minutes: minutesSelected,
        });
        break;
      }
    }
  };

  return (
    <View style={styles.mainContainer}>
      <HeaderButtons noRightButton navigation={navigation} />
      <Text style={styles.label}>Length of Session</Text>
      <View style={styles.oneRow}>
        {_SessionLengthButton(1)}
        {_SessionLengthButton(5)}
      </View>
      <View style={styles.oneRow}>
        {_SessionLengthButton(10)}
        {_SessionLengthButton(15)}
      </View>
      <Text style={styles.label}>Type of Session</Text>
      <View style={styles.oneRow}>
        {_SessionTypeButton("Focused")}
        <HelpButton onPressHelp={() => navigation.navigate("FocusedInfo")} />
      </View>
      <View style={styles.oneRow}>
        {_SessionTypeButton("Guided breathing")}
        <HelpButton
          onPressHelp={() =>
            navigation.replace("SquareInfo", { prevScreen: "Timer" })
          }
        />
      </View>
      <View style={styles.oneRow}>{_SessionTypeButton("Library")}</View>
      <MButton
        containerStyle={{
          width: "90%",
          marginTop: Dimensions.get("window").height * 0.1,
        }}
        text="Continue"
        onPress={() => _nextPage()}
      />
    </View>
  );
};

export default Timer;

const styles = StyleSheet.create({
  mainContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
  },
  oneRow: {
    display: "flex",
    width: "90%",
    marginBottom: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  label: {
    fontSize: 40,
    color: COLORS.primary_blue,
    marginBottom: 20,
  },
});
