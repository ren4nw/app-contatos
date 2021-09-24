import React, { useEffect, useState } from 'react';
import { useIsFocused, useNavigation } from '@react-navigation/native';
import { View } from 'react-native';
import { useAppContext } from '../../../contexts/appContext';
import { FlatList } from 'react-native';
import ContactCard from '../../../components/ContactCard';

function Favoritos() {
  const [favoritos, setFavoritos] = useState([]);

  const { contatos } = useAppContext();

  const navigation = useNavigation();

  const isFocused = useIsFocused();

  const contatoSelecionado = numero => () => {
    navigation.navigate('CreateContact', { editar: true, numero });
  };

  const getContatos = () => {
    setFavoritos(contatos.filter(item => item.favorito));
  };

  useEffect(() => {
    if (isFocused) {
      getContatos();
    }
  }, [isFocused]);

  return (
    <View>
      <FlatList
        data={favoritos}
        keyExtractor={item => item.id || item.numero}
        renderItem={({ item }) => <ContactCard contatoSelecionado={contatoSelecionado(item.numero)} contato={item} />}
      />
    </View>
  );
}

export default Favoritos;