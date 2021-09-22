import React from 'react';
import { StyleSheet, Text } from 'react-native';

function UIText({ color = '#000', style, children }) {
  return <Text style={[styles.text, { color }, style]}>{children}</Text>;
};

const styles = StyleSheet.create({
  text: {
    fontFamily: 'Roboto',
    fontSize: 22,
  },
});

export default UIText;

