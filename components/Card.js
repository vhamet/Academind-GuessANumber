import React from 'react';
import { View, StyleSheet } from 'react-native';

import Colors from '../constants/colors';

const Card = ({ children, style }) => (
  <View style={{ ...styles.card, ...style }}>{children}</View>
);

const styles = StyleSheet.create({
  card: {
    shadowColor: Colors.primary_1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 0,
    shadowOpacity: 0.26,
    backgroundColor: Colors.primary_5,
    elevation: 15,
    padding: 20,
    borderRadius: 10,
  },
});

export default Card;
