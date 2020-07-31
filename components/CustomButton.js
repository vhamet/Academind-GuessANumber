import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';

import CustomText, { CUSTOM_TEXT_STYLES } from './CustomText';

import Colors from '../constants/colors';

const CustomButton = ({ title, onPress, children }) => (
  <TouchableOpacity onPress={onPress} activeOpacity={0.6}>
    <View style={styles.button}>
      <CustomText style={styles.text}>
        {title}
        {children}
      </CustomText>
    </View>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.primary_2,
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 20,
  },
  text: { color: 'white', textAlign: 'center' },
});

export default CustomButton;
