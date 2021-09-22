import React, { useState } from 'react';
import { Alert, StyleSheet, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { v4 as uuidv4 } from 'uuid';
import UIText from '../../components/Text';
import UIButton from '../../components/UIButton';
import UITextField from '../../components/UITextField';

function CreateContact() {
  const [nome, setNome] = useState('');
  const [numero, setNumero] = useState('');

  const navigation = useNavigation();

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

      Alert.alert('Sucesso', 'Dados salvo com sucesso!');

      navigation.navigate('Home');

    } catch (e) {
      Alert.alert('Erro', 'Erro ao salvar os dados');

      console.log(e);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.form}>
        <UIText style={styles.text}>Criar contato</UIText>
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
      <UIButton onPress={salvarContato} color="#3e5af0" >
        <UIText color="#fff">Salvar</UIText>
      </UIButton>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 14,
  },
  text: {
    fontSize: 23,
    color: '#333',
  },
  form: {
    flex: 1,
  },
});

export default CreateContact;
