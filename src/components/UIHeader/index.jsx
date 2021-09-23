import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import UIText from '../UIText';

function UIHeader({ headerInfo, rightButton = null }) {

  return (
    <View style={styles.header}>
      <View style={styles.left}>
        {headerInfo?.navigation?.canGoBack() && (
          <TouchableOpacity onPress={headerInfo?.navigation?.goBack}>
            <MaterialIcons name="arrow-back" style={styles.icon} />
          </TouchableOpacity>
        )}
        <UIText style={styles.text}>{headerInfo.options.title}</UIText>
      </View>
      {rightButton && (
        <View style={styles.right}>
          {rightButton(headerInfo.navigation.navigate)}
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#273eb0',
    paddingHorizontal: 12,
    paddingVertical: 14,
  },
  left: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    color: '#fff',
  },
  icon: {
    fontSize: 23,
    color: '#fff',
    marginRight: 12,
  },
});

export default UIHeader;
