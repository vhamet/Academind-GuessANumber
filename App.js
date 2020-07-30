import React, { useState } from 'react';
import {
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard,
  View,
} from 'react-native';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';

import Header from './components/Header';
import StartGameScreen from './screens/StartGameScreen';
import GameScreen from './screens/GameScreen';
import GameOver from './screens/GameOver';

const fetchFonts = () => {
  return Font.loadAsync({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
  });
};

export default function App() {
  const [userNumber, setUserNumber] = useState();
  const [isGameStarted, setIsGameStarted] = useState(false);
  const [guessRounds, setGuessRounds] = useState();

  const [dataLoaded, setDataLoaded] = useState(false);
  if (!dataLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setDataLoaded(true)}
      />
    );
  }

  const startGameHandler = () => setIsGameStarted(true);

  const endGameHandler = numberOfRounds => {
    setIsGameStarted(false);
    setGuessRounds(numberOfRounds);
  };

  const restartGameHandler = () => setGuessRounds(0);

  let screen = (
    <StartGameScreen
      selectedNumber={userNumber}
      setSelectedNumber={setUserNumber}
      startGame={startGameHandler}
    />
  );
  if (isGameStarted) {
    screen = <GameScreen userNumber={userNumber} onEndGame={endGameHandler} />;
  } else if (guessRounds) {
    screen = (
      <GameOver
        userNumber={userNumber}
        numberOfRounds={guessRounds}
        onRestart={restartGameHandler}
      />
    );
  }

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.screen}>
        <Header title="GUESS A NUMBER" />
        {screen}
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});
