import {
  StyleSheet,
  Text,
  View,
  TextInput,
  KeyboardAvoidingView
} from 'react-native'
import React from 'react'
import { HeaderButtons, MButton } from '../../components'
import { COLORS } from '../../constants'

const ChooseWordPage = ({ navigation, route }) => {
  const { minutes } = route.params
  const [newWord, setNewWord] = React.useState('')

  const _WordButton = params => {
    const { text, long } = params
    return (
      <MButton
        containerStyle={{ width: long ? '49%' : '32%' }}
        text={text}
        onPress={() => {
          navigation.navigate('BeginChooseWord', {
            minutes: minutes,
            chosenWord: text
          })
        }}
      />
    )
  }

  return (
    <View style={{ alignItems: 'center' }}>
      <HeaderButtons
        navigation={navigation}
        onPressHelp={() => navigation.navigate('SquareInfo')}
      />
      <Text style={styles.label}>Preloaded</Text>
      <View style={styles.oneRow}>
        <_WordButton text='safe' />
        <_WordButton text='nurtured' />
        <_WordButton text='serenity' />
      </View>
      <View style={styles.oneRow}>
        <_WordButton text='namaste' />
        <_WordButton text='wabi-sabi' />
        <MButton
          containerStyle={{ width: '32%' }}
          text='seren-dipity'
          onPress={() => {
            navigation.navigate('BeginChooseWord', { word: 'serendipity' })
          }}
        />
      </View>

      <View style={styles.oneRow}>
        <_WordButton
          text='loving-
        kindness'
          long
        />
        <_WordButton
          text='warm-
          heartedness'
          long
        />
      </View>
      <Text style={styles.label}>My Own Words</Text>
      <View style={styles.oneRow}>
        <_WordButton text='Word' />
        <_WordButton text='Word' />
        <_WordButton text='Word' />
      </View>

      <KeyboardAvoidingView style={styles.inputBox}>
        <TextInput
          placeholder='Type your word'
          value={newWord}
          onChangeText={setNewWord}
          style={styles.inputText}
        />
      </KeyboardAvoidingView>
    </View>
  )
}

export default ChooseWordPage

const styles = StyleSheet.create({
  oneRow: {
    display: 'flex',
    width: '90%',
    marginBottom: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  inputBox: {
    borderWidth: 3,
    marginTop: 20,
    width: 300,
    padding: 20,
    borderRadius: 20,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  },
  inputText: {
    textAlign: 'center',
    fontSize: 20
  },
  label: {
    color: COLORS.primary_blue,
    fontSize: 30,
    marginVertical: 20
  }
})
