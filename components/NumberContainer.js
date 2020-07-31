import React from 'react';
import { View, StyleSheet, _Text } from 'react-native';

import CustomText, { CUSTOM_TEXT_STYLES } from './CustomText';

import Colors from '../constants/colors';

const NumberContainer = ({ children }) => (
  <View style={styles.container}>
    <CustomText type={CUSTOM_TEXT_STYLES.TITLE} style={styles.number}>
      {children}
    </CustomText>
  </View>
);

const styles = StyleSheet.create({
  container: {
    borderWidth: 2,
    borderColor: Colors.primary_2,
    padding: 10,
    borderRadius: 10,
    marginVertical: 10,
    alignItems: 'center',
  },
  number: {
    color: Colors.primary_2,
    fontSize: 22,
  },
});

export default NumberContainer;
