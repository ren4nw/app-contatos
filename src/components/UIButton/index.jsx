import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import UIText from '../Text';

function UIButton({ color = 'transparent', onPress, children }) {

  return (
    <TouchableOpacity style={[styles.container, { backgroundColor: color }]} onPress={onPress}>
      {children}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 8,
    alignItems: 'center',
    borderRadius: 8,
  },
})

export default UIButton;
