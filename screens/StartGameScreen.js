import React, { useState } from 'react';
import { View, Text, StyleSheet, Button, Alert } from 'react-native';

import Card from '../components/Card';
import Input from '../components/Input';
import NumberContainer from '../components/NumberContainer';

import Colors from '../constants/colors';

const StartGameScreen = ({ selectedNumber, setSelectedNumber, startGame }) => {
  const [enteredValue, setEnteredValue] = useState('');
  const [confirmed, setConfirmed] = useState(false);

  const numberInputHandler = inputText => {
    setEnteredValue(inputText.replace(/[^0-9]/g, ''));
  };

  const resetInputHandler = () => {
    setEnteredValue('');
    setConfirmed(false);
  };

  const confirmInputHandler = () => {
    const chosenNumber = parseInt(enteredValue);
    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert('Invalid number !', 'Number has to be between 1 and 99', [
        { text: 'OK', style: 'destructive', onPress: resetInputHandler },
      ]);
      return;
    }

    setConfirmed(true);
    setSelectedNumber(chosenNumber);
    setEnteredValue('');
  };

  let confirmedOutput;
  if (confirmed) {
    confirmedOutput = (
      <Card style={styles.startContainer}>
        <Text style={styles.startText}>You chose</Text>
        <NumberContainer>{selectedNumber}</NumberContainer>
        <Button
          title="START THE GAME"
          color="#6C5B7B"
          onPress={() => startGame(selectedNumber)}
        />
      </Card>
    );
  }

  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Start a New Game !</Text>
      <Card style={styles.inputContainer}>
        <Text style={styles.selectText}>Select a Number</Text>
        <Input
          style={styles.input}
          blurOnSubmit
          autoCapitalize="none"
          autoCorrect={false}
          keyboardType="number-pad"
          maxLength={2}
          value={enteredValue}
          onChangeText={numberInputHandler}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="Reset" color="#6C5B7B" onPress={resetInputHandler} />
          </View>
          <View style={styles.button}>
            <Button
              title="Confirm"
              color="#6C5B7B"
              onPress={confirmInputHandler}
            />
          </View>
        </View>
      </Card>
      {confirmed && confirmedOutput}
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: 'center',
    backgroundColor: Colors.primary_4,
  },
  title: {
    fontSize: 20,
    marginVertical: 10,
    color: Colors.primary_2,
    fontFamily: 'open-sans-bold',
  },
  inputContainer: {
    width: 300,
    maxWidth: '80%',
    alignItems: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
  },
  button: {
    width: '45%',
  },
  input: {
    width: 50,
    textAlign: 'center',
    color: Colors.primary_2,
  },
  startContainer: {
    width: 300,
    maxWidth: '80%',
    marginTop: 20,
    alignItems: 'center',
  },
  startText: {
    textAlign: 'center',
    color: Colors.primary_2,
  },
  selectText: {
    color: Colors.primary_2,
  },
});

export default StartGameScreen;
