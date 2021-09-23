import React, { useEffect, useState } from 'react';
import { Alert, ScrollView, StyleSheet, View } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { v4 as uuidv4 } from 'uuid';
import UIText from '../../components/UIText';
import UIButton from '../../components/UIButton';
import UITextField from '../../components/UITextField';
import { MaterialIcons } from '@expo/vector-icons';

function CreateContact() {
  const [nome, setNome] = useState('');
  const [numero, setNumero] = useState('');

  const navigation = useNavigation();

  const { params } = useRoute();

  const salvarContato = async () => {
    if (!nome || !numero) {
      Alert.alert('Erro', 'Preencha todos os campos!');
      return;
    }

    try {
      let contatos = await AsyncStorage.getItem('contatos');
      contatos = !contatos ? [] : JSON.parse(contatos);

      contatos.push({
        id: uuidv4(),
        nome,
        numero,
      });

      await AsyncStorage.setItem('contatos', JSON.stringify(contatos));

      navigation.navigate('Home');

    } catch (e) {
      Alert.alert('Erro', 'Erro ao salvar os dados');

      console.log(e);
    }
  };

  const editarContato = async () => {
    let contatos = await AsyncStorage.getItem('contatos');
    contatos = !contatos ? [] : JSON.parse(contatos);

    const contatoIndex = contatos.findIndex(item => item.numero === params?.numero);

    contatos.splice(contatoIndex, 1, { nome, numero });

    await AsyncStorage.setItem('contatos', JSON.stringify(contatos));

    navigation.navigate('Home');
  };

  const excluirContato = async () => {
    let contatos = await AsyncStorage.getItem('contatos');
    contatos = !contatos ? [] : JSON.parse(contatos);

    const contatoIndex = contatos.findIndex(item => item.numero === params?.numero);

    contatos.splice(contatoIndex, 1);

    await AsyncStorage.setItem('contatos', JSON.stringify(contatos));

    navigation.navigate('Home');
  };

  const preencherCampos = async () => {
    console.log('preencher');

    try {
      let contatos = await AsyncStorage.getItem('contatos');
      contatos = !contatos ? [] : JSON.parse(contatos);

      const contatoSelecionado = contatos.find(item => item.numero === params.numero);
      
      if (!contatoSelecionado) {
        Alert.alert('Erro', 'Contato não encontrado');

        navigation.navigate('Home');
        return;
      }

      setNome(contatoSelecionado?.nome);
      setNumero(contatoSelecionado?.numero);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    if (params?.editar) {
      preencherCampos();
    }
  }, []);

  return (
    <>
      <ScrollView style={styles.container}>
        <View style={styles.userContainer}>
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
        {params?.editar && (
          <UIButton style={{ marginBottom: 8 }} onPress={excluirContato} color="#eb1e36">
            <UIText color="#fff">Excluir</UIText>
          </UIButton>
        )}
        <UIButton onPress={params?.editar ? editarContato : salvarContato} color="#273eb0" >
          <UIText color="#fff">Salvar</UIText>
        </UIButton>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  userContainer: {
    alignItems: 'center',
    backgroundColor: '#273eb0',
    padding: 4,
  },
  icon: {
    fontSize: 140,
    color: '#fff',
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
