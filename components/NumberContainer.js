import React from 'react';
import { View, Text, StyleSheet, _Text } from 'react-native';

import Colors from '../constants/colors';

const NumberContainer = ({ children }) => (
  <View style={styles.container}>
    <Text style={styles.number}>{children}</Text>
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
    fontSize: 22
  },
});

export default NumberContainer;
