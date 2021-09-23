import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';

function UITextField({ value, changeText, keyboardType = 'default', placeholder = '' }) {
  return (
    <View style={styles.container}>
      <TextInput
        value={value}
        onChangeText={changeText}
        keyboardType={keyboardType}
        placeholder={placeholder}
        style={styles.input}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 8,
  },
  input: {
    borderBottomWidth: StyleSheet.hairlineWidth,
    paddingHorizontal: 8,
    paddingVertical: 12,
    fontFamily: 'Roboto',
    fontSize: 20,
    color: '#333',
  },
})

export default UITextField;
