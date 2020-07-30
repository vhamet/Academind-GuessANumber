import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

import NumberContainer from '../components/NumberContainer';
import Card from '../components/Card';

import Colors from '../constants/colors';

const GameOver = ({ userNumber, numberOfRounds, onRestart }) => (
  <View style={styles.screen}>
    <Card style={styles.inputContainer}>
      <Text style={styles.text}>GAMER OVER !</Text>
      <Text style={styles.text}>Number was {userNumber}</Text>
      <Text style={styles.text}>Number of rounds</Text>
      <NumberContainer>{numberOfRounds}</NumberContainer>
      <View style={styles.buttonContainer}>
        <View style={styles.button}>
          <Button title="RESTART" color="#6C5B7B" onPress={onRestart} />
        </View>
      </View>
    </Card>
  </View>
);

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
    justifyContent: 'center',
    paddingHorizontal: 15,
  },
  button: {
    width: '45%',
  },
  text: {
    color: Colors.primary_2,
    textAlign: 'center',
  },
});

export default GameOver;
