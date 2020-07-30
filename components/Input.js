import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

import Colors from '../constants/colors';

const Input = props => (
  <TextInput {...props} style={{ ...styles.input, ...props.style }} />
);

const styles = StyleSheet.create({
  input: {
    height: 30,
    borderBottomColor: Colors.primary_2,
    borderBottomWidth: 1,
    marginVertical: 10,
  },
});

export default Input;
