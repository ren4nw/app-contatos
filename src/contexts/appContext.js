import React, { useContext, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Alert } from 'react-native';

export const AppContext = React.createContext({});

export default function AppProvider({ children }) {
  const [contatos, setContatos] = useState([]);

  const buscarContato = numero => {
    const contato = contatos.find(item => item.numero === numero);

    return contato;
  };

  const modificarContatos = async contatos => {
    await AsyncStorage.setItem('contatos', JSON.stringify(contatos));
  };

  const atualizarContatos = async () => {
    try {
      let dados = await AsyncStorage.getItem('contatos');
      dados = !dados ? [] : JSON.parse(dados);

      setContatos(dados);
    } catch (e) {
      Alert.alert('Erro', 'Erro ao buscar contatos');
    }
  };

  const criarContato = async contato => {
    contatos.push(contato);

    modificarContatos(contatos);
  };

  const atualizarContato = async (numero, contato) => {
    const contatoIndex = contatos.findIndex(item => item.numero === numero);

    contatos.splice(contatoIndex, 1, { nome: contato.nome, numero: contato.numero });

    modificarContatos(contatos);
  };

  const deletarContato = async numero => {
    const contatoIndex = contatos.findIndex(item => item.numero === numero);

    contatos.splice(contatoIndex, 1);

    modificarContatos(contatos);
  };

  const context = {
    contatos,
    buscarContato,
    criarContato,
    atualizarContatos,
    atualizarContato,
    deletarContato,
  }

  return (
    <AppContext.Provider value={context}>
      {children}
    </AppContext.Provider>
  )
}

export function useAppContext() {
  return useContext(AppContext);
}

