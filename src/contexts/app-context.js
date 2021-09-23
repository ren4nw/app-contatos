import React, { useContext, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Alert } from 'react-native';

const AppContext = React.createContext();

export default function AppProvider({ children }) {
  const [contatos, setContatos] = useState();

  const atualizarContatos = async () => {
    try {
      let dados = await AsyncStorage.getItem('contatos');
      dados = !dados ? [] : JSON.parse(dados);

      setContatos(dados);
    } catch (e) {
      console.log(e);

      Alert.alert('Erro', 'Erro ao buscar contatos');
    }
  };

  const buscarContato = numero => {
    const contato = contatos.find(item => item.numero === numero);

    return contato;
  };

  const adicionarContato = async contato => {
    await AsyncStorage.setItem('contatos', JSON.stringify([
      ...contatos,
      contato,
    ]));
  };

  const atualizarContato = async (numero, contato) => {
    const contatoIndex = contatos.findIndex(item => item.numero === numero);

    contatos.splice(contatoIndex, 1, contato);

    await AsyncStorage.setItem('contatos', JSON.stringify(contatos));
  };

  const deletarContato = async numero => {
    const contatoIndex = contatos.findIndex(item => item.numero === numero);

    contatos.splice(contatoIndex, 1);

    await AsyncStorage.setItem('contatos', JSON.stringify(contatos));
  };

  const context = {
    contatos,
    atualizarContatos,
    buscarContato,
    adicionarContato,
    atualizarContato,
    deletarContato,
  };

  return (
    <AppContext.Provider value={context}>
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}
