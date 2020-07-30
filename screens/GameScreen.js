import React, { useState, useRef, useEffect } from 'react';
import { View, Text, Button, Alert, StyleSheet } from 'react-native';

import NumberContainer from '../components/NumberContainer';
import Card from '../components/Card';

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
  const rounds = useRef(0);

  useEffect(() => {
    if (currentGuess === userNumber) {
        onEndGame(rounds.current);
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
    rounds.current++;
    setCurrentGuess(guessNumber(min.current, currentGuess, currentGuess));
  };

  const guessHigher = () => {
    if (currentGuess >= userNumber) {
      exposeLiar();
      return;
    }

    min.current = currentGuess;
    rounds.current++;
    setCurrentGuess(guessNumber(currentGuess, max.current, currentGuess));
  };

  return (
    <View style={styles.screen}>
      <Card style={styles.inputContainer}>
        <Text style={styles.text}>Opponent's guess</Text>
        <NumberContainer>{currentGuess}</NumberContainer>
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="LOWER" color="#6C5B7B" onPress={guessLower} />
          </View>
          <View style={styles.button}>
            <Button title="HIGER" color="#6C5B7B" onPress={guessHigher} />
          </View>
        </View>
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
});

export default GameScreen;
