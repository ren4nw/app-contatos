import React from 'react';
import { StyleSheet, Text } from 'react-native';

function UIText({ style, children }) {
  return <Text style={[styles.text, style]}>{children}</Text>;
};

const styles = StyleSheet.create({
  text: {
    fontFamily: 'Roboto',
    fontSize: 22,
  },
});

export default UIText;

