import React, { useState, useEffect, useCallback } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import MapView, { Marker } from "react-native-maps";
import Boje from "../constants/Boje";

const MapaEkran = (props) => {
  const [lokacija, postaviLokaciju] = useState();
  const dodirMapa = (event) => {
    postaviLokaciju({
      lat: event.nativeEvent.coordinate.latitude,
      lng: event.nativeEvent.coordinate.longitude,
    });
    console.log(event.nativeEvent);
  };

  const spremiOdabraniMarker = useCallback(() => {
    if (!lokacija) {
      // Poruka
      return
    }
    props.navigation.navigate('Nova', {
      odabranaLokacija: lokacija
    });
  }, [lokacija]);

  useEffect(() => {
    props.navigation.setParams({ spremiMarker: spremiOdabraniMarker });
  }, [spremiOdabraniMarker]);

  let markerLokacija;
  if (lokacija) {
    markerLokacija = {
      latitude: lokacija.lat,
      longitude: lokacija.lng,
    };
  }
  const regijaMape = {
    latitude: 43.51,
    longitude: 16.45,
    latitudeDelta: 0.15,
    longitudeDelta: 0.05,
  };
  return (
    <MapView style={{ flex: 1 }} region={regijaMape} onPress={dodirMapa}>
      {markerLokacija && (
        <Marker title="Odabrana lokacija" coordinate={markerLokacija}></Marker>
      )}
    </MapView>
  );
};

MapaEkran.navigationOptions = (navData) => {
  const spremi = navData.navigation.getParam("spremiMarker");
  return {
    headerRight: () => {
      return (
        <TouchableOpacity style={stil.menuOkvir} onPress={spremi}>
          <Text style={stil.menuSpremi}>SPREMI</Text>
        </TouchableOpacity>
      );
    },
  };
};

const stil = StyleSheet.create({
  menuOkvir: {
    marginHorizontal: 20,
  },
  menuSpremi: {
    fontSize: 16,
    color: "white",
  },
});

export default MapaEkran;
