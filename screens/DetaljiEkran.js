import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const DetaljiEkran = (props) => {
  const idLok = props.navigation.getParam('idLokacije')
  return(
    <View>
      <Text>Ekran sa detaljima jedne lokacije</Text>
      <Text>ID lokacije: {idLok}</Text>
    </View>
  )
}

DetaljiEkran.navigationOptions = (navData) =>{
  const naziv = navData.navigation.getParam('nazivLokacije')
  return {
    headerTitle: naziv
  }
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