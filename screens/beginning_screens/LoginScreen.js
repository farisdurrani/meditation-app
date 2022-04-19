import React, { useState } from "react";
import {
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Image,
} from "react-native";
import { COLORS } from "../../constants";
import { auth } from "../../firebase";
import { MText, MButton } from "../../components";

const LoginScreen = ({ navigation }) => {
  const [email, onChangeEmail] = useState("");
  const [password, onChangePassword] = useState("");

  // from https://youtu.be/ql4J6SpLXZA
  const handleLogin = () => {
    auth
      .signInWithEmailAndPassword(email, password)
      .then((userCredentials) => {
        const user = userCredentials.user;
        console.log("Logged in with", user.email);
        goToNextScreen();
      })
      .catch((error) => alert(error.message));
  };

  const goToNextScreen = () => {
    navigation.navigate("CurrentScore", {
      ORIG_MINUTES: null,
      meditationType: null,
      withStretching: null,
    });
  };

  return (
    <View style={styles.mainContainer}>
      <Image
        source={require("../../assets/head.png")}
        style={{ height: 150, width: 150, marginBottom: 20 }}
      />
      <Text style={styles.welcomeText}>Welcome to NeuroSky</Text>
      <View style={styles.inputBox}>
        <KeyboardAvoidingView behavior="padding" style={{ marginBottom: 20 }}>
          <TextInput
            placeholder="Email"
            value={email}
            onChangeText={onChangeEmail}
            style={styles.inputText}
          ></TextInput>

          <TextInput
            placeholder="Password"
            value={password}
            onChangeText={onChangePassword}
            style={styles.inputText}
            secureTextEntry={true}
          ></TextInput>
        </KeyboardAvoidingView>
        <MButton
          text="Log In"
          onPress={email ? handleLogin : goToNextScreen}
        />
      </View>
      <Text
        style={{ fontSize: 19, color: COLORS.primary_blue, marginBottom: 20 }}
      >
        New user?
      </Text>
      <MButton
        text="Register"
        onPress={() => navigation.navigate("RegisterScreen")}
        containerStyle={{ width: 200 }}
      />
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  welcomeText: {
    fontSize: 20,
    fontWeight: "bold",
    color: COLORS.primary_blue,
    marginBottom: 20,
  },
  inputBox: {
    borderWidth: 3,
    width: 300,
    padding: 20,
    borderRadius: 20,
    marginBottom: 40,
  },
  inputText: {
    textAlign: "center",
    padding: 15,
    fontSize: 20,
  },
});
