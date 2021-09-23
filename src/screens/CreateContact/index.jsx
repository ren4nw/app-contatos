import React, { useEffect, useState } from 'react';
import { Alert, ScrollView, StyleSheet, View } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { v4 as uuidv4 } from 'uuid';
import UIText from '../../components/Text';
import UIButton from '../../components/UIButton';
import UITextField from '../../components/UITextField';
import { MaterialIcons } from '@expo/vector-icons';
import { useAppContext } from '../../contexts/appContext';

function CreateContact() {
  const [nome, setNome] = useState('');
  const [numero, setNumero] = useState('');

  const { buscarContato, criarContato, atualizarContato, deletarContato } = useAppContext();

  const navigation = useNavigation();

  const { params } = useRoute();

  const salvarContato = async () => {
    if (!nome || !numero) {
      Alert.alert('Erro', 'Preencha todos os campos!');
      return;
    }

    try {
      criarContato({ id: uuidv4(), nome, numero });

      Alert.alert('Sucesso', 'Dados salvo com sucesso!');

      navigation.navigate('Home');

    } catch (e) {
      Alert.alert('Erro', 'Erro ao salvar os dados');

      console.log(e);
    }
  };

  const preencherCampos = async () => {
    const contatoSelecionado = buscarContato(params?.numero);

    if (!contatoSelecionado) {
      Alert.alert('Erro', 'Contato não encontrado');
      
      navigation.navigate('Home');

      return;
    }

    setNome(contatoSelecionado?.nome);
    setNumero(contatoSelecionado?.numero);
  };

  const editarContato = async () => {
    atualizarContato(params?.numero, { nome, numero });

    navigation.navigate('Home');
  };

  const excluirContato = async () => {
    deletarContato(params?.numero);

    navigation.navigate('Home');
  };

  useEffect(() => {
    if (params?.editar) {
      preencherCampos();
    }
  }, []);

  return (
    <>
      <ScrollView style={styles.container}>
        <View style={styles.iconContainer}>
          <MaterialIcons name="person" style={styles.icon} />
        </View>
        <View style={styles.form}>
          <UITextField
            value={nome}
            changeText={setNome}
            placeholder="Nome"
          />
          <UITextField
            value={numero}
            changeText={setNumero}
            keyboardType="numeric"
            placeholder="Número"
          />
        </View>
      </ScrollView>
      <View style={styles.buttonContainer}>
        <UIButton style={{ marginBottom: 8 }} onPress={excluirContato} color="#eb1e36">
          <UIText color="#fff">Excluir</UIText>
        </UIButton>
        <UIButton onPress={params?.editar ? editarContato : salvarContato} color="#3e5af0">
          <UIText color="#fff">Salvar</UIText>
        </UIButton>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  iconContainer: {
    backgroundColor: '#273eb0',
    alignItems: 'center',
    padding: 8,
  },
  icon: {
    fontSize: 120,
    color: '#fff',
  },
  container: {
    flex: 1,
  },
  text: {
    fontSize: 23,
    color: '#333',
  },
  form: {
    flex: 1,
    padding: 14,
  },
  buttonContainer: {
    padding: 14,
  },
});

export default CreateContact;
