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

const OdabirLokacije = (props) => {
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
      const polozaj = await Location.getCurrentPositionAsync({
        timeout: 5000,
      });
      console.log(polozaj)
    } catch (err) {
      console.log(err);
      Alert.alert(
        "Nije moguće dohvatiti lokaciju",
        "Pokušajte ponovno",
        [{ text: "OK" }]
      );
    }
  };
  return (
    <View style={stil.glavniOkvir}>
      <View style={stil.prikazMape}>
        <Text>Trenutno nema dohvaćene lokacije!</Text>
      </View>
      <Button
        title="Dohvati lokaciju"
        color={Boje.glavna}
        onPress={dohvatiLokaciju}
      />
    </View>
  );
};

const stil = StyleSheet.create({
  glavniOkvir: {
    marginBottom: 15,
  },
  prikazMape: {
    marginBottom: 10,
    width: "100%",
    height: 150,
    borderColor: "#ccc",
    borderWidth: 1,
  },
});

export default OdabirLokacije;
