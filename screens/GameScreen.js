import React, { useState, useRef, useEffect } from 'react';
import { View, ScrollView, Alert, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import NumberContainer from '../components/NumberContainer';
import Card from '../components/Card';
import CustomText, { CUSTOM_TEXT_STYLES } from '../components/CustomText';
import CustomButton from '../components/CustomButton';

import Colors from '../constants/colors';

const guessNumber = (min, max, exclude) => {
  min = Math.ceil(min);
  max = Math.floor(max);

  const rand = Math.floor(Math.random() * (max - min)) + min;
  if (rand === exclude) {
    return guessNumber(min, max, exclude);
  }

  return rand;
};

const GameScreen = ({ userNumber, onEndGame }) => {
  const [currentGuess, setCurrentGuess] = useState(
    guessNumber(1, 100, userNumber)
  );
  const min = useRef(1);
  const max = useRef(100);
  const pastGuesses = useRef([]);

  useEffect(() => {
    if (currentGuess === userNumber) {
      onEndGame(pastGuesses.current.length);
    }
  }, [currentGuess, userNumber, onEndGame]);

  const exposeLiar = () => {
    Alert.alert('LIAR', 'You weasely little liar', [
      { text: 'OK', style: 'destructive' },
    ]);
  };

  const guessLower = () => {
    if (currentGuess <= userNumber) {
      exposeLiar();
      return;
    }

    max.current = currentGuess;
    pastGuesses.current = [currentGuess, ...pastGuesses.current];
    setCurrentGuess(guessNumber(min.current, currentGuess, currentGuess));
  };

  const guessHigher = () => {
    if (currentGuess >= userNumber) {
      exposeLiar();
      return;
    }

    min.current = currentGuess + 1;
    pastGuesses.current = [currentGuess, ...pastGuesses.current];
    setCurrentGuess(guessNumber(currentGuess, max.current, currentGuess));
  };

  return (
    <View style={styles.screen}>
      <Card style={styles.inputContainer}>
        <CustomText style={styles.text}>Opponent's guess</CustomText>
        <NumberContainer>{currentGuess}</NumberContainer>
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <CustomButton onPress={guessLower}>
              <Ionicons name="md-remove" size={24} color="white" />
            </CustomButton>
          </View>
          <View style={styles.button}>
            <CustomButton onPress={guessHigher}>
              <Ionicons name="md-add" size={24} color="white" />
            </CustomButton>
          </View>
        </View>
      </Card>
      <Card style={styles.pastGuessesContainer}>
        <CustomText style={styles.text}>Past guesses :</CustomText>
        <ScrollView>
          {pastGuesses.current.map(guess => (
            <View key={guess} style={styles.pastGuess}>
              <CustomText style={styles.pastGuessText}>{guess}</CustomText>
            </View>
          ))}
        </ScrollView>
      </Card>
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
  text: {
    color: Colors.primary_2,
  },
  pastGuessesContainer: {
    width: 300,
    maxWidth: '80%',
    flex: 1,
    alignItems: 'center',
    marginTop: 10,
  },
  pastGuess: {
    backgroundColor: Colors.primary_2,
    marginTop: 10,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 50,
  },
  pastGuessText: {
    color: 'white',
    fontSize: 20,
  },
});

export default GameScreen;
