import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import UIText from '../Text';

function UIButton({ onPress, children }) {

  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <UIText>{children}</UIText>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    padding: 8,
    alignItems: 'center',
  },
})

export default UIButton;
