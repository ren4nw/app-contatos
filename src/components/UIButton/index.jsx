import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';

function UIButton({ color = 'transparent', style = {}, onPress, children }) {

  return (
    <TouchableOpacity style={[styles.container, { backgroundColor: color }, style]} onPress={onPress}>
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
