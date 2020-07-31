import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

import NumberContainer from '../components/NumberContainer';
import Card from '../components/Card';
import CustomText, { CUSTOM_TEXT_STYLES } from '../components/CustomText';
import CustomButton from '../components/CustomButton';

import Colors from '../constants/colors';

const GameOver = ({ userNumber, numberOfRounds, onRestart }) => (
  <View style={styles.screen}>
    <Card style={styles.inputContainer}>
      <CustomText type={CUSTOM_TEXT_STYLES.TITLE} style={styles.text}>
        GAMER OVER !
      </CustomText>
      <View style={styles.imageContainer}>
        <Image
          source={require('../assets/success.png')}
          style={styles.image}
          resizeMode="cover"
        />
      </View>

      <CustomText style={styles.text}>
        Number was <CustomText type={CUSTOM_TEXT_STYLES.TITLE}>{userNumber}</CustomText>
      </CustomText>
      <CustomText style={styles.text}>
        Number of rounds
      </CustomText>
      <NumberContainer>{numberOfRounds}</NumberContainer>
      <View style={styles.buttonContainer}>
        <View style={styles.button}>
          <CustomButton title="RESTART" onPress={onRestart} />
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
    justifyContent: 'center',
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
    width: '50%',
  },
  text: {
    color: Colors.primary_2,
    textAlign: 'center',
  },
  imageContainer: {
    height: 150,
    width: 150,
    marginVertical: 10,
    borderRadius: 75,
    borderColor: Colors.primary_2,
    borderWidth: 1,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
  },
});

export default GameOver;
