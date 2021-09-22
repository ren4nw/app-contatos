import React, { useEffect, useState } from 'react';
import { View, StyleSheet, TouchableOpacity, Alert, FlatList } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useIsFocused, useNavigation } from '@react-navigation/native';
import UIText from '../../components/Text';
import ContactCard from '../../components/ContactCard';

function Home() {
  const [contatos, setContatos] = useState([]);

  const navigation = useNavigation();

  const isFocused = useIsFocused();

  const getDados = async () => {
    try {
      const dados = await AsyncStorage.getItem('contatos');

      setContatos(JSON.parse(dados));
    } catch (e) {
      console.log(e);

      Alert.alert('Erro', 'Erro ao buscar contatos');
    }
  };

  useEffect(() => {
    if (isFocused) {
      getDados();
    }
  }, [isFocused]);

  return (
    <View>
      <FlatList
        data={contatos}
        keyExtractor={item => item.id || item.numero}
        renderItem={({ item }) => <ContactCard contato={item} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    fontFamily: 'Roboto',
    fontSize: 22,
  },
  item: {
    borderBottomWidth: 1,
  }
})

export default Home;
