import React, { useContext, useEffect } from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import { useIsFocused, useNavigation } from '@react-navigation/native';
import ContactCard from '../../components/ContactCard';
import { AppContext } from '../../contexts/appContext';

function Home() {
  const { atualizarContatos, contatos } = useContext(AppContext);

  const navigation = useNavigation();

  const isFocused = useIsFocused();

  const contatoSelecionado = numero => () => {
    navigation.navigate('CreateContact', { editar: true, numero });
  };

  useEffect(() => {
    if (isFocused) {
      atualizarContatos();
    }
  }, [isFocused]);

  return (
    <View>
      <FlatList
        data={contatos}
        keyExtractor={item => item.id || item.numero}
        renderItem={({ item }) => <ContactCard contatoSelecionado={contatoSelecionado(item.numero)} contato={item} />}
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
