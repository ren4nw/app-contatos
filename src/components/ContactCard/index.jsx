import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import UIText from '../Text';

function ContactCard({ contact }) {
  return (
    <TouchableOpacity style={styles.container}>
      <View>
        <MaterialIcons name="person" style={styles.icon} />
      </View>
      <View style={styles.contactInfo}>
        <UIText style={styles.nome}>{contact?.nome}</UIText>
        <UIText style={styles.numero}>{contact?.numero}</UIText>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 4,
    borderBottomWidth: StyleSheet.hairlineWidth,
    alignItems: 'center',
    marginBottom: 4,
  },
  icon: {
    fontSize: 82,
    color: '#283161',
  },
  contactInfo: {
    borderLeftWidth: StyleSheet.hairlineWidth,
    paddingLeft: 8,
  },
  nome: {
    fontSize: 23,
    fontWeight: 'bold',
  },
  numero: {
    color: '#808080',
    fontSize: 18,
  },
});


export default ContactCard;

