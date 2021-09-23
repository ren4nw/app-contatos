import React, { useEffect } from 'react';
import { View, FlatList } from 'react-native';
import { useIsFocused, useNavigation } from '@react-navigation/native';
import ContactCard from '../../components/ContactCard';
import { useAppContext } from '../../contexts/app-context';

function Home() {
  const { atualizarContatos, contatos } = useAppContext();

  const navigation = useNavigation();

  const isFocused = useIsFocused();

  const contatoSelecionado = (numero) => () => {
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
        renderItem={({ item }) => (
          <ContactCard
            editar
            contatoSelecionado={contatoSelecionado(item.numero)}
            contato={item}
          />
        )}
      />
    </View>
  );
}

export default Home;
