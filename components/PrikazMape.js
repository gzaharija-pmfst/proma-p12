import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import ENV from "../env";

const PrikazMape = (props) => {
  let urlMape;

  if (props.lokacija) {
    urlMape = "https://mangomap.com/images/thumnails/125f71e6-a4a4-11e6-a028-06c182e4d011_big.png";
 /*    urlMape = `https://maps.googleapis.com/maps/api/staticmap?center=${props.lokacija.lat},${props.lokacija.lng}&zoom=13&size=400x200&maptype=roadmap&markers=color:red%7Clabel:A%7C${props.lokacija.lat},${props.lokacija.lng}&key=${ENV.google_api}` */
  }

  return (
    <View style={stil.prikazMape}>
      {props.lokacija ? (
        <Image style={stil.mapa} source={{ uri: urlMape }} />
      ) : (
        props.children
      )}
    </View>
  );
};

const stil = StyleSheet.create({
  mapa: {
    width: "100%",
    height: "100%",
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

export default PrikazMape;
