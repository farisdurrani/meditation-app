import React from 'react'
import { StyleSheet, View, Image } from 'react-native'
import { MText, MButton, HeaderButtons } from '../../../components'
import Excercise3Image from '../../../assets/Excercise3.png'

const Excercise3 = ({ navigation }) => {
  return (
    <View style={styles.mainContainer}>
      <HeaderButtons pause navigation={navigation} />
      <MText text="Legs Crossed"/>
      <Image source={Excercise3Image} style={styles.image} />
      <MText text="20"/>
    </View>
  )
}

export default Excercise3

const styles = StyleSheet.create({
  mainContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  label: {
    fontSize: 40,
    fontWeight: 'bold'
  },
  labelNumber: {
    fontSize: 60,
    fontWeight: 'bold'
  },
  image: {
    width: '90%',
    height: 300,
    resizeMode: 'contain'
  },
  pauseIcon: {
    width: 20,
    height: 40,
    resizeMode: 'contain'
  }
})
