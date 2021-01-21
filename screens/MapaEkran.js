import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import MapView, { Marker } from "react-native-maps";

const MapaEkran = (props) => {
  const [lokacija, postaviLokaciju] = useState();
  const dodirMapa = (event) => {
    postaviLokaciju({
      lat: event.nativeEvent.coordinate.latitude,
      lng: event.nativeEvent.coordinate.longitude,
    });
    console.log(event.nativeEvent);
  };

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
      { markerLokacija && <Marker title="Odabrana lokacija" coordinate={markerLokacija}></Marker>}
    </MapView>
  );
};

const stil = StyleSheet.create({
  mapa: {},
});

export default MapaEkran;
