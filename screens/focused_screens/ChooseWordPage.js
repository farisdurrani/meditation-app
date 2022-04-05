import {
  StyleSheet,
  Text,
  View,
  TextInput,
  KeyboardAvoidingView,
} from "react-native";
import React from "react";
import { HeaderButtons, MButton } from "../../components";
import { COLORS } from "../../constants";

const ChooseWordPage = ({ navigation }) => {
  const [newWord, setNewWord] = React.useState("");

  return (
    <View style={styles.mainContainer}>
      <HeaderButtons navigation={navigation} />
      <Text style={styles.label}>Preloaded</Text>
      <View style={styles.oneRow}>
        <MButton containerStyle={{ width: "32%" }} text="safe" />
        <MButton containerStyle={{ width: "32%" }} text="nurtured" />
        <MButton containerStyle={{ width: "32%" }} text="serenity" />
      </View>
      <View style={styles.oneRow}>
        <MButton containerStyle={{ width: "32%" }} text="namaste" />
        <MButton containerStyle={{ width: "32%" }} text="wabi-sabi" />
        <MButton containerStyle={{ width: "32%" }} text="seren-dipity" />
      </View>

      <View style={styles.oneRow}>
        <MButton
          containerStyle={{ width: "49%" }}
          text="loving-
        kindness"
        />
        <MButton
          containerStyle={{ width: "49%" }}
          text="warm-
        heartedness"
        />
      </View>
      <Text style={styles.label}>My Own Words</Text>
      <View style={styles.oneRow}>
        <MButton containerStyle={{ width: "33%" }} text="Word" />
        <MButton containerStyle={{ width: "33%" }} text="Word" />
        <MButton containerStyle={{ width: "33%" }} text="Word" />
      </View>

      <KeyboardAvoidingView style={styles.inputBox}>
        <TextInput
          placeholder="Type your word"
          value={newWord}
          onChangeText={setNewWord}
          style={styles.inputText}
        />
      </KeyboardAvoidingView>
    </View>
  );
};

export default ChooseWordPage;

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
  inputBox: {
    borderWidth: 3,
    marginTop: 20,
    width: 300,
    padding: 20,
    borderRadius: 20,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  inputText: {
    textAlign: "center",
    fontSize: 20,
  },
  label: {
    color: COLORS.primary_blue,
    fontSize: 30,
    marginVertical: 20,
  },
});
