import React, { useState } from 'react';
import { Alert, StyleSheet, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import UIText from '../../components/Text';
import UIButton from '../../components/UIButton';
import UITextField from '../../components/UITextField';

function CreateContact() {
  const [nome, setNome] = useState('');
  const [numero, setNumero] = useState('');

  const navigation = useNavigation();

  const salvarContato = async () => {
    try {
      let contatos = await AsyncStorage.getItem('contatos');
      contatos = JSON.parse(contatos);

      contatos.push({
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
        <UIText>Criar contato</UIText>
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
      <View>
        <UIButton onPress={salvarContato}>Salvar</UIButton>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 14,
  },
  form: {
    flex: 1,
  },
});

export default CreateContact;
