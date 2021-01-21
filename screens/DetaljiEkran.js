import React from "react";
import { StyleSheet, Text, View, ScrollView, Image } from "react-native";
import PrikazMape from "../components/PrikazMape";
import { useSelector } from "react-redux";
import Boje from "../constants/Boje";

const DetaljiEkran = (props) => {
  const idLok = props.navigation.getParam("idLokacije");
  const odabrani = useSelector((state) =>
    state.lokacije.lokacije.find((l) => l.id === idLok)
  );
  return (
    <ScrollView contentContainerStyle={stil.ekran}>
      <Image source={{ uri: odabrani.uriSlike }} style={stil.slika} />
      <View style={stil.lokacijaOkvir}>
        <View style={stil.adresaOkvir}>
          <Text style={stil.adresa}>{odabrani.adresa}</Text>
        </View>
        <PrikazMape lokacija={{ lat: odabrani.lat, lng: odabrani.lng }} style={stil.prikaz} />
      </View>
    </ScrollView>
  );
};

DetaljiEkran.navigationOptions = (navData) => {
  const naziv = navData.navigation.getParam("nazivLokacije");
  return {
    headerTitle: naziv,
  };
};

const stil = StyleSheet.create({
  ekran: {
    flex: 1,
    alignItems: "center",
  },
  prikaz: {
    width: '100%',
    maxWidth: 350,
    height: 300,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  adresa: {
    color: Boje.glavna,
    textAlign: "center"
  },
  adresaOkvir: {
    padding: 20
  },
  lokacijaOkvir:{
    marginVertical: 20,
    width: '90%',
    maxWidth: 350,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
    backgroundColor: 'white',
    borderRadius: 10
  },
  slika:{
    height: '35%',
    minHeight: 300,
    width: '100%',
    backgroundColor: '#ccc'
  }
});

export default DetaljiEkran;
