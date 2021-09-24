import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import UIText from '../Text';

function ContactCard({ contatoSelecionado, contato }) {

  return (
    <TouchableOpacity style={styles.container} onPress={contatoSelecionado}>
      <View>
        <MaterialIcons name="person" style={styles.icon} />
      </View>
      <View style={styles.contactInfo}>
        <UIText style={styles.nome}>{contato.nome}</UIText>
        <UIText style={styles.numero}>{contato.numero}</UIText>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 4,
    borderBottomWidth: StyleSheet.hairlineWidth,
    marginBottom: 4,
  },
  icon: {
    fontSize: 80,
    color: '#283161',
  },
  contactInfo: {
    borderLeftWidth: StyleSheet.hairlineWidth,
    paddingLeft: 12,
  },
  nome: {
    fontSize: 21,
    fontWeight: 'bold',
  },
  numero: {
    color: '#808080',
    fontSize: 20,
  },
});

export default ContactCard;
