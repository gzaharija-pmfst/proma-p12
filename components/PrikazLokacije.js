import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import Boje from '../constants/Boje';

const PrikazLokacije = props => {
  return (
    <TouchableOpacity onPress={props.odabir} style={stil.lokacija}>
      <Image style={stil.slika} source={{ uri: props.slika }} />
      <View style={stil.okvirInfo}>
        <Text style={stil.naslov}>{props.naziv}</Text>
        <Text style={stil.adresa}>{props.adresa}</Text>
      </View>
    </TouchableOpacity>
  );
};

const stil = StyleSheet.create({
  lokacija: {
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
    paddingVertical: 15,
    paddingHorizontal: 30,
    flexDirection: 'row',
    alignItems: 'center'
  },
  slika: {
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: '#ccc',
    borderColor: Boje.glavna,
    borderWidth: 1
  },
  okvirInfo: {
    marginLeft: 25,
    width: 250,
    justifyContent: 'center',
    alignItems: 'flex-start'
  },
  naslov: {
    color: 'black',
    fontSize: 18,
    marginBottom: 5
  },
  adresa: {
    color: '#666',
    fontSize: 16
  }
});

export default PrikazLokacije;
