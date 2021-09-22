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
        keyExtractor={item => item.numero}
        renderItem={({ item }) => <ContactCard contact={item} />}
      />
    </View>
  );
}

export default Home;
