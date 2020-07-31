import React from 'react';
import { View, StyleSheet } from 'react-native';

import CustomText, { CUSTOM_TEXT_STYLES } from './CustomText';

import Colors from '../constants/colors';

const Header = ({ title }) => (
  <View style={styles.header}>
    <CustomText type={CUSTOM_TEXT_STYLES.TITLE} style={styles.headerTitle}>{title}</CustomText>
  </View>
);

const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: 90,
    backgroundColor: Colors.primary_2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerTitle: {
    color: 'white',
    fontSize: 18,
  },
});

export default Header;
