import {
  StyleSheet,
  Text,
  View,
  TextInput,
  KeyboardAvoidingView,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import { HeaderButtons, MButton } from "../../components";
import { COLORS } from "../../constants";

const ChooseWordPage = ({ navigation, route }) => {
  const {
    minutes,
    initButton1Word = "Word",
    initButton2Word = "Word",
    initButton3Word = "Word",
  } = route.params;
  const [newWord, setNewWord] = useState("");

  const [button1Word, setButton1Word] = useState(initButton1Word);
  const [button2Word, setButton2Word] = useState(initButton2Word);
  const [button3Word, setButton3Word] = useState(initButton3Word);

  const _WordButton = (params) => {
    const { text, long = false } = params;
    return (
      <MButton
        containerStyle={{ width: long ? "49%" : "32%" }}
        text={text}
        onPress={() =>
          navigation.navigate("BeginChooseWord", {
            minutes: minutes,
            chosenWord: text,
          })
        }
      />
    );
  };

  return (
    <ScrollView contentContainerStyle={{ alignItems: "center" }}>
      <HeaderButtons
        navigation={navigation}
        onPressHelp={() =>
          navigation.replace("SquareInfo2", {
            prevScreen: "ChooseWordPage",
            minutes: minutes,
            initButton1Word: button1Word,
            initButton2Word: button2Word,
            initButton3Word: button3Word,
          })
        }
      />
      <Text style={styles.label}>Preloaded</Text>
      <View style={styles.oneRow}>
        <_WordButton text="safe" />
        <_WordButton text="nurtured" />
        <_WordButton text="serenity" />
      </View>
      <View style={styles.oneRow}>
        <_WordButton text="namaste" />
        <_WordButton text="wabi-sabi" />
        <MButton
          containerStyle={{ width: "32%" }}
          text="seren-dipity"
          onPress={() =>
            navigation.replace("BeginChooseWord", {
              minutes: minutes,
              chosenWord: "serendipity",
            })
          }
        />
      </View>

      <View style={styles.oneRow}>
        <_WordButton text={`loving-\nkindness`} long />
        <_WordButton text={`warm-\nheartedness`} long />
      </View>
      <Text style={styles.label}>My Own Words</Text>
      <View style={styles.oneRow}>
        <_WordButton text={button1Word} />
        <_WordButton text={button2Word} />
        <_WordButton text={button3Word} />
      </View>

      <KeyboardAvoidingView style={styles.inputBox}>
        <TextInput
          placeholder="Type your word"
          value={newWord}
          onChangeText={setNewWord}
          onSubmitEditing={() => {
            setButton3Word(button2Word);
            setButton2Word(button1Word);
            setButton1Word(newWord ? newWord : initButton1Word);
          }}
          maxLength={16}
          style={styles.inputText}
        />
      </KeyboardAvoidingView>
    </ScrollView>
  );
};

export default ChooseWordPage;

const styles = StyleSheet.create({
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
