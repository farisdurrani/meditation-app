import { StyleSheet, Text, View, Dimensions, Alert } from "react-native";
import React from "react";
import { HeaderButtons, HelpButton, MButton } from "../../components";
import { COLORS, LAYOUT } from "../../constants";

const Timer = ({ navigation }) => {
  const [minutesSelected, setMinutesSelected] = React.useState(null);
  const [sessionSelected, setSessionSelected] = React.useState(null);

  return (
    <View style={styles.mainContainer}>
      <HeaderButtons settings={true} navigation={navigation} />
      <Text style={styles.label}>Length of Session</Text>
      <View style={styles.oneRow}>
        <MButton
          containerStyle={{ width: "45%" }}
          text="2 min"
          onPress={() => {setMinutesSelected(2)}}
          />
        <MButton
          containerStyle={{ width: "45%" }}
          text="5 min"
          onPress={() => {setMinutesSelected(5)}}
          />
      </View>
      <View style={styles.oneRow}>
        <MButton
          containerStyle={{ width: "45%" }}
          text="10 min"
          onPress={() => {setMinutesSelected(10)}}
          />
        <MButton
          containerStyle={{ width: "45%" }}
          text="15 min"
          onPress={() => {setMinutesSelected(15)}}
        />
      </View>
      <Text style={styles.label}>Type of Session</Text>
      <View style={styles.oneRow}>
        <MButton
          containerStyle={{ width: "75%" }}
          text="Focused"
          onPress={() => {setSessionSelected("Focused")}}
          />
        <HelpButton />
      </View>
      <View style={styles.oneRow}>
        <MButton
          containerStyle={{ width: "75%" }}
          text="Guided breathing"
          onPress={() => {setSessionSelected("Guided breathing")}}
          />
        <HelpButton />
      </View>
      <View style={styles.oneRow}>
        <MButton
          containerStyle={{ width: "75%" }}
          text="Library"
          onPress={() => {setSessionSelected("Library")}}
        />
      </View>
      <MButton
        containerStyle={{
          width: "90%",
          marginTop: Dimensions.get("window").height * 0.1,
        }}
        text="Continue"
        onPress={() => {
          if (!minutesSelected || !sessionSelected) {
            Alert.alert(
              "Incomplete selections",
              "Select both a session length and type",
              [{ text: "OK", onPress: () => {} }]
            );
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
        }}
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
