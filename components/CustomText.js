import React from 'react';
import { Text, StyleSheet } from 'react-native';

export const CUSTOM_TEXT_STYLES = {
  BODY: 0,
  TITLE: 1,
};

const CustomText = ({ type, style, children }) => (
  <Text
    style={{
      ...(type === CUSTOM_TEXT_STYLES.TITLE
        ? styles.titleText
        : styles.bodyText),
      ...style,
    }}
  >
    {children}
  </Text>
);

const styles = StyleSheet.create({
  bodyText: {
    fontFamily: 'open-sans',
  },
  titleText: {
    fontFamily: 'open-sans-bold',
  },
});

export default CustomText;
