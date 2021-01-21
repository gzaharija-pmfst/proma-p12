import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  ActivityIndicator,
  Alert,
} from "react-native";
import * as Location from "expo-location";
import * as Permissions from "expo-permissions";

import Boje from "../constants/Boje";
import PrikazMape from "../components/PrikazMape";

const OdabirLokacije = (props) => {
  const [ucitavanje, postaviUcitavanje] = useState(false);
  const [koordinate, postaviKoordinate] = useState();

  const dozvoliPristup = async () => {
    const odobrenje = await Permissions.askAsync(Permissions.LOCATION);
    if (odobrenje.status !== "granted") {
      Alert.alert(
        "Nedozvoljen pristup",
        "Morate odobriti aplikaciji pristup lokaciji kako bi mogli koristiti sve funkcionalnosti",
        [{ text: "OK" }]
      );
      return false;
    }
    return true;
  };

  const dohvatiLokaciju = async () => {
    const pristup = await dozvoliPristup();
    if (!pristup) {
      return;
    }
    try {
      postaviUcitavanje(true);
      const polozaj = await Location.getCurrentPositionAsync({
        timeout: 5000,
      });
      console.log(polozaj);
      postaviKoordinate({
        lat: polozaj.coords.latitude,
        lng: polozaj.coords.longitude,
      });
    } catch (err) {
      console.log(err);
      Alert.alert("Nije moguće dohvatiti lokaciju", "Pokušajte ponovno", [
        { text: "OK" },
      ]);
    }
    postaviUcitavanje(false);
  };
  const odaberiLokaciju = () =>{
    props.navigation.navigate('Mapa')
  }
  return (
    <View style={stil.glavniOkvir}>
      <PrikazMape lokacija={koordinate} style={stil.prikazMape}>
        {ucitavanje ? (
          <ActivityIndicator size="large" color={Boje.glavna} />
        ) : (
          <Text>Trenutno nema dohvaćene lokacije!</Text>
        )}
      </PrikazMape>
      <View style={stil.akcije}>
        <Button
          title="Dohvati lokaciju"
          color={Boje.glavna}
          onPress={dohvatiLokaciju}
        />
        <Button
          title="Odaberi lokaciju"
          color={Boje.glavna}
          onPress={odaberiLokaciju}
        />
      </View>
    </View>
  );
};

const stil = StyleSheet.create({
  akcije: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%'
  },
  glavniOkvir: {
    marginBottom: 15,
  },
  prikazMape: {
    marginBottom: 10,
    width: "100%",
    height: 150,
    borderColor: "#ccc",
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default OdabirLokacije;
