import React, { useState } from "react";
import { View, Text, StyleSheet, Button, Image, Alert } from "react-native";
import * as ImagePicker from "expo-image-picker";
import * as Permissions from "expo-permissions";

import Boje from "../constants/Boje";

const OdabirSlike = (props) => {
  const [odabranaSlika, postaviSliku] = useState();

  const dozvoliPristup = async () => {
    const odobrenje = await Permissions.askAsync(Permissions.CAMERA);
    if (odobrenje.status !== "granted") {
      Alert.alert(
        "Nedozvoljen pristup",
        "Morate odobriti aplikaciji pristup kameri kako bi mogli koristiti sve funkcionalnosti",
        [{ text: "OK" }]
      );
      return false;
    }
    return true;
  };

  const snimiSliku = async () => {
    const dozvola = await dozvoliPristup();
    if (!dozvola) {
      return;
    }
    const slika = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
      aspect: [16, 9],
      quality: 0.5,
    });
    postaviSliku(slika.uri);
    props.vratiSliku(slika.uri)
  };

  return (
    <View style={stil.odabir}>
      <View style={stil.prikaz}>
        {!odabranaSlika 
        ? (<Text>Nije odabrana nijedna slika!</Text>) 
        : (<Image style={stil.slika} source={{ uri: odabranaSlika }} />
        )}
      </View>
      <Button title="Nova slika" color={Boje.glavna} onPress={snimiSliku} />
    </View>
  );
};

const stil = StyleSheet.create({
  odabir: {
    alignItems: "center",
    marginBottom: 15
  },
  prikaz: {
    width: "100%",
    height: 200,
    marginBottom: 10,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#ccc",
    borderWidth: 1,
  },
  slika: {
    width: "100%",
    height: "100%",
  },
});

export default OdabirSlike;
