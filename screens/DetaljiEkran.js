import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const DetaljiEkran = (props) => {
  return(
    <View>
      <Text>Ekran sa detaljima jedne lokacije</Text>
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

export default DetaljiEkran