import React, { useEffect, useState } from 'react';
import { FlatList, View } from 'react-native';
import { useIsFocused, useNavigation } from '@react-navigation/native';
import ContactCard from '../../../components/ContactCard';
import { useAppContext } from '../../../contexts/appContext';

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
        keyExtrator={item => item.id || item.numero}
        renderItem={({ item }) => <ContactCard contatoSelecionado={contatoSelecionado(item.numero)} contato={item} />}
      />
    </View>
  )
}

export default Favoritos;
