import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import UIText from '../../components/Text';

function Home() {
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.navigate('CreateContact');
  };

  return (
    <View>
      <UIText>Home</UIText>

      <TouchableOpacity onPress={handlePress}>
        <UIText>Criar contato</UIText>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    fontFamily: 'Roboto',
    fontSize: 22,
  }
})

export default Home;
