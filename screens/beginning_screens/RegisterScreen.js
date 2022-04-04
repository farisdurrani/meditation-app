import React, { useState } from "react";
import {
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Image,
  Alert,
} from "react-native";
import { COLORS } from "../../constants";
import { auth } from "../../firebase";
import { MText, MButton } from "../../components";

const RegisterScreen = ({ navigation }) => {
  const [email, onChangeEmail] = useState("");
  const [password, onChangePassword] = useState("");
  const [DOB, onChangeDOB] = useState("");

  // from https://youtu.be/ql4J6SpLXZA
  const handleSignup = () => {
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((userCredentials) => {
        const user = userCredentials.user;
        console.log("Registered with", user.email);
        navigation.navigate("LoginScreen");
      })
      .catch((error) => alert(error.message));
  };

  const _verifyDate = (date) => {
    // from https://www.geeksforgeeks.org/how-to-check-a-date-is-valid-or-not-using-javascript/
    let d = new Date(date);

    if (Object.prototype.toString.call(d) === "[object Date]") {
      return !isNaN(d.getTime());
    } else {
      return False;
    }
  };

  const _neutralError = (title, subtitle) => {
    Alert.alert(title, subtitle, [{ text: "OK", onPress: () => {} }]);
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
            placeholder="Date of Birth (mm/dd/yyyy)"
            value={DOB}
            onChangeText={onChangeDOB}
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
          text="Register"
          onPress={() => {
            if (_verifyDate(DOB)) {
              handleSignup();
            } else {
              _neutralError(
                "Incorrect format",
                "Please enter date of birth in the format mm/dd/yyyy"
              );
            }
          }}
        />
      </View>

      <Text
        style={{ fontSize: 19, color: COLORS.primary_blue, marginBottom: 20 }}
      >
        Current user?
      </Text>
      <MButton
        text="Log In"
        onPress={() => {
          navigation.navigate("LoginScreen");
        }}
        containerStyle={{ width: 200 }}
      />
    </View>
  );
};

export default RegisterScreen;

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
