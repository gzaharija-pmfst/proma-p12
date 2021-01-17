import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { HeaderTitle } from "react-navigation-stack";

const DodajEkran = (props) => {
  return (
    <View>
      <Text>Ekran za dodavanje nove lokacije</Text>
    </View>
  );
};

DodajEkran.navigationOptions = () => {
  return {
    headerTitle: "Nova lokacija",
  };
};

const stil = StyleSheet.create({
  ekran: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default DodajEkran;
