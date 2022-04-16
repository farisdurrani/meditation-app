import { StyleSheet, Text, View, Dimensions, Image } from "react-native";
import React, { useState, useEffect } from "react";
import { COLORS } from "../../constants";
import { HeaderButtons, DropDown, MButton, MText } from "../../components";

const ExerciseHandsAbove = ({ navigation, route }) => {

    const minutes = 10;
  
    const title= "Hands Above Head";
    const [timeLeft, setTimeLeft] = useState(20);
    //const [index, setIndex] = useState(0);
    const [paused, setPaused] = useState(false);
    //const [sequence, setSequence] = useState(0);

    
  
    if (!paused) {
      if (timeLeft >= 0) {
        setTimeout(() => {
          setTimeLeft(timeLeft - 1);
        }, 1000);
      } 
      
    }
  
    return (
      <View style={{ alignItems: "center" }}>
         <HeaderButtons 
          navigation={navigation}
          timer={minutes * 60}
          pause
          onPause={() => {
            setPaused(!paused);
          }}
          onTimerZero={() => {
            navigation.replace("ExerciseTouchToes"); //this screen is replaced by CurrentScore
          }}
        />
        {/* <MText text={title} style={{fontSize: 20}}/>  */}
        <View marginTop={ Dimensions.get('window').width *0.10} />
        <Text style={styles.text}>{title}</Text> 
        <View marginTop={ Dimensions.get('window').width *0.10} />
        <Image 
        source={require("../../assets/exercisehold.png")}
      />
      <View marginTop={ Dimensions.get('window').width *0.05} />
        <MText text={timeLeft} /> 
      </View>
    );
  };
  
  export default ExerciseHandsAbove;
 
  
  const styles = StyleSheet.create({
    text: {
      fontSize: 40,
      fontWeight: "500",
      color: COLORS.primary_blue,
      textAlign: "center",
    },
  });

 // const styles = StyleSheet.create({});
  