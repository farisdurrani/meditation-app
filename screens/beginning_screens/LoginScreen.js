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
import { auth } from "../../firebase";

const LoginScreen = ({ navigation }) => {
  const [email, onChangeEmail] = useState("");
  const [password, onChangePassword] = useState("");

  // from https://youtu.be/ql4J6SpLXZA
  const handleSignup = () => {
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((userCredentials) => {
        const user = userCredentials.user;
        console.log("Registered with", user.email);
      })
      .catch((error) => alert(error.message));
  };

  const handleLogin = () => {
    auth
      .signInWithEmailAndPassword(email, password)
      .then((userCredentials) => {
        const user = userCredentials.user;
        console.log("Logged in with", user.email);
        navigation.replace("HomeScreen");
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  return (
    <View style={styles.mainContainer} >
      <Image
        source={require("../../assets/head.png")}
        style={{ height: 100, width: 100 }}
      />
      <KeyboardAvoidingView behavior="padding">
        <View style={styles.inputContainer}>
          <TextInput
            placeholder="Email"
            value={email}
            onChangeText={onChangeEmail}
            style={styles.input}
          ></TextInput>

          <TextInput
            placeholder="Password"
            value={password}
            onChangeText={onChangePassword}
            style={styles.input}
            secureTextEntry={true}
          ></TextInput>
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity
            onPress={handleLogin}
            style={[styles.button, styles.buttonOutline]}
          >
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.button, styles.buttonOutline]}
            onPress={handleSignup}
          >
            <Text style={styles.buttonText}>Register</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    padding: 15,
  },
  buttonText: {
    color: "blue",
  },
  input: {
    padding: 15,
  },
});
