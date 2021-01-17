import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const MapaEkran = (props) => {
  return(
    <View>
      <Text>Ekran za prikaz mape</Text>
    </View>
  )
}

const stil = StyleSheet.create({
  ekran: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default MapaEkran