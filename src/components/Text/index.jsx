import React from 'react';
import { StyleSheet, Text } from 'react-native';

function UIText({ children }) {
  return <Text style={styles.text}>{children}</Text>;
};

const styles = StyleSheet.create({
  text: {
    fontFamily: 'Roboto',
    fontSize: 22,
  },
});

export default UIText;

