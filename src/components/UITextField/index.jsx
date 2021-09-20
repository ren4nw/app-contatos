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
    marginBottom: 8,
  },
  input: {
    borderWidth: 1,
    paddingHorizontal: 8,
    paddingVertical: 4,
    fontFamily: 'Roboto',
    fontSize: 18,
  },
})

export default UITextField;
