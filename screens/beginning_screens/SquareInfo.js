import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import { MButton, MText, HeaderButtons } from "../../components";
// import Excercise3Image from '../../assets/Excercise3.png'

const SquareInfo = ({ navigation }) => {
  return (
    <View style={styles.mainContainer}>
      <MText text="GUIDED BREATHING" />
      <Text style={styles.text}>
        guide user in breathing by aligning breath with guide
      </Text>
      <View style={styles.button}>
        <MButton text={"CLOSE"} />
      </View>
    </View>
  );
};

export default SquareInfo;

const styles = StyleSheet.create({
  mainContainer: {
    display: "flex",
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  label: {
    fontSize: 40,
    textAlign: "center",
    fontWeight: "bold",
  },
  text: {
    fontSize: 28,
    marginTop: 50,
    fontWeight: "200",
    width: "75%",
    textAlign: "center",
  },
  button: {
    width: 150,
    marginTop: 40,
  },
  image: {
    width: "90%",
    height: 300,
    resizeMode: "contain",
  },
  pauseIcon: {
    width: 20,
    height: 40,
    resizeMode: "contain",
  },
});
